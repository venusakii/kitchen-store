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
  {
    id: 3,
    slug: "stainless-steel-mixing-bowls",
    name: "Stainless Steel Mixing Bowls",
    category: "Kitchen Tools",
    rating: 4.7,
    reviews: 654,
    image: "/stainless-steel-mixing-bowls.jpg",
    description: "Nested set of 5 durable mixing bowls",
    fullDescription:
      "This comprehensive mixing bowl set features five nested stainless steel bowls in graduated sizes. Each bowl is crafted from premium 18/8 stainless steel for durability and resistance to rust and corrosion. The nested design saves valuable storage space while providing versatility for all your mixing, prepping, and serving needs.",
    features: [
      "Premium 18/8 stainless steel construction",
      "5-piece nested set (1.5, 3, 5, 8, and 10 quart)",
      "Non-slip silicone base on each bowl",
      "Dishwasher safe for easy cleaning",
      "Mirror-polished finish",
    ],
    pros: [
      "Durable and rust-resistant",
      "Space-saving nested design",
      "Non-slip bases prevent sliding",
      "Versatile for mixing, serving, and storage",
      "Easy to clean and maintain",
    ],
    cons: ["Can be noisy when stacking", "No lids included", "Shows fingerprints easily"],
    verdict: {
      quality: 5,
      value: 5,
      performance: 4,
      overall: 9.0,
      summary: "A versatile and durable mixing bowl set that's perfect for any kitchen task.",
    },
  },
  {
    id: 4,
    slug: "non-stick-baking-sheet-set",
    name: "Non-Stick Baking Sheet Set",
    category: "Bakeware",
    rating: 4.6,
    reviews: 523,
    image: "/non-stick-baking-sheets.jpg",
    description: "Professional-grade baking sheets with silicone coating",
    fullDescription:
      "These professional-grade baking sheets feature a premium silicone non-stick coating that ensures easy food release and quick cleanup. The heavy-gauge aluminum construction provides even heat distribution for perfectly baked goods every time. The reinforced steel rim prevents warping even at high temperatures.",
    features: [
      "Heavy-gauge aluminum construction",
      "Premium silicone non-stick coating",
      "Reinforced steel rim prevents warping",
      "Set includes 3 sizes (small, medium, large)",
      "Oven-safe up to 450°F",
    ],
    pros: [
      "Excellent non-stick performance",
      "Even heat distribution",
      "Warp-resistant design",
      "Easy to clean",
      "Multiple sizes for versatility",
    ],
    cons: ["Not dishwasher safe", "Coating can wear over time", "Requires careful handling"],
    verdict: {
      quality: 4,
      value: 5,
      performance: 5,
      overall: 8.8,
      summary: "Professional-quality baking sheets that deliver consistent results for home bakers.",
    },
  },
  {
    id: 5,
    slug: "wooden-cutting-board-set",
    name: "Wooden Cutting Board Set",
    category: "Kitchen Tools",
    rating: 4.8,
    reviews: 789,
    image: "/wooden-cutting-board-set.jpg",
    description: "Bamboo cutting boards in multiple sizes",
    fullDescription:
      "This eco-friendly bamboo cutting board set includes three boards in different sizes for various food prep tasks. Bamboo is naturally antimicrobial and harder than traditional hardwoods, making it ideal for cutting boards. Each board features a juice groove to catch liquids and prevent mess on your countertops.",
    features: [
      "Sustainable bamboo construction",
      "3-piece set (small, medium, large)",
      "Juice grooves on all boards",
      "Naturally antimicrobial",
      "Gentle on knife edges",
    ],
    pros: [
      "Eco-friendly and sustainable",
      "Naturally antimicrobial properties",
      "Beautiful natural appearance",
      "Knife-friendly surface",
      "Easy to maintain with mineral oil",
    ],
    cons: ["Requires regular oiling", "Not dishwasher safe", "Can develop stains over time"],
    verdict: {
      quality: 5,
      value: 4,
      performance: 5,
      overall: 9.2,
      summary: "Beautiful, sustainable cutting boards that combine functionality with environmental responsibility.",
    },
  },
  {
    id: 6,
    slug: "silicone-spatula-collection",
    name: "Silicone Spatula Collection",
    category: "Kitchen Tools",
    rating: 4.5,
    reviews: 412,
    image: "/silicone-spatula-set.jpg",
    description: "Heat-resistant silicone spatulas in various shapes",
    fullDescription:
      "This comprehensive spatula collection features six different spatula designs to handle any cooking task. Made from premium food-grade silicone that's heat-resistant up to 600°F, these spatulas won't melt, warp, or discolor. The stainless steel cores provide rigidity while the silicone heads are gentle on non-stick cookware.",
    features: [
      "Food-grade silicone construction",
      "Heat-resistant up to 600°F",
      "Stainless steel reinforced cores",
      "6-piece set with various shapes",
      "BPA-free and non-toxic",
    ],
    pros: [
      "Excellent heat resistance",
      "Won't scratch non-stick surfaces",
      "Comfortable ergonomic handles",
      "Dishwasher safe",
      "Variety of shapes for different tasks",
    ],
    cons: ["Silicone can retain odors", "Not suitable for cutting", "Handles can get hot"],
    verdict: {
      quality: 4,
      value: 5,
      performance: 4,
      overall: 8.5,
      summary: "A versatile spatula set that covers all your cooking needs at an affordable price.",
    },
  },
  {
    id: 7,
    slug: "stainless-steel-cookware-set",
    name: "Stainless Steel Cookware Set",
    category: "Cookware",
    rating: 4.9,
    reviews: 1056,
    image: "/stainless-steel-cookware-set.jpg",
    description: "10-piece professional cookware with copper core",
    fullDescription:
      "This premium 10-piece cookware set features tri-ply construction with a copper core for superior heat conductivity. The 18/10 stainless steel interior is non-reactive and won't alter food flavors, while the polished exterior adds elegance to any kitchen. Each piece is designed for optimal performance and durability.",
    features: [
      "Tri-ply construction with copper core",
      "18/10 stainless steel interior",
      "10-piece set includes all essentials",
      "Oven-safe up to 500°F",
      "Compatible with all cooktops including induction",
    ],
    pros: [
      "Exceptional heat distribution",
      "Professional-grade construction",
      "Beautiful polished finish",
      "Dishwasher safe",
      "Lifetime warranty",
    ],
    cons: ["Premium price point", "Requires learning curve for heat control", "Can show water spots"],
    verdict: {
      quality: 5,
      value: 4,
      performance: 5,
      overall: 9.6,
      summary: "A professional-quality cookware set that's built to last a lifetime with proper care.",
    },
  },
  {
    id: 8,
    slug: "digital-kitchen-scale",
    name: "Digital Kitchen Scale",
    category: "Kitchen Tools",
    rating: 4.7,
    reviews: 634,
    image: "/digital-kitchen-scale.jpg",
    description: "Precise measurements up to 11 lbs",
    fullDescription:
      "This precision digital kitchen scale provides accurate measurements for all your cooking and baking needs. The large LCD display is easy to read, and the tare function allows you to zero out container weight for precise ingredient measurements. The sleek tempered glass platform is easy to clean and adds a modern touch to your kitchen.",
    features: [
      "Precision sensors for accurate measurements",
      "11 lb / 5 kg maximum capacity",
      "Tare function for container weight",
      "Large easy-to-read LCD display",
      "Tempered glass platform",
    ],
    pros: [
      "Highly accurate measurements",
      "Easy to use and read",
      "Sleek modern design",
      "Auto-off function saves battery",
      "Multiple unit conversions",
    ],
    cons: ["Requires batteries", "Glass can be slippery when wet", "Not waterproof"],
    verdict: {
      quality: 4,
      value: 5,
      performance: 5,
      overall: 8.9,
      summary: "An essential kitchen tool that brings precision and consistency to your cooking and baking.",
    },
  },
  {
    id: 9,
    slug: "ceramic-bakeware-set",
    name: "Ceramic Bakeware Set",
    category: "Bakeware",
    rating: 4.6,
    reviews: 445,
    image: "/ceramic-bakeware-set.jpg",
    description: "Oven-safe ceramic dishes for baking and serving",
    fullDescription:
      "This elegant ceramic bakeware set combines functionality with beautiful presentation. Each piece is crafted from high-quality ceramic that distributes heat evenly for perfect baking results. The attractive design means you can take dishes straight from oven to table, and the non-porous surface won't absorb odors or flavors.",
    features: [
      "High-quality ceramic construction",
      "5-piece set for various baking needs",
      "Oven-safe up to 500°F",
      "Microwave and dishwasher safe",
      "Non-porous, stain-resistant surface",
    ],
    pros: [
      "Beautiful presentation for serving",
      "Even heat distribution",
      "Easy to clean",
      "Versatile for baking and serving",
      "Won't absorb odors or stains",
    ],
    cons: ["Can chip if dropped", "Heavy to handle", "Takes longer to heat up"],
    verdict: {
      quality: 4,
      value: 4,
      performance: 5,
      overall: 8.7,
      summary: "Elegant and functional bakeware that's perfect for both everyday use and special occasions.",
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
