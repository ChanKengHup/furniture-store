import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      author: "Patricia Warren",
      rating: 5,
    },
    {
      text: "Convallis lacinia orci! Hac morbi laboris dolorem, rhoncus, ut magna, magna corrupti nisl dis dolores aptent eveniet nostrud ex.",
      author: "Lauren Lane",
      rating: 5,
    },
    {
      text: "Semper laboris possimus, molestiae, anim amore? Molestie! Dictumst scelerisque error, autem leo. Autem integer dignissim.",
      author: "Paul Smithen",
      rating: 4,
    },
  ]

  return (
    <section className="py-8 md:py-16 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-800 dark:text-gray-100 transition-colors duration-300">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base transition-colors duration-300">
            Real feedback from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md bg-white dark:bg-gray-700 transition-colors duration-300">
              <CardContent className="p-4 md:p-6">
                <div className="flex mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 md:h-4 md:w-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300 dark:text-gray-600"} transition-colors duration-300`}
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 dark:text-gray-300 mb-3 md:mb-4 italic text-sm md:text-base transition-colors duration-300">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8 md:h-10 md:w-10">
                    <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
                    <AvatarFallback className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs md:text-sm transition-colors duration-300">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100 text-sm md:text-base transition-colors duration-300">
                      {testimonial.author}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                      Verified Customer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
