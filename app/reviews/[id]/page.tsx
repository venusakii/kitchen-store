import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, XCircle, ShoppingCart } from "lucide-react"

export default function ProductReviewPage() {
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
                      src="/professional-chef-knife-set.jpg"
                      alt="Professional Chef Knife Set"
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
                          src={`/chef-knife-detail-.jpg?height=150&width=150&query=chef knife detail ${i}`}
                          alt={`Product view ${i}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Cutlery</div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                      Professional Chef Knife Set
                    </h1>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <span className="text-lg text-muted-foreground">4.9 (1,247 reviews)</span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    This premium chef knife set features high-carbon stainless steel blades with exceptional edge
                    retention. Each knife is precision-forged and hand-finished for superior balance and control. The
                    ergonomic handles provide comfort during extended use, making this set perfect for both professional
                    chefs and home cooking enthusiasts.
                  </p>

                  <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Buy on Amazon
                  </Button>

                  <Card className="border-border">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-4">Key Features</h3>
                      <ul className="space-y-2">
                        {[
                          "High-carbon stainless steel construction",
                          "Ergonomic triple-riveted handles",
                          "Full tang design for perfect balance",
                          'Includes 8" chef knife, 8" bread knife, 7" santoku',
                          "Lifetime warranty included",
                        ].map((feature) => (
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
                      {[
                        "Exceptional sharpness and edge retention",
                        "Comfortable, well-balanced design",
                        "Beautiful aesthetic appeal",
                        "Easy to maintain and clean",
                        "Great value for the quality",
                      ].map((pro) => (
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
                      {["Requires regular sharpening", "Not dishwasher safe", "Premium price point"].map((con) => (
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
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Value</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-primary text-primary" : "text-muted"}`} />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Performance</span>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border">
                        <div className="text-3xl font-bold text-foreground mb-2">9.5/10</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          An outstanding knife set that delivers professional performance at a reasonable price point.
                        </p>
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
                      that this Professional Chef Knife Set represents exceptional value in the premium cutlery market.
                      The high-carbon stainless steel construction provides the perfect balance between edge retention
                      and ease of sharpening.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The ergonomic design of the handles deserves special mention. The triple-riveted construction
                      ensures durability, while the contoured shape fits comfortably in hands of all sizes. During our
                      testing, we used these knives for extended prep sessions and experienced no hand fatigue or
                      discomfort.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The full tang design contributes to the excellent balance of each knife. Whether you're performing
                      delicate precision work or tackling heavy-duty chopping tasks, these knives respond beautifully to
                      your movements. The weight distribution is particularly impressive in the 8-inch chef's knife,
                      which has become our go-to tool for daily cooking tasks.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      While the price point may seem steep initially, the quality of construction and the lifetime
                      warranty make this set a worthwhile investment for anyone serious about cooking. These knives will
                      serve you well for years to come with proper care and maintenance.
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
