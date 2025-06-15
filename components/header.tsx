"use client";

import Link from "next/link";
import { ShoppingCart, Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Show a loading state until mounted
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/95">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="bg-primary text-primary-foreground px-3 py-2 rounded-sm">
                <div className="text-lg font-bold leading-tight">DECOR</div>
                <div className="text-xs font-normal tracking-wider">
                  BY MILLER
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="flex items-center space-x-8">
                <NavigationMenuItem>
                  <Link href="/products" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-600 hover:text-primary transition-colors font-medium">
                      All Products
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/sofa" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-600 hover:text-primary transition-colors font-medium">
                      Sofa
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/chair" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-600 hover:text-primary transition-colors font-medium">
                      Chair
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/table" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-600 hover:text-primary transition-colors font-medium">
                      Table
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Desktop Right Side Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/about"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                About Us
              </Link>
              <Link
                href="/account"
                className="text-gray-600 hover:text-primary transition-colors font-medium"
              >
                My Account
              </Link>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 font-medium">£0.00</span>

                {/* Dark Theme Toggle */}
                <Button variant="ghost" size="icon" className="p-2">
                  <Sun className="h-5 w-5 text-gray-600" />
                </Button>

                {/* Shopping Cart */}
                <Button variant="ghost" size="icon" className="relative p-2">
                  <ShoppingCart className="h-5 w-5 text-gray-600" />
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
            <div className="flex lg:hidden items-center space-x-3">
              <span className="text-gray-600 font-medium">£0.00</span>

              {/* Dark Theme Toggle - Mobile */}
              <Button variant="ghost" size="icon" className="p-2">
                <Sun className="h-5 w-5 text-gray-600" />
              </Button>

              {/* Shopping Cart - Mobile */}
              <Button variant="ghost" size="icon" className="relative p-2">
                <ShoppingCart className="h-5 w-5 text-gray-600" />
                <Badge
                  variant="secondary"
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary text-primary-foreground flex items-center justify-center"
                >
                  0
                </Badge>
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="p-2">
                    <Menu className="h-6 w-6 text-gray-600" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                      Browse our furniture categories
                    </SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-6 py-6">
                    <Link
                      href="/products"
                      className="text-lg font-medium hover:text-primary text-gray-700"
                    >
                      All Products
                    </Link>
                    <Link
                      href="/sofa"
                      className="text-lg font-medium hover:text-primary text-gray-700"
                    >
                      Sofa
                    </Link>
                    <Link
                      href="/chair"
                      className="text-lg font-medium hover:text-primary text-gray-700"
                    >
                      Chair
                    </Link>
                    <Link
                      href="/table"
                      className="text-lg font-medium hover:text-primary text-gray-700"
                    >
                      Table
                    </Link>
                    <Link
                      href="/about"
                      className="text-lg font-medium hover:text-primary text-gray-700"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/account"
                      className="text-lg font-medium hover:text-primary text-gray-700"
                    >
                      My Account
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-white/95 dark:supports-[backdrop-filter]:bg-gray-900/95 transition-colors duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="bg-primary text-primary-foreground px-3 py-2 rounded-sm">
              <div className="text-lg font-bold leading-tight">DECOR</div>
              <div className="text-xs font-normal tracking-wider">
                BY MILLER
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex items-center space-x-8">
              <NavigationMenuItem>
                <Link href="/products" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                    All Products
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/sofa" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                    Sofa
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/chair" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                    Chair
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/table" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium">
                    Table
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop Right Side Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium"
            >
              About Us
            </Link>
            {/* <Link
              href="/account"
              className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors font-medium"
            >
              My Account
            </Link> */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 dark:text-gray-300 font-medium">
                £0.00
              </span>

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
          <div className="flex lg:hidden items-center space-x-3">
            <span className="text-gray-600 dark:text-gray-300 font-medium">
              £0.00
            </span>

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

            {/* Mobile Menu */}
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
                  <Link
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
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
