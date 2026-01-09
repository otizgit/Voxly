import { redirect } from "next/navigation";
import { checkSession } from "../../../lib/auth/checkSession";

export default async function page() {
  const { sessionToken, session } = await checkSession();
  console.log(session, sessionToken);

  if (!sessionToken || !session) {
    redirect("/login");
  }

  return <div>hello world</div>;
}
