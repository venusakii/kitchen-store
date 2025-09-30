import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    slug: "professional-chef-knife-set",
    name: "Professional Chef Knife Set",
    category: "Cutlery",
    price: "$129.99",
    rating: 4.9,
    reviews: 1247,
    image: "/professional-chef-knife-set.jpg",
    description: "Premium stainless steel knives with ergonomic handles",
  },
  {
    id: 2,
    slug: "cast-iron-skillet-collection",
    name: "Cast Iron Skillet Collection",
    category: "Cookware",
    price: "$89.99",
    rating: 4.8,
    reviews: 892,
    image: "/cast-iron-skillet-cookware.jpg",
    description: "Pre-seasoned cast iron for perfect heat distribution",
  },
  {
    id: 3,
    slug: "stainless-steel-mixing-bowls",
    name: "Stainless Steel Mixing Bowls",
    category: "Kitchen Tools",
    price: "$45.99",
    rating: 4.7,
    reviews: 654,
    image: "/stainless-steel-mixing-bowls.jpg",
    description: "Nested set of 5 durable mixing bowls",
  },
  {
    id: 4,
    slug: "non-stick-baking-sheet-set",
    name: "Non-Stick Baking Sheet Set",
    category: "Bakeware",
    price: "$34.99",
    rating: 4.6,
    reviews: 523,
    image: "/non-stick-baking-sheets.jpg",
    description: "Professional-grade baking sheets with silicone coating",
  },
  {
    id: 5,
    slug: "wooden-cutting-board-set",
    name: "Wooden Cutting Board Set",
    category: "Kitchen Tools",
    price: "$56.99",
    rating: 4.8,
    reviews: 789,
    image: "/wooden-cutting-board-set.jpg",
    description: "Bamboo cutting boards in multiple sizes",
  },
  {
    id: 6,
    slug: "silicone-spatula-collection",
    name: "Silicone Spatula Collection",
    category: "Kitchen Tools",
    price: "$24.99",
    rating: 4.5,
    reviews: 412,
    image: "/silicone-spatula-set.jpg",
    description: "Heat-resistant silicone spatulas in various shapes",
  },
  {
    id: 7,
    slug: "stainless-steel-cookware-set",
    name: "Stainless Steel Cookware Set",
    category: "Cookware",
    price: "$199.99",
    rating: 4.9,
    reviews: 1056,
    image: "/stainless-steel-cookware-set.jpg",
    description: "10-piece professional cookware with copper core",
  },
  {
    id: 8,
    slug: "digital-kitchen-scale",
    name: "Digital Kitchen Scale",
    category: "Kitchen Tools",
    price: "$29.99",
    rating: 4.7,
    reviews: 634,
    image: "/digital-kitchen-scale.jpg",
    description: "Precise measurements up to 11 lbs",
  },
  {
    id: 9,
    slug: "ceramic-bakeware-set",
    name: "Ceramic Bakeware Set",
    category: "Bakeware",
    price: "$67.99",
    rating: 4.6,
    reviews: 445,
    image: "/ceramic-bakeware-set.jpg",
    description: "Oven-safe ceramic dishes for baking and serving",
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-br from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">
                Product Reviews
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Explore our comprehensive reviews of the finest kitchen products available on Amazon
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link key={product.id} href={`/reviews/${product.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border h-full">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden bg-muted">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-card text-card-foreground px-3 py-1 rounded-full text-xs font-semibold border border-border">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-balance">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{product.description}</p>
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                        <div className="flex items-center justify-end">
                          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                            Read Review
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
