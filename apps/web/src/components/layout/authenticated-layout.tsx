"use client";

import { SearchProvider } from "@/context/search-provider";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SkipToMain } from "@/components/skip-to-main";
import { AuthProvider } from "@/context/auth-provider";

type AuthenticatedLayoutProps = {
  children?: React.ReactNode;
};

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <AuthProvider>
      <SearchProvider>
        <SidebarProvider>
          <SkipToMain />
          <AppSidebar />
          <SidebarInset className="@container/content">{children}</SidebarInset>
        </SidebarProvider>
      </SearchProvider>
    </AuthProvider>
  );
}
