import { Award, Truck, Wrench, Headphones, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function TrustIndicators() {
  const indicators = [
    { icon: Award, text: "10 Years Experience" },
    { icon: Truck, text: "Flexible Delivery" },
    { icon: Wrench, text: "Free Installation" },
    { icon: Headphones, text: "After Sales Support" },
    { icon: Shield, text: "5 Years Warranty" },
  ]

  return (
    <section className="py-8 md:py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-6">
          {indicators.map((item, index) => (
            <Card key={index} className="border-0 shadow-none bg-transparent">
              <CardContent className="flex flex-col items-center justify-center p-3 md:p-6 text-center">
                <item.icon className="h-8 w-8 md:h-12 md:w-12 mb-2 md:mb-4 text-primary dark:text-primary-400 transition-colors duration-300" />
                <p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 leading-tight transition-colors duration-300">
                  {item.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
