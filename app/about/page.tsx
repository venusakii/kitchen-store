import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-br from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">
                About KitchenStore
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Your trusted partner in discovering the finest kitchen essentials
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Welcome to KitchenStore, where passion for cooking meets expert product curation. We're dedicated to
                  helping home chefs and culinary enthusiasts discover the best kitchen utensils and home goods
                  available on Amazon.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded by a team of culinary professionals and product reviewers, KitchenStore was born from a simple
                  idea: everyone deserves access to honest, comprehensive reviews of kitchen products. We believe that
                  the right tools can transform your cooking experience and inspire culinary creativity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Our Mission",
                    description:
                      "To provide unbiased, expert reviews that help you make informed decisions about kitchen products.",
                  },
                  {
                    icon: Heart,
                    title: "Our Values",
                    description:
                      "Honesty, expertise, and a genuine passion for helping people create their dream kitchens.",
                  },
                  {
                    icon: Users,
                    title: "Our Team",
                    description:
                      "Professional chefs, product testers, and culinary enthusiasts dedicated to quality reviews.",
                  },
                  {
                    icon: Award,
                    title: "Our Standards",
                    description:
                      "Rigorous testing protocols and transparent evaluation criteria for every product we review.",
                  },
                ].map((item) => (
                  <Card key={item.title} className="border-border">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-muted/30 rounded-lg p-8 md:p-12">
                <h2 className="font-serif text-3xl font-bold text-foreground mb-6 text-center">Why Trust Us?</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Every product featured on KitchenStore undergoes thorough testing and evaluation by our team of
                    experts. We purchase and test products ourselves, ensuring our reviews remain unbiased and
                    authentic. Our commitment to transparency means we always disclose our testing methodology and any
                    potential conflicts of interest.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    As participants in the Amazon Associate Program, we may earn commissions from qualifying purchases.
                    However, this never influences our reviews or recommendations. We only feature products that meet
                    our strict quality standards and provide genuine value to our readers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
