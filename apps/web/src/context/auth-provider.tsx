import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/sign-in");
    }
  }, [isPending, session, router]);

  if (isPending || !session) {
    return null;
  }

  return <>{children}</>;
}
