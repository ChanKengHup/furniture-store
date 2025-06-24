"use client";

import { useState, useEffect } from "react";
import HeroSection from "@/components/hero-section";
import ProductShowcase from "@/components/product-showcase";
import TrustIndicators from "@/components/trust-indicators";
import SaleSection from "@/components/sale-section";
import LatestProducts from "@/components/latest-products";
import Testimonials from "@/components/testimonials";
import {
  HeaderSkeleton,
  HeroSkeleton,
  ProductShowcaseSkeleton,
  TrustIndicatorsSkeleton,
  SaleSkeleton,
  LatestProductsSkeleton,
  TestimonialsSkeleton,
  FooterSkeleton,
} from "@/components/loading-states";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <main className="min-h-screen">
        <HeaderSkeleton />
        <HeroSkeleton />
        <ProductShowcaseSkeleton />
        <TrustIndicatorsSkeleton />
        <SaleSkeleton />
        <LatestProductsSkeleton />
        <TestimonialsSkeleton />
        <FooterSkeleton />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <HeroSection />
      <ProductShowcase />
      <TrustIndicators />
      <SaleSection />
      <LatestProducts />
      <Testimonials />
    </main>
  );
}
