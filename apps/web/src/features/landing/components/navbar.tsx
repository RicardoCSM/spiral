"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/assets/logo";
import { authClient } from "@/lib/auth-client";

const Items = [
  {
    label: "Home",
    id: "hero",
  },
  {
    label: "Features",
    id: "features",
  },
  {
    label: "Docs",
    id: "docs",
  },
  {
    label: "Projects",
    id: "projects",
  },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-4"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="bg-background/80 backdrop-blur-md border border-border rounded-2xl px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8">
                  <Logo />
                </div>
                <span className="text-lg font-semibold">Spiral</span>
              </div>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {Items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <h2
                    onClick={() => handleScroll(item.id)}
                    className="cursor-pointer text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </h2>
                </motion.div>
              ))}
            </nav>

            <div className="flex items-center space-x-3">
              <ThemeSwitch />

              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button variant="default" size="sm" asChild>
                  <Link href="/sign-in">Get Started</Link>
                </Button>
              </motion.div>

              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <motion.button
                    className={cn(
                      "md:hidden p-2",
                      buttonVariants({ variant: "default" })
                    )}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle className="sr-only">Menu</SheetTitle>
                  </SheetHeader>
                  <div className="px-4 space-y-6">
                    {Items.map((item, i) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.1 }}
                      >
                        <h2
                          className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => {
                            setIsOpen(false);
                            handleScroll(item.id);
                          }}
                        >
                          {item.label}
                        </h2>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="pt-6"
                    >
                      <Button className="w-full" asChild>
                        <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                          Get Started
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
