import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "../index.css";
import Providers from "@/context/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Spiral",
  description: "All movies, all the time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable}  antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
