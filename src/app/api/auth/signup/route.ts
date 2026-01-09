export const runtime = "nodejs";
import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import bcrypt from "bcryptjs";
import { signupSchema } from "../../../../../lib/validation/auth";
import { generateUniqueUsername } from "../../../../../lib/auth/username";
import { createOrUpdateSession } from "../../../../../lib/auth/sessions";

export async function POST(req: Request) {
  const body = await req.json();
  const result = signupSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Invalid request data",
        error: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { displayName, email, password } = result.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "Email is already registered" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const username = await generateUniqueUsername(displayName);

  try {
    const user = await prisma.user.create({
      data: {
        displayName,
        username,
        email,
        password: hashedPassword,
      },
    });

    const session = await createOrUpdateSession(user.id);

    const response = NextResponse.json(
      {
        message: "Account created successfully. Redirecting...",
        user: { userId: user.id, email: user.email },
      },
      { status: 201 }
    );

    response.cookies.set("session_token", session.sessionToken, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
      sameSite: "lax",
    });

    return response;
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { message: "Username collision, please retry" },
        { status: 409 }
      );
    }

    throw error;
  }
}
