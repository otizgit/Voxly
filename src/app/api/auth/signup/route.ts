import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import bcrypt from "bcryptjs";
import { signupSchema } from "../../../../../lib/validation/auth";

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
      { email: "Email is already registered" },
      { status: 409 }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      displayName,
      email,
      password: hashedPassword,
    },
  });

  return NextResponse.json(
    { message: "User created successfully", userId: user.id },
    { status: 201 }
  );
}
