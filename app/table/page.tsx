import type { Metadata } from "next"
import Header from "@/components/header"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Tables - DECOR Furniture Store",
  description:
    "Shop our table collection including dining tables, coffee tables, study tables and computer desks. Quality furniture for every room.",
  keywords: "tables, dining table, coffee table, study table, computer desk",
}

const tableProducts = [
  {
    id: 1,
    name: "Modern Dining Table",
    category: "Table",
    price: 450.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Glass Coffee Table",
    category: "Table",
    price: 280.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Study Table with Drawers",
    category: "Table",
    price: 320.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Computer Desk",
    category: "Table",
    price: 199.0,
    originalPrice: 249.0,
    image: "/placeholder.svg?height=300&width=300",
    onSale: true,
  },
  {
    id: 5,
    name: "Round Dining Table",
    category: "Table",
    price: 380.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Side Table",
    category: "Table",
    price: 120.0,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function TablePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductGrid products={tableProducts} category="Table" />
      <Footer />
    </main>
  )
}
