import { prisma } from "../../../../../lib/prisma";
import { loginSchema } from "../../../../../lib/validation/auth";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

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
}
