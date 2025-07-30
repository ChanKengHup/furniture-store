import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="container px-4 mx-auto relative overflow-hidden dark:bg-gray-800 transition-colors duration-300">
      <div className=" py-8 md:py-16 relative h-full bg-[url('/images/sofa-background-banner.jpg')] bg-no-repeat bg-right bg-cover md:bg-right-bottom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center min-h-[400px] md:min-h-[500px]">
          <div className="space-y-4 ml-0 md:ml-24 md:space-y-6 text-center md:text-left order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 dark:text-gray-300 leading-tight transition-colors duration-300">
              Style
              <br />
              Comfort &<br />
              Affordable
            </h1>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto md:mx-0 transition-colors duration-300">
              Discover our latest furniture collection with modern designs and
              unbeatable comfort.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="w-fit mx-auto md:mx-0 border-gray-400 dark:border-gray-500 text-gray-500 dark:text-gray-300 hover:bg-gray-500 hover:text-white dark:hover:bg-gray-600 dark:hover:text-white transition-all duration-300"
            >
              Explore Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
