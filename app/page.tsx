import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart, TrendingUp, Award, Shield, Truck, HeadphonesIcon, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground text-balance leading-tight">
                Elevate your culinary experience
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
                Discover premium kitchen utensils and home goods, carefully curated and reviewed by our experts.
                Transform your kitchen into a masterpiece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/reviews">Explore Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Shop by category
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Find exactly what you need for your perfect kitchen
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Cookware", image: "/premium-cookware-pots-pans.jpg", count: "120+ items" },
                { name: "Cutlery", image: "/professional-kitchen-knives-cutlery.jpg", count: "85+ items" },
                { name: "Bakeware", image: "/baking-pans-trays-bakeware.jpg", count: "95+ items" },
                { name: "Kitchen Tools", image: "/kitchen-utensils-tools-gadgets.jpg", count: "150+ items" },
              ].map((category) => (
                <Link key={category.name} href="/reviews">
                  <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden bg-muted">
                        <img
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{category.name}</h3>
                        <p className="text-sm text-muted-foreground">{category.count}</p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Editor's choice
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Hand-picked products that our experts love and recommend
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Professional Chef Knife Set",
                  slug: "hunter-dishwasher-safe-knife-set",
                  price: "$129.99",
                  rating: 4.9,
                  reviews: 1247,
                  image: "/professional-chef-knife-set.jpg",
                  amazonUrl: "https://www.amazon.com/dp/B0EXAMPLE1",
                },
                {
                  name: "Cast Iron Skillet Collection",
                  slug: "cast-iron-skillet-with-lid",
                  price: "$89.99",
                  rating: 4.8,
                  reviews: 892,
                  image: "/cast-iron-skillet-cookware.jpg",
                  amazonUrl: "https://www.amazon.com/dp/B0EXAMPLE2",
                },
                {
                  name: "Stainless Steel Mixing Bowls",
                  slug: "prioritychef-stainless-steel-mixing-bowls",
                  price: "$45.99",
                  rating: 4.7,
                  reviews: 654,
                  image: "/stainless-steel-mixing-bowls.jpg",
                  amazonUrl: "https://www.amazon.com/dp/B0EXAMPLE3",
                },
              ].map((product) => (
                <Link key={product.name} href={`/reviews/${product.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden bg-muted">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          Editor's Pick
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-balance">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
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
                            {product.rating} ({product.reviews} reviews)
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

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Why choose KitchenStore
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                We're committed to helping you find the perfect kitchen essentials
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Expert Reviews",
                  description: "In-depth analysis by culinary professionals",
                },
                {
                  icon: Shield,
                  title: "Quality Guaranteed",
                  description: "Only the best products make our list",
                },
                {
                  icon: Truck,
                  title: "Fast Shipping",
                  description: "Quick delivery through Amazon Prime",
                },
                {
                  icon: HeadphonesIcon,
                  title: "24/7 Support",
                  description: "Always here to help with your questions",
                },
              ].map((feature) => (
                <Card key={feature.title} className="text-center border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-8 pb-6 px-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Trending Products */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                  Trending now
                </h2>
                <p className="text-muted-foreground text-lg text-pretty">Most popular products this month</p>
              </div>
              <TrendingUp className="h-12 w-12 text-primary hidden md:block" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { name: "Non-stick Pan", image: "/non-stick-frying-pan.jpg" },
                { name: "Knife Sharpener", image: "/knife-sharpener-tool.jpg" },
                { name: "Measuring Cups", image: "/measuring-cups-set.jpg" },
                { name: "Cutting Board", image: "/wooden-cutting-board.png" },
                { name: "Spatula Set", image: "/kitchen-spatula-set.jpg" },
                { name: "Mixing Spoons", image: "/wooden-mixing-spoons.jpg" },
              ].map((item, index) => (
                <Link key={item.name} href="/reviews">
                  <Card className="group hover:shadow-lg transition-all duration-300 border-border">
                    <CardContent className="p-4">
                      <div className="aspect-square relative overflow-hidden bg-muted rounded-md mb-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <h3 className="font-medium text-sm text-foreground text-center">{item.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                What our customers say
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                Join thousands of satisfied home chefs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Home Chef",
                  content: "KitchenStore helped me find the perfect cookware set. The reviews are detailed and honest!",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Food Blogger",
                  content: "I trust their recommendations completely. Every product I bought exceeded my expectations.",
                  rating: 5,
                },
                {
                  name: "Emily Rodriguez",
                  role: "Culinary Student",
                  content:
                    "The expert reviews made it easy to choose quality tools within my budget. Highly recommend!",
                  rating: 5,
                },
              ].map((testimonial) => (
                <Card key={testimonial.name} className="border-border">
                  <CardContent className="pt-6 pb-6 px-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                  The KitchenStore advantage
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Unbiased expert reviews",
                  "Detailed product comparisons",
                  "Best price recommendations",
                  "Quality assurance",
                  "Regular content updates",
                  "Community-driven ratings",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Stay updated
              </h2>
              <p className="text-muted-foreground text-lg mb-8 text-pretty">
                Subscribe to our newsletter for the latest reviews, deals, and kitchen tips
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/20 to-accent/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground text-balance">
                Ready to upgrade your kitchen?
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                Explore our comprehensive reviews and find the perfect tools for your culinary journey
              </p>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/reviews">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Start Shopping
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
