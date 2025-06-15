import type { Metadata } from "next"
import Header from "@/components/header"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Chairs - DECOR Furniture Store",
  description:
    "Discover our chair collection including office chairs, armchairs, dining chairs and more. Modern designs with comfort guarantee.",
  keywords: "chairs, office chair, armchair, dining chair, modern chair",
}

const chairProducts = [
  {
    id: 1,
    name: "Fancy Chairs",
    category: "Chair",
    price: 380.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Wingback Yellow Couch",
    category: "Chair",
    price: 185.0,
    originalPrice: 199.0,
    image: "/placeholder.svg?height=300&width=300",
    onSale: true,
  },
  {
    id: 3,
    name: "Modern Office Chair",
    category: "Chair",
    price: 299.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Leather Armchair",
    category: "Chair",
    price: 650.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Dining Chair Set",
    category: "Chair",
    price: 240.0,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Recliner Chair",
    category: "Chair",
    price: 550.0,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ChairPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProductGrid products={chairProducts} category="Chair" />
      <Footer />
    </main>
  )
}
