"use client";

import Link from "next/link";
import { ShoppingCart, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import MobileMenu from "./mobileMenu";
import Navigation from "./navigation";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-gray-900/95 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="bg-primary text-primary-foreground px-3 py-2 rounded-sm">
              <div className="text-lg font-bold leading-tight">DECOR</div>
              <div className="text-xs font-normal tracking-wider">
                BY MILLER
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <Navigation />

          {/* Desktop Right Side Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link> */}
            {/* <Link
              href="/account"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium"
            >
              My Account
            </Link> */}
            <div className="flex items-center space-x-3">
              {/* <span className="text-gray-600 dark:text-gray-300 font-medium">
                £0.00
              </span> */}

              {/* Dark Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {resolvedTheme === "dark" ? (
                  <Sun className="h-5 w-5 text-gray-600 dark:text-gray-300 transition-colors" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 dark:text-gray-300 transition-colors" />
                )}
              </Button>

              {/* Shopping Cart */}
              <Button
                variant="ghost"
                size="icon"
                className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                <Badge
                  variant="secondary"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary text-primary-foreground flex items-center justify-center"
                >
                  0
                </Badge>
              </Button>
            </div>
          </div>

          {/* Mobile Right Side - Theme, Cart and Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
