import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-br from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                  <p className="leading-relaxed">
                    By accessing and using KitchenStore, you accept and agree to be bound by the terms and provisions of
                    this agreement. If you do not agree to these terms, please do not use our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Use License</h2>
                  <p className="leading-relaxed mb-4">
                    Permission is granted to temporarily access the materials on KitchenStore for personal,
                    non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and
                    under this license you may not:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Modify or copy the materials</li>
                    <li>Use the materials for any commercial purpose or public display</li>
                    <li>Attempt to decompile or reverse engineer any software on our website</li>
                    <li>Remove any copyright or proprietary notations from the materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Disclaimer</h2>
                  <p className="leading-relaxed">
                    The materials on KitchenStore are provided on an 'as is' basis. We make no warranties, expressed or
                    implied, and hereby disclaim all other warranties including, without limitation, implied warranties
                    or conditions of merchantability, fitness for a particular purpose, or non-infringement of
                    intellectual property.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Product Reviews</h2>
                  <p className="leading-relaxed">
                    All product reviews and recommendations on KitchenStore represent our honest opinions based on
                    testing and research. However, individual results may vary. We are not responsible for any decisions
                    made based on our reviews or recommendations.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Affiliate Disclosure</h2>
                  <p className="leading-relaxed">
                    KitchenStore participates in the Amazon Services LLC Associates Program. We may earn commissions
                    from qualifying purchases made through links on our website. This does not affect the price you pay
                    or influence our product recommendations.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">External Links</h2>
                  <p className="leading-relaxed">
                    Our website may contain links to external sites that are not operated by us. We have no control over
                    the content and practices of these sites and cannot accept responsibility for their respective
                    privacy policies.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Limitations</h2>
                  <p className="leading-relaxed">
                    In no event shall KitchenStore or its suppliers be liable for any damages (including, without
                    limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                    use or inability to use our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Revisions</h2>
                  <p className="leading-relaxed">
                    We may revise these terms of service at any time without notice. By using this website, you agree to
                    be bound by the current version of these terms of service.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                  <p className="leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of the United
                    States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                  <p className="leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us at
                    contact@kitchenstore.com.
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
