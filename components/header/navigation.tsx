import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navigation() {
  return (
    <>
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
    </>
  );
}
