"use client";

import { authClient } from "@/lib/auth-client";
import { useQuery } from "@tanstack/react-query";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switch";
import { Main } from "@/components/layout/main";

export default function Dashboard() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  const privateData = useQuery(trpc.privateData.queryOptions());

  return (
    <>
      <Header>
        <div className="ms-auto flex items-center space-x-4">
          <Search />
          <ThemeSwitch />
        </div>
      </Header>
      <Main fluid>
        <h1>Dashboard</h1>
        <p>Welcome {session?.user.name}</p>
        <p>privateData: {privateData.data?.message}</p>
      </Main>
    </>
  );
}
