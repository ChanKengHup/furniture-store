"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Filter, Grid, List, X, Search, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import { ProductGridSkeleton } from "./loading-states"

interface Product {
  id: number
  name: string
  category: string
  price: number
  originalPrice?: number
  image: string
  onSale?: boolean
  description?: string
}

interface ProductGridProps {
  products: Product[]
  category: string
}

export default function ProductGrid({ products, category }: ProductGridProps) {
  const [sortBy, setSortBy] = useState("default")
  const [viewMode, setViewMode] = useState("grid")
  const [searchTerm, setSearchTerm] = useState("")
  const [priceRange, setPriceRange] = useState([100, 1500]) // Increased max range for all products
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // 2 second loading simulation

    return () => clearTimeout(timer)
  }, [])

  // Get category counts
  const categoryCounts = products.reduce(
    (acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  // All available categories with counts (dynamically generated from products)
  const allCategories = Object.keys(categoryCounts)
    .map((categoryName) => ({
      name: categoryName,
      count: categoryCounts[categoryName],
    }))
    .sort((a, b) => a.name.localeCompare(b.name))

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    return matchesSearch && matchesPrice && matchesCategory
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "name":
        return a.name.localeCompare(b.name)
      case "category":
        return a.category.localeCompare(b.category)
      default:
        return 0
    }
  })

  const handleCategoryChange = (categoryName: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categoryName])
    } else {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== categoryName))
    }
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setPriceRange([100, 1500])
    setSelectedCategories([])
  }

  // Show loading skeleton
  if (isLoading) {
    return <ProductGridSkeleton />
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Filter and Sort Controls */}
      <div className="flex justify-between items-center mb-8">
        <Drawer direction="left">
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
                <DrawerTitle className="dark:text-gray-100">Filter Products</DrawerTitle>
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
                  <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">Filter by price</h3>
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
                  <div className="flex gap-2 items-center">
                    <Input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number.parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-20 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      placeholder="£100"
                    />
                    <span className="text-gray-500 dark:text-gray-400">-</span>
                    <Input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value) || 1500])}
                      className="w-20 text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                      placeholder="£1500"
                    />
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Min. Price <span className="mx-2">Max. Price</span>
                  </div>
                </div>

                {/* Product Categories */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-gray-600 dark:text-gray-300">Product Categories</h3>
                  <div className="space-y-3 max-h-60 overflow-y-auto">
                    {allCategories.map((cat) => (
                      <div key={cat.name} className="flex items-center space-x-2">
                        <Checkbox
                          id={cat.name}
                          checked={selectedCategories.includes(cat.name)}
                          onCheckedChange={(checked) => handleCategoryChange(cat.name, checked as boolean)}
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
                  <Button className="w-full">Apply Filters</Button>
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
              <SelectItem value="category" className="dark:text-gray-100">
                Category
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border dark:border-gray-600 rounded">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground hover:bg-primary-600"
                  : "dark:text-gray-300 dark:hover:bg-gray-700"
              }
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={
                viewMode === "list"
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
      {(searchTerm || selectedCategories.length > 0 || priceRange[0] !== 100 || priceRange[1] !== 1500) && (
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors duration-300">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active filters:</span>
            {searchTerm && (
              <Badge variant="secondary" className="gap-1.5 dark:bg-gray-700 dark:text-gray-200">
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
              <Badge key={category} variant="secondary" className="gap-1.5 dark:bg-gray-700 dark:text-gray-200">
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
              <Badge variant="secondary" className="gap-1.5 dark:bg-gray-700 dark:text-gray-200">
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
      {viewMode === "grid" ? (
        // Grid View (Default)
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <CardContent className="p-0">
                <div className="relative">
                  {product.onSale && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded z-10">
                      Sale!
                    </span>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 dark:text-gray-500 line-through transition-colors duration-300">
                        £{product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                      £{product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-6">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Product Image */}
                  <div className="relative">
                    {product.onSale && (
                      <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded z-10">
                        Sale!
                      </span>
                    )}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/80 hover:bg-white dark:bg-gray-700/80 dark:hover:bg-gray-700"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="secondary"
                        className="h-8 w-8 bg-white/80 hover:bg-white dark:bg-gray-700/80 dark:hover:bg-gray-700"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="md:col-span-2 p-6 flex flex-col justify-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300">
                      {product.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 dark:text-gray-500 line-through transition-colors duration-300">
                          £{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                        £{product.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {product.description ||
                        "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis pr."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* No Results */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-300">
            No products found matching your criteria.
          </p>
          <Button onClick={clearAllFilters} variant="outline" className="mt-4 dark:border-gray-600 dark:text-gray-300">
            Clear filters and try again
          </Button>
        </div>
      )}
    </div>
  )
}
