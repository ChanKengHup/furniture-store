import type { Metadata } from "next"
import Header from "@/components/header"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Sofas - DECOR Furniture Store",
  description:
    "Browse our collection of modern sofas, couches, and living room furniture. Free installation and 5 years warranty.",
  keywords: "sofa, couch, living room furniture, modern sofa, sectional sofa",
}

const sofaProducts = [
  {
    id: 1,
    name: "Beige Living Room Sofa",
    category: "Sofa",
    price: 599.0,
    originalPrice: 659.0,
    image: "/placeholder.svg?height=300&width=300",
    onSale: true,
    description:
      "Nemo malesuada animi consectetur, cras consectetur laborum tenetur, cum, lacus nemo imperdiet facilisis! Aute metus, lorem primis anim. Eros dolorem.",
  },
  {
    id: 2,
    name: "Modern White Round Sofa",
    category: "Sofa",
    price: 599.0,
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda. Pariatur minus nibh",
  },
  {
    id: 3,
    name: "Sofa Chairs with Cushions",
    category: "Sofa",
    price: 325.0,
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis pr.",
  },
  {
    id: 4,
    name: "Sofa Chairs with Red Cushions",
    category: "Sofa",
    price: 450.0,
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis pr.",
  },
  {
    id: 5,
    name: "Fancy Chairs",
    category: "Sofa",
    price: 380.0,
    originalPrice: 399.0,
    image: "/placeholder.svg?height=300&width=300",
    onSale: true,
    description:
      "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis pr.",
  },
  {
    id: 6,
    name: "Grey Sectional Sofa",
    category: "Sofa",
    price: 899.0,
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis pr.",
  },
]

export default function SofaPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductGrid products={sofaProducts} category="Sofa" />
      <Footer />
    </main>
  )
}
