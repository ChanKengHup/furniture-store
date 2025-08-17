"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Filter, Grid, List, X, Search, ShoppingCart, Eye } from "lucide-react";
import { ProductGridSkeleton } from "./loading-states";
import ItemList from "./item-list";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  onSale?: boolean;
  description?: string;
}

export enum ViewMode {
  Grid = "grid",
  List = "list",
}

interface ProductGridProps {
  products: Product[];
  category: string;
}

export default function ProductGrid({ products, category }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("default");
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.Grid);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([100, 1500]); // Increased max range for all products
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // 2 second loading simulation

    return () => clearTimeout(timer);
  }, []);

  // Get category counts
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // All available categories with counts (dynamically generated from products)
  const allCategories = Object.keys(categoryCounts)
    .map((categoryName) => ({
      name: categoryName,
      count: categoryCounts[categoryName],
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);
    return matchesSearch && matchesPrice && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });

  const handleCategoryChange = (categoryName: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryName]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== categoryName)
      );
    }
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setPriceRange([100, 1500]);
    setSelectedCategories([]);
    setIsOpen(false);
  };

  // Show loading skeleton
  if (isLoading) {
    return <ProductGridSkeleton />;
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Filter and Sort Controls */}
      <div className="flex justify-between items-center mb-8">
        <Drawer
          direction="left"
          dismissible={false}
          open={isOpen}
          onOpenChange={setIsOpen}
        >
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 border-gray-400 dark:border-gray-600 text-gray-600 dark:text-gray-300 transition-colors duration-300"
            >
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </DrawerTrigger>
          <DrawerContent className="h-full w-80 mt-0 rounded-none dark:bg-gray-800 transition-colors duration-300">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader className="text-left">
                <DrawerTitle className="dark:text-gray-100">
                  Filter Products
                </DrawerTitle>
                <DrawerDescription className="dark:text-gray-300">
                  Refine your search using the options below
                </DrawerDescription>
              </DrawerHeader>

              <div className="p-4 pb-0 space-y-6">
                {/* Search */}
                <div>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 h-4 w-4" />
                    <Input
                      placeholder="Search products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                    />
                  </div>
                </div>

                {/* Filter by Price */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">
                    Filter by price
                  </h3>
                  <div className="mb-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={1500}
                      min={0}
                      step={10}
                      className="mb-4"
                    />
                  </div>
                  <div className="flex justify-between w-full text-sm text-gray-500 dark:text-gray-400 mt-2">
                    <span>0</span>
                    <span>1500</span>
                  </div>
                </div>

                {/* Product Categories */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">
                    Product Categories
                  </h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {allCategories.map((cat) => (
                      <div
                        key={cat.name}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox
                          id={cat.name}
                          checked={selectedCategories.includes(cat.name)}
                          onCheckedChange={(checked) =>
                            handleCategoryChange(cat.name, checked as boolean)
                          }
                        />
                        <label
                          htmlFor={cat.name}
                          className="text-sm text-gray-600 dark:text-gray-300 cursor-pointer flex-1"
                        >
                          {cat.name} ({cat.count})
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <DrawerFooter>
                <Button
                  onClick={clearAllFilters}
                  variant="outline"
                  className="w-full dark:border-gray-600 dark:text-gray-300"
                >
                  Clear All Filters
                </Button>
                <DrawerClose asChild>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-white text-gray-700 hover:bg-white"
                  >
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>

        <div className="flex items-center gap-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100">
              <SelectValue placeholder="Default sorting" />
            </SelectTrigger>
            <SelectContent className="dark:bg-gray-800 dark:border-gray-600">
              <SelectItem value="default" className="dark:text-gray-100">
                Default sorting
              </SelectItem>
              <SelectItem value="price-low" className="dark:text-gray-100">
                Price: Low to High
              </SelectItem>
              <SelectItem value="price-high" className="dark:text-gray-100">
                Price: High to Low
              </SelectItem>
              <SelectItem value="name" className="dark:text-gray-100">
                Name: A to Z
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border dark:border-gray-600 rounded">
            <Button
              variant={viewMode === ViewMode.Grid ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode(ViewMode.Grid)}
              className={
                viewMode === ViewMode.Grid
                  ? "bg-primary text-primary-foreground hover:bg-primary-600"
                  : "dark:text-gray-300 dark:hover:bg-gray-700"
              }
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === ViewMode.List ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode(ViewMode.List)}
              className={
                viewMode === ViewMode.List
                  ? "bg-primary text-primary-foreground hover:bg-primary-600"
                  : "dark:text-gray-300 dark:hover:bg-gray-700"
              }
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          Showing {sortedProducts.length} of {products.length} products
          {category !== "All Products" && ` in ${category}`}
        </p>
      </div>

      {/* Active Filters Display */}
      {(searchTerm ||
        selectedCategories.length > 0 ||
        priceRange[0] !== 100 ||
        priceRange[1] !== 1500) && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Active filters:
            </span>
            {searchTerm && (
              <Badge
                variant="secondary"
                className="gap-1.5 dark:bg-gray-700 dark:text-gray-200"
              >
                Search: {searchTerm}
                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-1 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            {selectedCategories.map((category) => (
              <Badge
                key={category}
                variant="secondary"
                className="gap-1.5 dark:bg-gray-700 dark:text-gray-200"
              >
                {category}
                <button
                  onClick={() => handleCategoryChange(category, false)}
                  className="ml-1 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            {(priceRange[0] !== 100 || priceRange[1] !== 1500) && (
              <Badge
                variant="secondary"
                className="gap-1.5 dark:bg-gray-700 dark:text-gray-200"
              >
                £{priceRange[0]} - £{priceRange[1]}
                <button
                  onClick={() => setPriceRange([100, 1500])}
                  className="ml-1 text-purple-600 hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-xs dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Clear all
            </Button>
          </div>
        </div>
      )}

      {/* Product Display */}
      <ItemList sortedProducts={sortedProducts} viewMode={viewMode} />

      {/* No Results */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-300">
            No products found matching your criteria.
          </p>
          <Button
            onClick={clearAllFilters}
            variant="outline"
            className="mt-4 dark:border-gray-600 dark:text-gray-300"
          >
            Clear filters and try again
          </Button>
        </div>
      )}
    </div>
  );
}
