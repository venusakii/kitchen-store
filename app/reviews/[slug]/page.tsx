import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, XCircle, ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    slug: "professional-chef-knife-set",
    name: "Professional Chef Knife Set",
    category: "Cutlery",
    rating: 4.9,
    reviews: 1247,
    image: "/professional-chef-knife-set.jpg",
    description: "Premium stainless steel knives with ergonomic handles",
    fullDescription:
      "This premium chef knife set features high-carbon stainless steel blades with exceptional edge retention. Each knife is precision-forged and hand-finished for superior balance and control. The ergonomic handles provide comfort during extended use, making this set perfect for both professional chefs and home cooking enthusiasts.",
    features: [
      "High-carbon stainless steel construction",
      "Ergonomic triple-riveted handles",
      "Full tang design for perfect balance",
      'Includes 8" chef knife, 8" bread knife, 7" santoku',
      "Lifetime warranty included",
    ],
    pros: [
      "Exceptional sharpness and edge retention",
      "Comfortable, well-balanced design",
      "Beautiful aesthetic appeal",
      "Easy to maintain and clean",
      "Great value for the quality",
    ],
    cons: ["Requires regular sharpening", "Not dishwasher safe", "Premium price point"],
    verdict: {
      quality: 5,
      value: 4,
      performance: 5,
      overall: 9.5,
      summary: "An outstanding knife set that delivers professional performance at a reasonable price point.",
    },
  },
  {
    id: 2,
    slug: "cast-iron-skillet-collection",
    name: "Cast Iron Skillet Collection",
    category: "Cookware",
    rating: 4.8,
    reviews: 892,
    image: "/cast-iron-skillet-cookware.jpg",
    description: "Pre-seasoned cast iron for perfect heat distribution",
    fullDescription:
      "This cast iron skillet collection offers superior heat retention and even cooking. Pre-seasoned and ready to use, these skillets develop a natural non-stick surface over time. Perfect for searing, baking, and everything in between.",
    features: [
      "Pre-seasoned cast iron construction",
      "Superior heat retention",
      "Oven-safe up to 500°F",
      "Includes 10-inch and 12-inch skillets",
      "Lifetime durability",
    ],
    pros: [
      "Excellent heat distribution",
      "Naturally non-stick when seasoned",
      "Versatile cooking options",
      "Induction compatible",
      "Improves with use",
    ],
    cons: ["Heavy weight", "Requires seasoning maintenance", "Not dishwasher safe"],
    verdict: {
      quality: 5,
      value: 5,
      performance: 5,
      overall: 9.3,
      summary: "A timeless cookware collection that will last generations with proper care.",
    },
  },
]

export default function ProductReviewPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div className="space-y-4">
                  <div className="aspect-square relative overflow-hidden bg-muted rounded-lg">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-square relative overflow-hidden bg-muted rounded-md cursor-pointer hover:opacity-75 transition-opacity"
                      >
                        <img
                          src={`/.jpg?height=150&width=150&query=${encodeURIComponent(product.name)} detail ${i}`}
                          alt={`Product view ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">{product.category}</div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                      {product.name}
                    </h1>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted"}`}
                          />
                        ))}
                      </div>
                      <span className="text-lg text-muted-foreground">
                        {product.rating} ({product.reviews.toLocaleString()} reviews)
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">{product.fullDescription}</p>

                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy on Amazon
                  </Button>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <Card className="border-border">
                  <CardContent className="pt-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Pros</h3>
                    <ul className="space-y-3">
                      {product.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardContent className="pt-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Cons</h3>
                    <ul className="space-y-3">
                      {product.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2">
                          <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-border bg-primary/5">
                  <CardContent className="pt-6">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Our Verdict</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Quality</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < product.verdict.quality ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Value</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < product.verdict.value ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Performance</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < product.verdict.performance ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="text-3xl font-bold text-foreground mb-2">{product.verdict.overall}/10</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{product.verdict.summary}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-border mb-12">
                <CardContent className="pt-8 pb-8">
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Detailed Review</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      After extensive testing in both professional and home kitchen environments, we can confidently say
                      that this {product.name} represents exceptional value in the premium{" "}
                      {product.category.toLowerCase()} market. The high-quality construction provides the perfect
                      balance between performance and durability.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The ergonomic design deserves special mention. The thoughtful construction ensures durability,
                      while the comfortable design fits naturally during use. During our testing, we used this product
                      for extended sessions and experienced excellent results throughout.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The overall design contributes to the excellent performance of this product. Whether you're
                      performing delicate precision work or tackling heavy-duty tasks, this{" "}
                      {product.category.toLowerCase()} responds beautifully to your needs. The quality is particularly
                      impressive and has become our go-to choice for daily cooking tasks.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      While the price point may seem steep initially, the quality of construction and warranty make this
                      a worthwhile investment for anyone serious about cooking. This product will serve you well for
                      years to come with proper care and maintenance.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
