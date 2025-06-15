import type { Metadata } from "next"
import Header from "@/components/header"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "All Products - DECOR Furniture Store",
  description:
    "Browse our complete furniture collection including sofas, chairs, tables and more. Modern designs with free installation and 5 years warranty.",
  keywords: "furniture, all products, sofa, chair, table, modern furniture, affordable furniture",
}

// Combined products from all categories
const allProducts = [
  // Sofa Products
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
      "Habitasse eaque wisi molestie, mollis pharetra convallis exercitation, distinctio eu arcu fugit nibh donec exercitationem, quisque imperdiet mattis proident cupiditate habitant assumenda.",
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

  // Chair Products
  {
    id: 7,
    name: "Fancy Chairs",
    category: "Chair",
    price: 380.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Elegant and comfortable chairs perfect for any dining room or office space.",
  },
  {
    id: 8,
    name: "Wingback Yellow Couch",
    category: "Chair",
    price: 185.0,
    originalPrice: 199.0,
    image: "/placeholder.svg?height=300&width=300",
    onSale: true,
    description: "Stylish wingback chair with vibrant yellow upholstery, perfect for reading corners.",
  },
  {
    id: 9,
    name: "Modern Office Chair",
    category: "Chair",
    price: 299.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Ergonomic office chair designed for long hours of comfortable work.",
  },
  {
    id: 10,
    name: "Leather Armchair",
    category: "Chair",
    price: 650.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Premium leather armchair with classic design and superior comfort.",
  },
  {
    id: 11,
    name: "Dining Chair Set",
    category: "Chair",
    price: 240.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Set of 4 modern dining chairs with sleek design and comfortable seating.",
  },
  {
    id: 12,
    name: "Recliner Chair",
    category: "Chair",
    price: 550.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Luxurious recliner chair with multiple position settings for ultimate relaxation.",
  },

  // Table Products
  {
    id: 13,
    name: "Modern Dining Table",
    category: "Table",
    price: 450.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Contemporary dining table that seats 6 people comfortably with elegant design.",
  },
  {
    id: 14,
    name: "Glass Coffee Table",
    category: "Table",
    price: 280.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Sleek glass coffee table with modern metal legs, perfect for living rooms.",
  },
  {
    id: 15,
    name: "Study Table with Drawers",
    category: "Table",
    price: 320.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Functional study table with built-in drawers for storage and organization.",
  },
  {
    id: 16,
    name: "Computer Desk",
    category: "Table",
    price: 199.0,
    originalPrice: 249.0,
    image: "/placeholder.svg?height=300&width=300",
    onSale: true,
    description: "Compact computer desk with cable management and keyboard tray.",
  },
  {
    id: 17,
    name: "Round Dining Table",
    category: "Table",
    price: 380.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Beautiful round dining table perfect for intimate family meals and gatherings.",
  },
  {
    id: 18,
    name: "Side Table",
    category: "Table",
    price: 120.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Compact side table ideal for bedrooms, living rooms, or as accent furniture.",
  },

  // Additional Mixed Products
  {
    id: 19,
    name: "Executive Office Chair",
    category: "Chair",
    price: 420.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "High-back executive chair with premium materials and ergonomic support.",
  },
  {
    id: 20,
    name: "L-Shaped Sectional Sofa",
    category: "Sofa",
    price: 1299.0,
    originalPrice: 1499.0,
    image: "/placeholder.svg?height=300&width=300",
    onSale: true,
    description: "Spacious L-shaped sectional sofa perfect for large living rooms and entertainment areas.",
  },
  {
    id: 21,
    name: "Console Table",
    category: "Table",
    price: 220.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Elegant console table perfect for entryways, hallways, or behind sofas.",
  },
  {
    id: 22,
    name: "Bar Stool Set",
    category: "Chair",
    price: 180.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Set of 2 adjustable bar stools with modern design and comfortable seating.",
  },
  {
    id: 23,
    name: "Ottoman Storage Bench",
    category: "Sofa",
    price: 150.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Multi-functional ottoman that serves as seating and storage solution.",
  },
  {
    id: 24,
    name: "Standing Desk",
    category: "Table",
    price: 399.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Height-adjustable standing desk for healthier work habits and improved productivity.",
  },
]

export default function AllProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-gray-50 dark:bg-gray-900 py-8 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">
              All Products
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto transition-colors duration-300">
              Discover our complete furniture collection featuring sofas, chairs, tables and more. Quality furniture for
              every room in your home.
            </p>
          </div>
        </div>
      </div>
      <ProductGrid products={allProducts} category="All Products" />
      <Footer />
    </main>
  )
}
