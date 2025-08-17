import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="my-7">
      <div className="container mx-auto px-4">
        {/* Chair Collection Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-0">
          <Card className="md:col-span-4 rounded-none border-0 order-1 md:mr-3">
            <CardContent className="bg-gray-100 p-0 max-h-[300px]  dark:bg-gray-700  transition-colors duration-300">
              <Image
                src="/chair.jpg"
                height={300}
                width={200}
                alt="White tufted chair with curved legs"
                className="object-cover w-full max-h-[300px]"
              />
            </CardContent>
          </Card>
          <Card className="md:col-span-8 rounded-none border-0 order-2">
            <CardContent className="bg-primary-50 pt-3 dark:bg-gray-800 flex flex-col justify-center space-y-4 md:space-y-6 min-h-[300px] text-center md:text-left transition-colors duration-300">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4 transition-colors duration-300">
                  Chair Collection!
                </h2>
                <span className="mb-3 md:mb-4  text-gray-700 text-xs md:text-sm">
                  Launch Offer 15% Off!
                </span>
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
        <div className="grid grid-cols-1 md:grid-cols-12 mt-4">
          <Card className="md:col-span-8 rounded-none border-0 md:mr-3 order-2 md:order-1">
            <CardContent className="bg-primary-50 pt-3 dark:bg-gray-800 flex flex-col justify-center space-y-4 md:space-y-6 min-h-[300px] text-center md:text-left transition-colors duration-300">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 md:mb-4 transition-colors duration-300">
                  Modern Collection!
                </h2>
                <span className="mb-3 md:mb-4  text-gray-700 text-xs md:text-sm">
                  New Season Stock
                </span>
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
          <Card className="md:col-span-4 rounded-none border-0 order-1 md:order-2">
            <CardContent className="bg-gray-100 p-0 max-h-[300px]  dark:bg-gray-700  transition-colors duration-300">
              <Image
                src="/chair.jpg"
                height={300}
                width={200}
                alt="White tufted chair with curved legs"
                className="object-cover w-full max-h-[300px]"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
