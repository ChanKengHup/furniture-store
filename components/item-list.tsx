"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Eye } from "lucide-react";
import Image from "next/image";
import { Product, ViewMode } from "./product-grid";
import { useState } from "react";
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

interface Props {
  sortedProducts: Product[];
  viewMode: ViewMode;
}

export default function ItemList({ sortedProducts, viewMode }: Props) {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    category: "",
    price: 0,
    image: "",
    description: "",
    onSale: false,
    originalPrice: 0,
  });

  return (
    <>
      {viewMode === ViewMode.Grid ? (
        // Grid View (Default)
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <CardContent className="p-0">
                <div className="relative">
                  {product.onSale && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded z-10">
                      Sale!
                    </span>
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
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1 transition-colors duration-300">
                    {product.category}
                  </p>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 dark:text-gray-500 line-through transition-colors duration-300">
                        £{product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                      £{product.price.toFixed(2)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        // List View
        <div className="space-y-6">
          {sortedProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 dark:border-gray-700"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Product Image */}
                  <div className="relative">
                    {product.onSale && (
                      <span className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded z-10">
                        Sale!
                      </span>
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
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="md:col-span-2 p-6 flex flex-col justify-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 transition-colors duration-300">
                      {product.category}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-3 mb-4">
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 dark:text-gray-500 line-through transition-colors duration-300">
                          £{product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-xl font-bold text-gray-800 dark:text-gray-100 transition-colors duration-300">
                        £{product.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                      {product.description ||
                        "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis pr."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

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
                          {product.category}
                        </span>
                        <h3 className="text-lg text-gray-800 dark:text-gray-100 mb-3 md:mb-4 transition-colors duration-300">
                          {product.name}
                        </h3>
                        {product.originalPrice ? (
                          <span className="text-2xl mr-2 mb-3 md:mb-4 text-gray-400 line-through dark:text-gray-100">
                            {product.originalPrice}
                          </span>
                        ) : null}

                        <span className="text-2xl text-gray-800 dark:text-gray-100">
                          {product.price}
                        </span>
                        <span className="ml-1">+ {product.description}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogDescription>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      ) : null}
    </>
  );
}
