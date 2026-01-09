export const runtime = "nodejs";
import { prisma } from "../../../../../lib/prisma";
import { loginSchema } from "../../../../../lib/validation/auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateSessionToken } from "../../../../../lib/auth/sessions";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.json();
  const result = loginSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        message: "Invalid request data",
        error: result.error.flatten().fieldErrors,
      },
      { status: 400 }
    );
  }

  const { email, password } = result.data;
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }

  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "Unknown";
  const ipAddress =
    headersList.get("x-forwarded-for")?.split(",")[0] ||
    headersList.get("x-real-ip") ||
    "Unknown";

  const existingSession = await prisma.session.findFirst({
    where: {
      userId: user.id,
      userAgent,
      ipAddress,
      isValid: true,
    },
  });

  let session;

  if (existingSession) {
    session = await prisma.session.update({
      where: { id: existingSession.id },
      data: { updatedAt: new Date() },
    });
  } else {
    session = await prisma.session.create({
      data: {
        userId: user.id,
        sessionToken: generateSessionToken(),
        userAgent,
        ipAddress,
      },
    });
  }

  const response = NextResponse.json(
    {
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
      },
    },
    { status: 200 }
  );

  response.cookies.set("session_token", session.sessionToken, {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
    sameSite: "lax",
  });

  return response;
}
