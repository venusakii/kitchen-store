import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    slug: "dishwasher-safe-anti-slip-knife-set",
    name: "Dishwasher Safe Anti-Slip Knife Set",
    category: "Cutlery",
    price: "$129.99",
    rating: 4.9,
    reviews: 1247,
    image: "https://m.media-amazon.com/images/I/71S1DId6ftL._AC_SX679_.jpg",
    description: "Premium stainless steel knives with ergonomic anti-slip handles for kitchen sharpening",
    amazonUrl: "https://www.amazon.com/Dishwasher-Kitchen-kitchen-Sharpening-Anti-slip/dp/",
  },
  {
    id: 2,
    slug: "cast-iron-skillet-with-lid",
    name: "Cast Iron Skillet with Lid",
    category: "Cookware",
    price: "$89.99",
    rating: 4.8,
    reviews: 892,
    image: "https://m.media-amazon.com/images/I/71wKZh5tYbL._AC_SX679_.jpg",
    description: "Pre-seasoned cast iron skillet with lid for perfect heat distribution",
    amazonUrl: "https://www.amazon.com/Cast-Iron-Skillet-Lid-Pre-Seasoned/dp/",
  },
  {
    id: 3,
    slug: "prioritychef-stainless-steel-mixing-bowls",
    name: "PriorityChef Stainless Steel Mixing Bowls",
    category: "Kitchen Tools",
    price: "$45.99",
    rating: 4.7,
    reviews: 654,
    image: "https://m.media-amazon.com/images/I/81Uptl8nNhL._AC_SX679_.jpg",
    description: "Nested set of 5 durable mixing bowls with silicone stackable design",
    amazonUrl: "https://www.amazon.com/PriorityChef-Capacity-Stainless-Silicone-Stackable/dp/",
  },
  {
    id: 4,
    slug: "stainless-steel-cookie-sheets-set",
    name: "Stainless Steel Cookie Sheets Set",
    category: "Bakeware",
    price: "$34.99",
    rating: 4.6,
    reviews: 523,
    image: "https://m.media-amazon.com/images/I/81X4HsbYDeL._AC_SX679_.jpg",
    description: "Professional-grade stainless steel cookie sheets for baking and cooling",
    amazonUrl: "https://www.amazon.com/Stainless-Cookie-Sheets-Quarter-Cooling/dp/",
  },
  {
    id: 5,
    slug: "bamboo-charcuterie-board-set",
    name: "Bamboo Charcuterie Board Set",
    category: "Kitchen Tools",
    price: "$56.99",
    rating: 4.8,
    reviews: 789,
    image: "https://m.media-amazon.com/images/I/81Ms6RgWvqL._AC_SX679_.jpg",
    description: "Elegant bamboo charcuterie boards perfect for Christmas gifting and entertaining",
    amazonUrl: "https://www.amazon.com/Bamboo-Charcuterie-Boards-Christmas-Gift/dp/",
  },
  {
    id: 6,
    slug: "high-heat-resistant-kitchen-utensils",
    name: "High Heat Resistant Kitchen Utensil Set",
    category: "Kitchen Tools",
    price: "$24.99",
    rating: 4.5,
    reviews: 412,
    image: "https://m.media-amazon.com/images/I/61rfXav6BOL._AC_SX679_.jpg",
    description: "Durable high heat-resistant utensils for non-stick cookware",
    amazonUrl: "https://www.amazon.com/High-Heat-Resistant-Kitchen-Utensil/dp/",
  },
  {
    id: 7,
    slug: "hexclad-nonstick-hybrid-pan",
    name: "HexClad Nonstick Hybrid Pan",
    category: "Cookware",
    price: "$199.99",
    rating: 4.9,
    reviews: 1056,
    image: "https://m.media-amazon.com/images/I/61RA24+5tIL._AC_SX679_.jpg",
    description: "12-inch hybrid nonstick pan with tempered glass lid, dishwasher compatible",
    amazonUrl: "https://www.amazon.com/HexClad-Nonstick-Tempered-Dishwasher-Compatible/dp/",
  },
  {
    id: 8,
    slug: "greater-goods-essential-kitchen-scale",
    name: "Greater Goods Essential Kitchen Scale",
    category: "Kitchen Tools",
    price: "$29.99",
    rating: 4.7,
    reviews: 634,
    image: "https://m.media-amazon.com/images/I/61CI7mL0wRL._AC_SX679_.jpg",
    description: "Precise digital kitchen scale with Accucheck for accurate measurements",
    amazonUrl: "https://www.amazon.com/Greater-Goods-Essential-Kitchen-Accucheck/dp/",
  },
  {
    id: 9,
    slug: "carote-nonstick-cookware-set",
    name: "CAROTE Nonstick Cookware Set",
    category: "Cookware",
    price: "$67.99",
    rating: 4.6,
    reviews: 445,
    image: "https://m.media-amazon.com/images/I/711JrV49tmL._AC_SX679_.jpg",
    description: "Induction-compatible granite nonstick cookware set with saucepans",
    amazonUrl: "https://www.amazon.com/CAROTE-Nonstick-Cookware-Induction-Saucepans/dp/",
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
