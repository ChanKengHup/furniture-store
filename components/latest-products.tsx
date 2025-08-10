import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Eye, ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
} from "./ui/dialog";
import { useState } from "react";

interface IProduct {
  name: string;
  description: string;
  price: string;
  image: string;
  originalPrice?: string;
  onSale?: boolean;
}

export default function LatestProducts() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<IProduct>({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const products: IProduct[] = [
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
      image: "/chair.jpg",
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
  ];

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
                    <Badge
                      variant="destructive"
                      className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs"
                    >
                      Sale!
                    </Badge>
                  )}
                  <div className="group-hover:block hidden">
                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="w-7 h-7 shadow-md rounded-[50%] cursor-pointer flex justify-center items-center absolute top-3 right-3 z-10 bg-white text-primary text-xs">
                            <ShoppingCart className="h-4 w-4" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="left" align="center">
                          <span className="text-xs">Add to cart</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider delayDuration={200}>
                      <Tooltip>
                        <TooltipTrigger
                          onClick={() => {
                            setOpen(true);
                            setProduct(product);
                          }}
                          asChild
                        >
                          <div className="w-7 h-7 shadow-md rounded-[50%] cursor-pointer flex justify-center items-center absolute top-14 right-3 z-10 bg-white text-primary text-xs">
                            <Eye className="h-4 w-4" />
                            <TooltipContent side="left" align="center">
                              <span className="text-xs">Quick view</span>
                            </TooltipContent>
                          </div>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
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
            </Card>
          ))}
        </div>
      </div>
      {open ? (
        <Dialog
          open={open}
          onOpenChange={(value) => {
            setOpen(value);
          }}
        >
          <DialogPortal>
            <DialogOverlay className="AlertDialogOverlay" />
            <DialogContent className="max-w-5xl p-2">
              <DialogDescription>
                <div className="grid grid-cols-1 md:grid-cols-12 mb-0">
                  <Card className="md:col-span-6 rounded-none border-0 order-1 md:mr-3">
                    <CardContent className="bg-gray-100 p-0 max-h-[300px]  dark:bg-gray-700  transition-colors duration-300">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        height={300}
                        width={200}
                        alt="White tufted chair with curved legs"
                        className="object-cover w-full max-h-[300px]"
                      />
                    </CardContent>
                  </Card>
                  <Card className="md:col-span-6 rounded-none border-0 order-2">
                    <CardContent className="bg-white pt-3 dark:bg-gray-800 flex flex-col justify-center space-y-4 md:space-y-6 min-h-[300px] text-center md:text-left transition-colors duration-300">
                      <div>
                        <span className="text-sm text-gray-800 dark:text-gray-100 mb-3 md:mb-4 transition-colors duration-300">
                          {product.name}
                        </span>
                        <h3 className="text-lg text-gray-800 dark:text-gray-100 mb-3 md:mb-4 transition-colors duration-300">
                          {product.description}
                        </h3>
                        {product.originalPrice ? (
                          <span className="text-2xl mr-2 mb-3 md:mb-4 text-gray-400 line-through dark:text-gray-100">
                            {product.originalPrice}
                          </span>
                        ) : null}

                        <span className="text-2xl text-gray-800 dark:text-gray-100">
                          {product.price}
                        </span>
                        <span className="ml-1">
                          + Free Shipping Habitasse eaque wisi molestie, mollis
                          pharetra convallis exercitation, distinctio eu arcu
                          fugit nibh donec exercitationem, quisque imperdiet
                          mattis proident cupiditate habitant assumenda.
                          Pariatur minus nibh necessitatibus sociis minim,
                          consectetur dapibus.
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogDescription>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      ) : null}
    </section>
  );
}
