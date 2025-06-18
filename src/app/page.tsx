import { auth } from "@/lib/auth";
import { HomeView } from "./modules/home/ui/views/home-view";
import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function RootPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return <HomeView />;
}
