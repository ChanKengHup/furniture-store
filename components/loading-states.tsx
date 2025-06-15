import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

// Header Loading Skeleton
export function HeaderSkeleton() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Skeleton className="h-8 w-20" />

          {/* Desktop Navigation Skeleton */}
          <div className="hidden md:flex items-center space-x-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>

          {/* Mobile Menu Button Skeleton */}
          <Skeleton className="md:hidden h-10 w-10 rounded-md" />

          <div className="flex items-center space-x-4">
            <Skeleton className="h-5 w-12" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </header>
  )
}

// Hero Section Loading Skeleton
export function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden bg-muted/50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
          <div className="space-y-6">
            <Skeleton className="h-6 w-32 rounded-full" />
            <div className="space-y-4">
              <Skeleton className="h-16 w-64" />
              <Skeleton className="h-16 w-48" />
              <Skeleton className="h-16 w-56" />
            </div>
            <Skeleton className="h-4 w-80" />
            <Skeleton className="h-12 w-32 rounded-md" />
          </div>
          <div className="relative">
            <Skeleton className="h-[400px] w-[500px] rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

// Product Showcase Loading Skeleton
export function ProductShowcaseSkeleton() {
  return (
    <section className="py-0">
      <div className="container mx-auto px-4">
        {/* Chair Collection Skeleton */}
        <div className="grid md:grid-cols-2 mb-0">
          <Card className="rounded-none border-0">
            <CardContent className="bg-muted p-12 flex items-center justify-center">
              <Skeleton className="h-[300px] w-[250px]" />
            </CardContent>
          </Card>
          <Card className="rounded-none border-0">
            <CardContent className="bg-muted/50 p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-12 w-80" />
                <Skeleton className="h-6 w-40 rounded-full" />
              </div>
              <Skeleton className="h-12 w-40 rounded-md" />
            </CardContent>
          </Card>
        </div>

        {/* Modern Collection Skeleton */}
        <div className="grid md:grid-cols-2">
          <Card className="rounded-none border-0">
            <CardContent className="bg-muted/50 p-12 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <Skeleton className="h-12 w-80" />
                <Skeleton className="h-6 w-32 rounded-full" />
              </div>
              <Skeleton className="h-12 w-40 rounded-md" />
            </CardContent>
          </Card>
          <Card className="rounded-none border-0">
            <CardContent className="bg-pink-100 p-12 flex items-center justify-center">
              <Skeleton className="h-[300px] w-[250px]" />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

// Trust Indicators Loading Skeleton
export function TrustIndicatorsSkeleton() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <Card key={index} className="border-0 shadow-none">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-24" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Sale Section Loading Skeleton
export function SaleSkeleton() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Skeleton className="h-8 w-16 rounded-full" />
                  <Skeleton className="h-10 w-80" />
                  <Skeleton className="h-4 w-96" />
                </div>
                <Skeleton className="h-12 w-32 rounded-md" />
              </div>
              <div className="bg-muted/50 p-8 flex items-center justify-center">
                <Skeleton className="h-[300px] w-[200px] rounded-lg" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Latest Products Loading Skeleton
export function LatestProductsSkeleton() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-80 mx-auto" />
          <Skeleton className="h-4 w-96 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <Card key={index} className="group">
              <CardHeader className="p-0">
                <Skeleton className="w-full h-48 rounded-t-lg" />
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                <Skeleton className="h-5 w-16 rounded-full" />
                <Skeleton className="h-5 w-full" />
                <div className="flex items-center space-x-2">
                  <Skeleton className="h-6 w-16" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Skeleton className="h-10 w-full rounded-md" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials Loading Skeleton
export function TestimonialsSkeleton() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <Skeleton className="h-10 w-80 mx-auto" />
          <Skeleton className="h-4 w-64 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Skeleton key={i} className="h-4 w-4" />
                  ))}
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex items-center space-x-3">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-20" />
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

// Product Grid Loading Skeleton
export function ProductGridSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Filter and Sort Controls Skeleton */}
      <div className="flex justify-between items-center mb-8">
        <Skeleton className="h-10 w-20 rounded-md" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-48 rounded-md" />
          <div className="flex border rounded">
            <Skeleton className="h-8 w-8 rounded-l" />
            <Skeleton className="h-8 w-8 rounded-r" />
          </div>
        </div>
      </div>

      {/* Product Grid Skeleton */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, index) => (
          <Card key={index} className="group">
            <CardContent className="p-0">
              <Skeleton className="w-full h-64 rounded-t-lg" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-5 w-full" />
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-16" />
                  <Skeleton className="h-4 w-12" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Footer Loading Skeleton
export function FooterSkeleton() {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-4 py-12">
        <Card className="border-0 bg-muted/50 mb-8">
          <CardContent className="p-8 text-center space-y-4">
            <Skeleton className="h-6 w-40 mx-auto" />
            <div className="flex justify-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-10 w-10 rounded-md" />
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-5 w-32" />
              <div className="space-y-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-24" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Skeleton className="h-px w-full mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-4 w-40" />
        </div>
      </div>
    </footer>
  )
}
