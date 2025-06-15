import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function SaleSection() {
  return (
    <section className="py-8 md:py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-lg dark:bg-gray-700 transition-colors duration-300">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="p-6 md:p-8 lg:p-12 flex flex-col justify-center space-y-4 md:space-y-6 bg-white dark:bg-gray-700 text-center md:text-left order-2 md:order-1 transition-colors duration-300">
                <div>
                  <Badge
                    variant="destructive"
                    className="text-sm md:text-lg px-3 md:px-4 py-1 md:py-2 mb-3 md:mb-4 bg-red-500 text-white mx-auto md:mx-0 w-fit"
                  >
                    Sale!
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
                    10% Off On All Products!
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-sm md:text-base transition-colors duration-300">
                    Limited time offer on our entire furniture collection. Don't miss out!
                  </p>
                </div>
                <Button
                  size="lg"
                  className="w-fit mx-auto md:mx-0 bg-primary hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 transition-all duration-300"
                >
                  Shop Now
                </Button>
              </div>
              <div className="bg-gray-100 dark:bg-gray-600 p-6 md:p-8 lg:p-12 flex items-center justify-center order-1 md:order-2 transition-colors duration-300">
                <Image
                  src="/placeholder.svg?height=250&width=180"
                  alt="Decorative cactus plant in modern pot"
                  width={180}
                  height={250}
                  className="rounded-lg w-full max-w-[180px] h-auto"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
