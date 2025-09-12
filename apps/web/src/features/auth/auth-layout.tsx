import { Logo } from "@/assets/logo";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type AuthLayoutProps = {
  children: React.ReactNode;
};

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <Button
        variant="link"
        className="absolute top-4 left-4 md:top-8 md:left-8"
        asChild
      >
        <Link href="/">
          <ArrowLeft className="h-4 w-4" />
          Go back
        </Link>
      </Button>
      <div className="container grid h-svh max-w-none items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8">
          <div className="mb-4 flex items-center justify-center">
            <Logo />
            <h1 className="ml-2 text-xl font-medium">Spiral</h1>
          </div>
          <div className="font-sans">{children}</div>
        </div>
      </div>
    </>
  );
}
