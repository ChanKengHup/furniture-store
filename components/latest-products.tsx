import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LatestProducts() {
  const products = [
    {
      name: "Armchair",
      description: "Wooden Rocking Chair",
      price: "£199.00",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Sofa",
      description: "Desktop Table with Drawers",
      price: "£399.00",
      originalPrice: "£459.00",
      image: "/placeholder.svg?height=200&width=200",
      onSale: true,
    },
    {
      name: "Chair",
      description: "Orange Recliner with Arm Rest",
      price: "£299.00",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Stool",
      description: "Round Steel Leg Stool - Pair",
      price: "£99.00",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
            Our Latest Products
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm md:text-base transition-colors duration-300">
            Discover our newest furniture pieces designed for modern living
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 dark:bg-gray-800"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  {product.onSale && (
                    <Badge variant="destructive" className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs">
                      Sale!
                    </Badge>
                  )}
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - ${product.description}`}
                    width={200}
                    height={200}
                    className="w-full h-40 md:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-3 md:p-4">
                <Badge
                  variant="outline"
                  className="mb-2 border-primary-200 dark:border-primary-600 text-primary dark:text-primary-300 text-xs transition-colors duration-300"
                >
                  {product.name}
                </Badge>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors text-gray-700 dark:text-gray-200 text-sm md:text-base">
                  {product.description}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-base md:text-lg text-gray-800 dark:text-gray-100 transition-colors duration-300">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs md:text-sm text-gray-400 dark:text-gray-500 line-through transition-colors duration-300">
                      {product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="p-3 md:p-4 pt-0">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary dark:hover:text-primary-foreground text-sm transition-all duration-300"
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
