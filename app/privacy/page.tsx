import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-br from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">Privacy Policy</h1>
              <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <div className="space-y-8 text-muted-foreground">
                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Introduction</h2>
                  <p className="leading-relaxed">
                    At KitchenStore, we take your privacy seriously. This Privacy Policy explains how we collect, use,
                    disclose, and safeguard your information when you visit our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                  <p className="leading-relaxed mb-4">
                    We may collect information about you in a variety of ways. The information we may collect on the
                    website includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Personal data such as your name and email address when you subscribe to our newsletter</li>
                    <li>Usage data including your IP address, browser type, and pages visited</li>
                    <li>Cookies and tracking technologies to enhance your browsing experience</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Use of Your Information</h2>
                  <p className="leading-relaxed mb-4">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Provide and maintain our website</li>
                    <li>Send you newsletters and marketing communications</li>
                    <li>Analyze usage patterns to improve our content</li>
                    <li>Respond to your inquiries and provide customer support</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Cookies</h2>
                  <p className="leading-relaxed">
                    We use cookies to enhance your experience on our website. Cookies are small text files stored on
                    your device that help us understand how you use our site. You can choose to disable cookies through
                    your browser settings, but this may affect your ability to use certain features of our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Amazon Associate Program</h2>
                  <p className="leading-relaxed">
                    KitchenStore is a participant in the Amazon Services LLC Associates Program, an affiliate
                    advertising program designed to provide a means for sites to earn advertising fees by advertising
                    and linking to Amazon.com. When you click on product links and make purchases, we may earn a
                    commission at no additional cost to you.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Third-Party Services</h2>
                  <p className="leading-relaxed">
                    We may use third-party service providers to help us operate our website and analyze how our site is
                    used. These third parties have access to your information only to perform specific tasks on our
                    behalf and are obligated not to disclose or use it for any other purpose.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Data Security</h2>
                  <p className="leading-relaxed">
                    We implement appropriate technical and organizational security measures to protect your personal
                    information. However, no method of transmission over the internet is 100% secure, and we cannot
                    guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                  <p className="leading-relaxed">
                    You have the right to access, update, or delete your personal information at any time. If you wish
                    to exercise these rights, please contact us at contact@kitchenstore.com.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                  <p className="leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
                </div>

                <div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                  <p className="leading-relaxed">
                    If you have any questions about this Privacy Policy, please contact us at contact@kitchenstore.com.
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
