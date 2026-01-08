import { prisma } from "../prisma";

function normalizeUsername(displayName: string) {
  return displayName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "_")
    .replace(/[^a-z0-9_]/g, "");
}

function randomSuffix() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

export async function generateUniqueUsername(displayName: string) {
  let baseUsername = normalizeUsername(displayName);
  let username: string;
  let exists = true;

  while (exists) {
    username = `${baseUsername}_${randomSuffix()}`;

    const user = await prisma.user.findUnique({
      where: { username },
      select: { id: true },
    });

    exists = !!user;
  }
  return username!;
}
