import dayjs from "dayjs";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getHomeData } from "./_lib/api/fetch-generated";
import { authClient } from "./_lib/auth-client";

export default async function Home() {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });

  if (!session.data?.user) redirect("/auth");

  const homeData = await getHomeData(dayjs().format("YYYY-MM-DD"));

  console.log(homeData);
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
