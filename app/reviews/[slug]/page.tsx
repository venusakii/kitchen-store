import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, XCircle, ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    slug: "hunter-dishwasher-safe-knife-set",
    name: "HUNTER Dishwasher Safe Knife Set",
    category: "Cutlery",
    rating: 4.9,
    reviews: 1247,
    image: "https://m.media-amazon.com/images/I/717WH4PX1gL._AC_SX679_.jpg",
    description: "Premium stainless steel knives with ergonomic handles for kitchen sharpening",
    fullDescription:
      "The HUNTER Dishwasher Safe Knife Set features high-quality stainless steel blades designed for precision cutting and durability. Each knife is crafted with ergonomic handles for comfort and control, making it ideal for both professional and home kitchens. The set is dishwasher safe for easy cleaning, ensuring long-lasting performance.",
    features: [
      "High-quality stainless steel blades",
      "Ergonomic handles for comfort",
      "Dishwasher safe for easy cleaning",
      "Includes chef knife, paring knife, and utility knife",
      "Corrosion-resistant material",
    ],
    pros: [
      "Sharp and durable blades",
      "Comfortable grip for extended use",
      "Dishwasher safe convenience",
      "Sleek and modern design",
      "Great for all skill levels",
    ],
    cons: ["Premium price point", "May require occasional sharpening"],
    verdict: {
      quality: 5,
      value: 4,
      performance: 5,
      overall: 9.5,
      summary: "A top-tier knife set offering professional-grade performance with the convenience of dishwasher-safe cleaning.",
    },
  },
  {
    id: 2,
    slug: "cast-iron-skillet-with-lid",
    name: "Cast Iron Skillet with Lid",
    category: "Cookware",
    rating: 4.8,
    reviews: 892,
    image: "https://m.media-amazon.com/images/I/71wKZh5tYbL._AC_SX679_.jpg",
    description: "Pre-seasoned cast iron skillet with lid for perfect heat distribution",
    fullDescription:
      "This pre-seasoned cast iron skillet with lid provides excellent heat retention and even cooking for a variety of dishes. Its durable construction and natural non-stick surface make it perfect for searing, frying, baking, and more. The included lid helps lock in moisture and flavor.",
    features: [
      "Pre-seasoned cast iron construction",
      "Includes tempered glass lid",
      "Oven-safe up to 500°F",
      "Superior heat retention and distribution",
      "Suitable for all stovetops, including induction",
    ],
    pros: [
      "Even heat distribution",
      "Develops natural non-stick surface",
      "Versatile for multiple cooking methods",
      "Durable and long-lasting",
      "Induction compatible",
    ],
    cons: ["Heavy weight", "Requires seasoning maintenance"],
    verdict: {
      quality: 5,
      value: 5,
      performance: 5,
      overall: 9.3,
      summary: "A versatile and durable skillet that excels in performance and longevity with proper care.",
    },
  },
  {
    id: 3,
    slug: "prioritychef-stainless-steel-mixing-bowls",
    name: "PriorityChef Stainless Steel Mixing Bowls",
    category: "Kitchen Tools",
    rating: 4.7,
    reviews: 654,
    image: "https://m.media-amazon.com/images/I/81Uptl8nNhL._AC_SX679_.jpg",
    description: "Nested set of 5 durable mixing bowls with silicone stackable design",
    fullDescription:
      "The PriorityChef Stainless Steel Mixing Bowls set includes five nested bowls with a silicone stackable design for easy storage. Made from high-quality stainless steel, these bowls are durable, lightweight, and perfect for mixing, prepping, and serving. The silicone bases prevent slipping during use.",
    features: [
      "High-quality stainless steel construction",
      "Silicone non-slip bases",
      "Nested design for compact storage",
      "Includes 5 sizes: 1.5, 2, 3, 4, and 5 quarts",
      "Dishwasher safe",
    ],
    pros: [
      "Durable and lightweight",
      "Non-slip silicone bases",
      "Space-saving nested design",
      "Easy to clean",
      "Versatile for prep and serving",
    ],
    cons: ["Silicone base may wear over time", "Not microwave safe"],
    verdict: {
      quality: 4,
      value: 5,
      performance: 4,
      overall: 9.0,
      summary: "A practical and durable mixing bowl set, perfect for everyday kitchen tasks.",
    },
  },
  {
    id: 4,
    slug: "farberware-stainless-steel-baking-sheet",
    name: "Farberware Stainless Steel Baking Sheet",
    category: "Bakeware",
    rating: 4.6,
    reviews: 523,
    image: "https://m.media-amazon.com/images/I/61m7jdBAl7L._AC_SX679_.jpg",
    description: "Professional-grade rectangle baking sheet, non-toxic and dishwasher safe",
    fullDescription:
      "The Farberware Stainless Steel Baking Sheet is a professional-grade, non-toxic baking sheet designed for even baking and roasting. Its durable stainless steel construction ensures long-lasting performance, and it’s dishwasher safe for easy cleanup.",
    features: [
      "Stainless steel construction",
      "Non-toxic and corrosion-resistant",
      "Dishwasher safe",
      "Oven-safe up to 450°F",
      "Rectangle design for versatile use",
    ],
    pros: [
      "Even baking performance",
      "Easy to clean",
      "Durable and rust-resistant",
      "Non-toxic material",
      "Affordable price",
    ],
    cons: ["May warp at very high temperatures", "No non-stick coating"],
    verdict: {
      quality: 4,
      value: 5,
      performance: 4,
      overall: 8.8,
      summary: "A reliable and affordable baking sheet for home bakers.",
    },
  },
  {
    id: 5,
    slug: "charcuterie-cheese-board-with-knives",
    name: "Charcuterie Cheese Board with Knives Set",
    category: "Kitchen Tools",
    rating: 4.8,
    reviews: 789,
    image: "https://m.media-amazon.com/images/I/8142dAEim3L._AC_SX679_.jpg",
    description: "Elegant bamboo charcuterie board set with 4 stainless steel knives",
    fullDescription:
      "This elegant bamboo charcuterie board set comes with four stainless steel knives, perfect for serving cheese, meats, and appetizers. The board features a smooth surface and hidden storage for the knives, making it both functional and stylish for entertaining.",
    features: [
      "Premium bamboo construction",
      "Includes 4 stainless steel knives",
      "Hidden knife storage compartment",
      "Smooth, food-safe surface",
      "Ideal for charcuterie and appetizers",
    ],
    pros: [
      "Stylish and elegant design",
      "Durable bamboo material",
      "Convenient knife storage",
      "Easy to clean",
      "Perfect for entertaining",
    ],
    cons: ["Requires hand washing", "Bamboo may stain with heavy use"],
    verdict: {
      quality: 5,
      value: 4,
      performance: 5,
      overall: 9.2,
      summary: "A beautiful and functional charcuterie board for hosting and gifting.",
    },
  },
  {
    id: 6,
    slug: "u-taste-silicone-spatula-set",
    name: "U-Taste Silicone Spatula Set",
    category: "Kitchen Tools",
    rating: 4.5,
    reviews: 412,
    image: "https://m.media-amazon.com/images/I/611ccAm4DQL._AC_SX679_.jpg",
    description: "Heat-resistant silicone spatulas with stainless steel core, non-stick",
    fullDescription:
      "The U-Taste Silicone Spatula Set features heat-resistant silicone with a stainless steel core for durability and flexibility. These non-stick spatulas are perfect for scraping, mixing, and flipping, and are safe for use with non-stick cookware.",
    features: [
      "Heat-resistant up to 480°F",
      "Stainless steel core for strength",
      "Non-stick silicone coating",
      "Includes 4 different spatula sizes",
      "Dishwasher safe",
    ],
    pros: [
      "Flexible and durable",
      "Safe for non-stick cookware",
      "Heat-resistant for versatile use",
      "Easy to clean",
      "Comfortable grip",
    ],
    cons: ["May not be suitable for very heavy mixing", "Silicone may stain over time"],
    verdict: {
      quality: 4,
      value: 5,
      performance: 4,
      overall: 8.7,
      summary: "A versatile and affordable spatula set for everyday cooking needs.",
    },
  },
  {
    id: 7,
    slug: "hexclad-nonstick-hybrid-pan",
    name: "HexClad Nonstick Hybrid Pan",
    category: "Cookware",
    rating: 4.9,
    reviews: 1056,
    image: "https://m.media-amazon.com/images/I/61RA24+5tIL._AC_SX679_.jpg",
    description: "12-inch hybrid nonstick pan with tempered glass lid, dishwasher compatible",
    fullDescription:
      "The HexClad Nonstick Hybrid Pan combines stainless steel and nonstick technology for superior cooking performance. Its unique hexagonal design ensures durability and easy food release, while the tempered glass lid allows for easy monitoring. Dishwasher safe and induction compatible.",
    features: [
      "Hybrid stainless steel and nonstick surface",
      "Tempered glass lid included",
      "Oven-safe up to 500°F",
      "Induction compatible",
      "Dishwasher safe",
    ],
    pros: [
      "Exceptional nonstick performance",
      "Durable and scratch-resistant",
      "Even heat distribution",
      "Dishwasher safe",
      "Sleek and professional design",
    ],
    cons: ["Premium price point", "Heavy compared to standard nonstick pans"],
    verdict: {
      quality: 5,
      value: 4,
      performance: 5,
      overall: 9.4,
      summary: "A premium hybrid pan that delivers unmatched cooking performance.",
    },
  },
  {
    id: 8,
    slug: "greater-goods-digital-kitchen-scale",
    name: "Greater Goods Digital Kitchen Scale",
    category: "Kitchen Tools",
    rating: 4.7,
    reviews: 634,
    image: "https://m.media-amazon.com/images/I/81Z52cyYB+L._AC_SX679_.jpg",
    description: "Precise digital kitchen scale with 11 lb capacity and multiple units",
    fullDescription:
      "The Greater Goods Digital Kitchen Scale offers precise measurements up to 11 lbs with multiple unit options, including grams, ounces, and pounds. Its sleek design and easy-to-read display make it a must-have for precise baking and cooking.",
    features: [
      "11 lb / 5 kg capacity",
      "Multiple unit options (g, oz, lb, ml)",
      "Tare function for easy measuring",
      "Sleek, compact design",
      "Easy-to-read LCD display",
    ],
    pros: [
      "Highly accurate measurements",
      "Compact and easy to store",
      "User-friendly interface",
      "Durable construction",
      "Affordable price",
    ],
    cons: ["Requires batteries", "Small surface area for large items"],
    verdict: {
      quality: 4,
      value: 5,
      performance: 4,
      overall: 8.9,
      summary: "A reliable and affordable kitchen scale for precise measurements.",
    },
  },
  {
    id: 9,
    slug: "ceramic-nonstick-cookware-set",
    name: "Ceramic Nonstick Cookware Set",
    category: "Cookware",
    rating: 4.6,
    reviews: 445,
    image: "https://m.media-amazon.com/images/I/81VhG1-qO6L._AC_SX679_.jpg",
    description: "Induction-compatible ceramic cookware set with 10-piece capacity",
    fullDescription:
      "This 10-piece ceramic nonstick cookware set is induction-compatible and designed for healthy cooking with minimal oil. The set includes pots and pans with durable ceramic coating, ensuring easy food release and quick cleanup. Dishwasher safe for convenience.",
    features: [
      "10-piece set with pots and pans",
      "Ceramic nonstick coating",
      "Induction-compatible base",
      "Oven-safe up to 400°F",
      "Dishwasher safe",
    ],
    pros: [
      "Healthy cooking with minimal oil",
      "Easy to clean",
      "Durable ceramic coating",
      "Induction compatible",
      "Even heat distribution",
    ],
    cons: ["Not as durable as stainless steel", "Handles may get hot"],
    verdict: {
      quality: 4,
      value: 5,
      performance: 4,
      overall: 8.8,
      summary: "A great value cookware set for healthy and convenient cooking.",
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
