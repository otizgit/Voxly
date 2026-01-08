export const runtime = "nodejs";
import { NextResponse } from "next/server";
// import { prisma } from "../../../../../lib/prisma";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { signupSchema } from "../../../../../lib/validation/auth";
import { generateUniqueUsername } from "../../../../../lib/auth/username";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  console.log("Signup route called");
  
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

    return NextResponse.json(
      { message: "User created successfully", userId: user.id },
      { status: 201 }
    );
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
