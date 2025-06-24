"use client";

import Link from "next/link";
import { Menu, Moon, ShoppingCart, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "../ui/badge";
import { useTheme } from "next-themes";

export default function MobileMenu() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex lg:hidden items-center space-x-3">
      {/* <span className="text-gray-600 dark:text-gray-300 font-medium">
              £0.00
            </span> */}

      {/* Dark Theme Toggle - Mobile */}
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

      {/* Shopping Cart - Mobile */}
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

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-80 dark:bg-gray-800 transition-colors"
        >
          <SheetHeader>
            <SheetTitle className="dark:text-gray-100">Menu</SheetTitle>
            <SheetDescription className="dark:text-gray-300">
              Browse our furniture categories
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-6 py-6">
            <Link
              href="/products"
              className="text-lg font-medium hover:text-primary text-gray-700 dark:text-gray-300 transition-colors"
            >
              All Products
            </Link>
            <Link
              href="/sofa"
              className="text-lg font-medium hover:text-primary text-gray-700 dark:text-gray-300 transition-colors"
            >
              Sofa
            </Link>
            <Link
              href="/chair"
              className="text-lg font-medium hover:text-primary text-gray-700 dark:text-gray-300 transition-colors"
            >
              Chair
            </Link>
            <Link
              href="/table"
              className="text-lg font-medium hover:text-primary text-gray-700 dark:text-gray-300 transition-colors"
            >
              Table
            </Link>
            {/* <Link
              href="/about"
              className="text-lg font-medium hover:text-primary text-gray-700 dark:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/account"
              className="text-lg font-medium hover:text-primary text-gray-700 dark:text-gray-300 transition-colors"
            >
              My Account
            </Link> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
