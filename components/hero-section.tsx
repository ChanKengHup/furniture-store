import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[400px] md:min-h-[500px]">
          <div className="space-y-4 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <Badge
              variant="secondary"
              className="w-fit mx-auto md:mx-0 bg-primary-100 dark:bg-primary-800 text-primary dark:text-primary-200 text-xs md:text-sm"
            >
              New Collection
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 dark:text-gray-300 leading-tight transition-colors duration-300">
              Style
              <br />
              Comfort &<br />
              Affordable
            </h1>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto md:mx-0 transition-colors duration-300">
              Discover our latest furniture collection with modern designs and unbeatable comfort.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="w-fit mx-auto md:mx-0 border-gray-400 dark:border-gray-500 text-gray-500 dark:text-gray-300 hover:bg-gray-500 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-300"
            >
              Explore Store
            </Button>
          </div>
          <div className="relative flex justify-center order-1 md:order-2">
            <div className="absolute top-0 right-0 w-16 md:w-32 h-16 md:h-32 bg-white dark:bg-gray-600 rounded-full opacity-50 transition-colors duration-300"></div>
            <div className="absolute top-10 md:top-20 right-10 md:right-20 w-8 md:w-16 h-8 md:h-16 bg-white dark:bg-gray-600 rounded-full opacity-70 transition-colors duration-300"></div>
            <Image
              src="/placeholder.svg?height=300&width=250"
              alt="Modern chair with wooden legs and geometric wire frame"
              width={250}
              height={300}
              className="relative z-10 rounded-lg w-full max-w-[250px] md:max-w-[350px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
