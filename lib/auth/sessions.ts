import crypto from "crypto";
import { prisma } from "../prisma";
import { headers } from "next/headers";

function parseUserAgent(ua: string | null) {
  if (!ua) return { browser: "Unknown", device: "Unknown" };

  const browser = ua.includes("Firefox")
    ? "Firefox"
    : ua.includes("Chrome")
    ? "Chrome"
    : ua.includes("Safari")
    ? "Safari"
    : "Unknown";

  const device = ua.includes("Mobile")
    ? "Mobile"
    : ua.includes("Tablet")
    ? "Tablet"
    : ua.includes("Windows")
    ? "Windows PC"
    : ua.includes("Macintosh")
    ? "Mac"
    : "Unknown";

  return { browser, device };
}

export async function createOrUpdateSession(userId: string) {
  const headerStore = await headers();

  const ipAddress =
    headerStore.get("x-forwarded-for")?.split(",")[0] || "Unknown";

  const userAgent = headerStore.get("user-agent");
  const { browser, device } = parseUserAgent(userAgent);

  const existingSession = await prisma.session.findFirst({
    where: { userId, ipAddress, browser, device, isValid: true },
  });

  if (existingSession) {
    return prisma.session.update({
      where: { id: existingSession.id },
      data: { updatedAt: new Date() },
    });
  }

  return prisma.session.create({
    data: {
      userId,
      sessionToken: crypto.randomUUID(),
      ipAddress,
      userAgent,
      browser,
      device,
    },
  });
}
