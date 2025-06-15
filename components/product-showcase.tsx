import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function ProductShowcase() {
  return (
    <section className="py-0">
      <div className="container mx-auto px-4">
        {/* Chair Collection Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mb-0">
          <Card className="rounded-none border-0 order-2 md:order-1">
            <CardContent className="bg-gray-100 dark:bg-gray-700 p-6 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px] transition-colors duration-300">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="White tufted chair with curved legs"
                width={200}
                height={250}
                className="object-contain w-full max-w-[200px] h-auto"
              />
            </CardContent>
          </Card>
          <Card className="rounded-none border-0 order-1 md:order-2">
            <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 md:p-12 flex flex-col justify-center space-y-4 md:space-y-6 min-h-[300px] md:min-h-[400px] text-center md:text-left transition-colors duration-300">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4 transition-colors duration-300">
                  Chair Collection!
                </h2>
                <Badge variant="destructive" className="mb-3 md:mb-4 bg-red-500 text-white text-xs md:text-sm">
                  Launch Offer 15% Off!
                </Badge>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="w-fit mx-auto md:mx-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary dark:hover:text-primary-foreground transition-all duration-300"
              >
                → View Collection
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Modern Collection Section */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Card className="rounded-none border-0">
            <CardContent className="bg-gray-50 dark:bg-gray-800 p-6 md:p-12 flex flex-col justify-center space-y-4 md:space-y-6 min-h-[300px] md:min-h-[400px] text-center md:text-left transition-colors duration-300">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4 transition-colors duration-300">
                  Modern Collection!
                </h2>
                <Badge
                  variant="secondary"
                  className="mb-3 md:mb-4 bg-primary-100 dark:bg-primary-800 text-primary dark:text-primary-200 text-xs md:text-sm"
                >
                  New Season Stock
                </Badge>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="w-fit mx-auto md:mx-0 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary-400 dark:text-primary-300 dark:hover:bg-primary dark:hover:text-primary-foreground transition-all duration-300"
              >
                → View Collection
              </Button>
            </CardContent>
          </Card>
          <Card className="rounded-none border-0">
            <CardContent className="bg-pink-100 dark:bg-pink-900 p-6 md:p-12 flex items-center justify-center min-h-[300px] md:min-h-[400px] transition-colors duration-300">
              <Image
                src="/placeholder.svg?height=250&width=200"
                alt="Director's chair with wooden frame and black fabric"
                width={200}
                height={250}
                className="object-contain w-full max-w-[200px] h-auto"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
