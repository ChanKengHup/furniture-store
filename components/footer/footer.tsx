import Link from "next/link";
import { Button } from "@/components/ui/button";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="bg-card dark:bg-gray-900 text-card-foreground dark:text-gray-100 transition-colors duration-300">
      {/* Connect with Us Section */}
      <Socials />
      {/* Navigation Links Section */}
      <div className="bg-white dark:bg-gray-900 py-12 md:py-16 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            {/* Product Links Section */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
                Product Links
              </h4>
              <div className="space-y-3">
                <div>
                  <Link
                    href="/products"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    All Products
                  </Link>
                </div>
                <div>
                  <Link
                    href="/sofa"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Sofa
                  </Link>
                </div>
                <div>
                  <Link
                    href="/chair"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Chair
                  </Link>
                </div>
                <div>
                  <Link
                    href="/table"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Table
                  </Link>
                </div>
              </div>
            </div>

            {/* Chairs Section */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
                Chairs
              </h4>
              <div className="space-y-3">
                <div>
                  <Link
                    href="/chairs/chair"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Chair
                  </Link>
                </div>
                <div>
                  <Link
                    href="/chairs/armchair"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Armchair
                  </Link>
                </div>
                <div>
                  <Link
                    href="/chairs/recliner"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Recliner
                  </Link>
                </div>
                <div>
                  <Link
                    href="/chairs/stool"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Stool
                  </Link>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
                Table
              </h4>
              <div className="space-y-3">
                <div>
                  <Link
                    href="/tables/study"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Study table
                  </Link>
                </div>
                <div>
                  <Link
                    href="/tables/table"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Table
                  </Link>
                </div>
                <div>
                  <Link
                    href="/tables/computer"
                    className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors text-base block"
                  >
                    Computer table
                  </Link>
                </div>
              </div>
            </div>

            {/* Have Questions Section */}
            <div className="text-center md:text-left">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-6 transition-colors duration-300">
                Have Questions?
              </h4>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary dark:hover:text-primary-foreground px-8 py-3 text-base transition-all duration-300"
              >
                <a href="tel:+84355012266">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 dark:bg-gray-950 text-white py-6 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>Copyright © 2025 Furniture Store</p>
            <p>Powered by Furniture Store</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
