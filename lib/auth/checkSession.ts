import { cookies } from "next/headers";
import { prisma } from "../prisma";

export async function checkSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_token")?.value;

  const session = prisma.session.findUnique({
    where: { sessionToken },
  });

  return { sessionToken, session };
}
