import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import { Suspense } from "react"

const playfair = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
	display: "swap",
})

export const metadata: any = {
	title: "KitchenStore - Premium Kitchen Utensils & Home Goods",
	description:
		"Discover the finest kitchen utensils and home goods from Amazon. Expert reviews and curated selections for your perfect kitchen.",
	generator: "v0.app",
	referrer: 'unsafe-url'
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-sans ${GeistSans.variable} ${playfair.variable} antialiased`}>
				<Suspense fallback={null}>
					{children}
					<CookieConsent />
				</Suspense>
				<Analytics />
			</body>
		</html>
	)
}
