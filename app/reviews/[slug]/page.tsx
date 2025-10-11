"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, XCircle, ShoppingCart } from "lucide-react"
import { notFound, useParams } from "next/navigation"
import { useEffect } from "react"

const products = [
	{
		id: 1,
		slug: "dishwasher-safe-anti-slip-knife-set",
		name: "Dishwasher Safe Anti-Slip Knife Set",
		category: "Cutlery",
		rating: 4.9,
		reviews: 1247,
		image: "https://m.media-amazon.com/images/I/71S1DId6ftL._AC_SX679_.jpg",
		amazonUrl:
			"https://www.amazon.com/Dishwasher-Kitchen-kitchen-Sharpening-Anti-slip/dp/B0BKRVT66L/ref=sr_1_2?crid=60NW40ZFM638&dib=eyJ2IjoiMSJ9.mZaLapasYK4tj_y1Y6PuFIjT6zH5KwQirKotukWCQvqKXSX_7vj3XBQxEw7lVwljCXXToJ4Gysn6J86UyTJL9Ns0s8343Z6gYpNAygS9zZflgMeFh9oOhmN_fg0jxTfvdF55EwjQ1tGEJAx1iXbvNR9yfngXS2kbnXNJF2v7vO5V58hw41gHicNtBlNKMi67budvoeKXk8FCaqsGQKEJJOoOLIOmQkKNUuNLoAdQRa9SxIZcVQQotWSV0S17KkQ7ddX8dmjrRUmUOPJUDwb3GQkHMgz2Y3PtCqqrdlsC8Qo.JKlxom_xmKGtoPIgwX19lM7VwX6MIlpexRc6xFzPUWE&dib_tag=se&keywords=HUNTER+Dishwasher+Safe+Knife+Set&qid=1759755386&sprefix=hunter+dishwasher+safe+knife+set%2Caps%2C219&sr=8-2",
		description: "Premium stainless steel knives with ergonomic anti-slip handles for kitchen sharpening",
		fullDescription:
			"The Dishwasher Safe Anti-Slip Knife Set offers premium stainless steel blades with innovative anti-slip handles for superior grip and safety. Designed for precision cutting, this set is perfect for everyday kitchen tasks and is fully dishwasher safe for effortless maintenance.",
		features: [
			"High-grade stainless steel blades",
			"Ergonomic anti-slip handles",
			"Dishwasher safe for convenience",
			"Includes multiple knife types: chef, paring, and serrated",
			"Rust and corrosion resistant",
		],
		pros: [
			"Exceptional grip in wet conditions",
			"Sharp edges that stay honed",
			"Easy cleanup without hand washing",
			"Balanced weight for control",
			"Versatile for professional and home use",
		],
		cons: ["Higher initial cost", "Handles may feel bulky for small hands"],
		verdict: {
			quality: 5,
			value: 4,
			performance: 5,
			overall: 9.4,
			summary: "An elite knife set prioritizing safety and durability with anti-slip innovation.",
		},
	},
	{
		id: 2,
		slug: "cast-iron-skillet-with-lid",
		name: "Cast Iron Skillet with Lid",
		category: "Cookware",
		rating: 4.8,
		reviews: 892,
		image: "https://m.media-amazon.com/images/I/71wKZh5tYbL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		amazonUrl:
			"https://www.amazon.com/Cast-Iron-Skillet-Lid-Pre-Seasoned/dp/B093TCYF9T/ref=sr_1_9?crid=2XS53YUZU594O&dib=eyJ2IjoiMSJ9.sjMifXeEAy06xCdDXNnXlRVeu8riZ8zpZiUfMmi_tpKJ7onOgRuPKnaNPBLD9sY3O92nm6tXiueeWBUhGDOv0oFzp3Kp-9o4PK1deJjPJ34luVwFonIrL0ELD_mKVreBiwXHGKBOiAEXWPfMtAFX1Ft9385nkpFC4WblLwXYc-R9jM-VQG9WIjI7GURaurQ4hHp4uc3VdrOoxA29cnFVUz5UXqwedJbb1P9NFIfxAiVRBqCD9vFX4L3TNN92oelbn3-EJibK5OvSf3vPSnkBTD604bselatDy8k1GIiONkQ.7UWPOWU5xYTRpFVOb9Iy_F7M7H8inXf3vWG-HdeZhoM&dib_tag=se&keywords=Cast%2BIron%2BSkillet%2Bwith%2BLid&qid=1759755444&sprefix=cast%2Biron%2Bskillet%2Bwith%2Blid%2Caps%2C267&sr=8-9&th=1",
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
		image: "https://m.media-amazon.com/images/I/81Uptl8nNhL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		amazonUrl:
			"https://www.amazon.com/PriorityChef-Capacity-Stainless-Silicone-Stackable/dp/B01A10A9UO/ref=sr_1_1?crid=3J5FNBM7PM39X&dib=eyJ2IjoiMSJ9.ElQqGfgtufHvAOhbyyuVXCsVqOtkz6bxfw10hM645Pr_mTdlhQAa9QKMLDMOPs5SvhGZlL5v_IO_xUuuItfg1RTg3n860ASeF_yk3nazFycN1ZiiVxO6U5HQHDXWde_ZgMmUof1z3Tp_yyDIa7S6qp82-KX3rH0sTh9FiyIpFPu6BXGlGILz48BHcLiNifMCleXStyUVmc6sWKbAO3QK8sIvczLvWWdMK8IzVS85kyVwzSaa4MEf0YLOjBXYwhmy8xRoib2T1gcbjQcRJXLVDGIZT42mWo27P5sxddn504M.JPrZSIMnHZZBwFFBzMYUGFP3H--R3X2KQYl3fUhr2Gc&dib_tag=se&keywords=PriorityChef%2BStainless%2BSteel%2BMixing%2BBowls&qid=1759755486&sprefix=priority%2Bchef%2Bstainless%2Bsteel%2Bmixing%2Bbowls%2Caps%2C312&sr=8-1&th=1",
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
		slug: "stainless-steel-cookie-sheets-set",
		name: "Stainless Steel Cookie Sheets Set",
		category: "Bakeware",
		rating: 4.6,
		reviews: 523,
		image: "https://m.media-amazon.com/images/I/81X4HsbYDeL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		amazonUrl:
			"https://www.amazon.com/Stainless-Cookie-Sheets-Quarter-Cooling/dp/B0CPJCGL54/ref=sr_1_26?crid=2LTQZU6JNWU7G&dib=eyJ2IjoiMSJ9.DnH0vr_Hh0jgqj1FpGcdj3TaK-9SQey5UjA7T0q4Sd0RNlQ2oaDrDDY4su-E164pKbWCi3UveXlMS_gwL7N5FKbBNHEdwRcz7f3Paqgv3P4Jey1cvDTp8R89cwBoOdqA_Nb8axaeoXZuLzwNIQuJeUdk7pN3nzp0h5d5vSYopSfMqu-0grL-hAFY9NbPf4_9OWXl1Kr8p0XOlnuDCSyFVownIfM7ppSVSG9OS8pXvNNbh0p0sw4-9roEfjgzAwbmTGQ1uuac_H-bvzEDk9_BvkqE8lPbdJVOv87n5Wg55MQ.Cg1uNSF25DXJPhqU6wzWulmnc8c7Zx2t0loeD6Sfo0g&dib_tag=se&keywords=Farberware%2BStainless%2BSteel%2BBaking%2BSheet&qid=1759755519&sprefix=farberware%2Bstainless%2Bsteel%2Bbaking%2Bsheet%2Caps%2C273&sr=8-26&th=1",
		description: "Professional-grade stainless steel cookie sheets for baking and cooling",
		fullDescription:
			"This set of stainless steel cookie sheets is designed for professional baking results at home. Featuring quarter-size sheets that double as cooling racks, they offer even heat distribution and durability for cookies, pastries, and roasting. Dishwasher safe for quick cleanup.",
		features: [
			"Heavy-duty stainless steel build",
			"Reversible: baking sheet and cooling rack",
			"Oven-safe up to 450°F",
			"Warp-resistant design",
			"Set includes two versatile sheets",
		],
		pros: [
			"Excellent heat conduction",
			"Multi-functional for baking and cooling",
			"Rust-proof and sturdy",
			"Simple dishwasher cleanup",
			"Great value for a set",
		],
		cons: ["No non-stick surface", "Edges may be sharp"],
		verdict: {
			quality: 4,
			value: 5,
			performance: 4,
			overall: 8.9,
			summary: "A robust and versatile bakeware set ideal for frequent bakers.",
		},
	},
	{
		id: 5,
		slug: "bamboo-charcuterie-board-set",
		name: "Bamboo Charcuterie Board Set",
		category: "Kitchen Tools",
		rating: 4.8,
		reviews: 789,
		image: "https://m.media-amazon.com/images/I/81Ms6RgWvqL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		amazonUrl:
			"https://www.amazon.com/SMIRLY-Charcuterie-Boards-Warming-Anniversary/dp/B07S4D3LGF/ref=sr_1_13?crid=35P0MATM92YT5&dib=eyJ2IjoiMSJ9.6hjXhJoJ6fzwk19PF3RNq26XSfN3CvX9n94WkQDw5zAF92fSGwb3utZwxANW_T1dDerAziTQidp8YxfpbUhtphVDRQcJkrNrv-Mrn2s09izYJLCidUi0HBy61uArQiiSW5VZ1TtxeyBX0G4NpHYu5y0RHr_bQwUD9vm3ylcJwSXo_8jPI-d3AwUhYkbHMAkQtBQ0wUwh_a16AoHP39v43gHlV2k1FvleLbGUKKftTroCGu_bgB31OyERWGQWkB2Z4ZUSG6WO7vQArL-pehX4g6F6vC6DG1k3mqTNkkYJq_U.Noz5xg1znLZvUJDGQlBBfgpqsh8fKLB0ZmquNtibcl8&dib_tag=se&keywords=Bamboo%2BCharcuterie%2BBoard%2BSet&qid=1759757426&sprefix=bamboo%2Bcharcuterie%2Bboard%2Bset%2Caps%2C247&sr=8-13&th=1",
		description: "Elegant bamboo charcuterie boards perfect for Christmas gifting and entertaining",
		fullDescription:
			"This bamboo charcuterie board set is crafted for stylish entertaining, featuring multiple boards in various sizes for creative displays of cheeses, meats, and fruits. Naturally antibacterial and eco-friendly, it's an ideal gift for holidays or housewarmings.",
		features: [
			"Sustainable bamboo material",
			"Set of 3 boards in graduated sizes",
			"Natural oil finish for protection",
			"Lightweight yet durable",
			"Perfect for serving and gifting",
		],
		pros: [
			"Eco-friendly and attractive",
			"Easy to maintain",
			"Versatile for different occasions",
			"Antibacterial properties",
			"Compact storage",
		],
		cons: ["Hand wash only", "May absorb odors if not oiled"],
		verdict: {
			quality: 5,
			value: 4,
			performance: 5,
			overall: 9.1,
			summary: "A charming and practical set that elevates any gathering.",
		},
	},
	{
		id: 6,
		slug: "high-heat-resistant-kitchen-utensils",
		name: "High Heat Resistant Kitchen Utensil Set",
		category: "Kitchen Tools",
		rating: 4.5,
		reviews: 412,
		image: "https://m.media-amazon.com/images/I/61rfXav6BOL._AC_SY300_SX300_QL70_FMwebp_.jpg",
		amazonUrl:
			"https://www.amazon.com/Silicone-Kitchen-Cooking-Utensil-Set/dp/B0CGD8R5DJ/ref=sr_1_47?crid=2OPIR6JV7H7RK&dib=eyJ2IjoiMSJ9.f5NgDKIz6aDWqW6Sm0XB8jZ42UKrt8JhkQQxiZqCB64_BkDrTUFoTcEzJwR7tNg3st_PXQkdRYmUD1kvSpx35urBxc51VT2NXUnWBrYIKjhCdHHuXHpvfRK4aq0yLti_JShhqqoSteKahjXtJLkH9MQxzSbBEV7PQsP6aweelkn-0QkbHFYOYsX7DkdBOvTmLKCXEfL2Xm4loMTi5R2a2ivvVvFV1R49CeTFdgc0xhuMnlq0zfWAb1VFGEHgSWGmcSApVDG78u2QliTvD-1tCUv31bYA1c6mQNi1aMnAC_Q.Sx-NF1OmVccy29S45woq_Rjm2Y_sXUMNTnVk-V-kyHA&dib_tag=se&keywords=high%2Bheat%2Bcooking%2Butensils&qid=1759758108&sprefix=High%2BHeat%2BResistant%2BKitchen%2BUtensil%2BSet%2Caps%2C289&sr=8-47&th=1",
		description: "Durable high heat-resistant utensils for non-stick cookware",
		fullDescription:
			"The High Heat Resistant Kitchen Utensil Set is built for tough cooking tasks, featuring nylon heads that withstand up to 400°F without melting. Ideal for non-stick pans, the set includes essentials like spatula, spoon, and slotted turner for versatile use.",
		features: [
			"Heat-resistant up to 400°F",
			"Nylon heads for non-stick safety",
			"Ergonomic heat-proof handles",
			"Includes 5-piece essentials set",
			"Dishwasher safe",
		],
		pros: [
			"Won't scratch cookware",
			"Comfortable and sturdy handles",
			"High-temperature tolerance",
			"Easy storage with hanging loop",
			"Affordable and complete set",
		],
		cons: ["Nylon may stain", "Not suitable for very heavy stirring"],
		verdict: {
			quality: 4,
			value: 5,
			performance: 4,
			overall: 8.8,
			summary: "A reliable utensil set for safe and efficient cooking.",
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
		amazonUrl:
			"https://www.amazon.com/HexClad-Nonstick-Tempered-Dishwasher-Compatible/dp/B0CSF1J62Z/ref=sr_1_11?crid=234Z4JHCC6TOX&dib=eyJ2IjoiMSJ9.fasZA9ZnIwKIGlcCzFXuT3iFo6O9ff1cCRFtFAGlZP5F4K6ixVbK9pu_LCGLFIqddZuT8DykoNJGnuUE6vlknAProx4HRz4Ya0OlI_qez79zNKDlfjrcmZotf28MsDs131ofS0HU6XdyEoBAsitNxOzpRfPta7-X9cVI98LaX3OHHB0c476mflaWp5G2a00_rGRtizgi3_AVygF6I6gKLtXKBf4UmPW3t4L9zAYWLJWrr5dNuT_WJwZ5qOHFhRF3dboCWZb3BBhinbRNt-WI2hpQqUYIff0adsWVwaKEwFA.IcZew_L3Gzz654-EzWS7KvrhbJaytUoU97GlRrXNalI&dib_tag=se&keywords=HexClad+Nonstick+Hybrid+Pan&qid=1759758166&sprefix=hexclad+nonstick+hybrid+pan%2Caps%2C251&sr=8-11",
		description: "12-inch hybrid nonstick pan with tempered glass lid, dishwasher compatible",
		fullDescription:
			"The HexClad Nonstick Hybrid Pan combines stainless steel and nonstick technology for superior cooking performance. Its unique hexagonal design ensures durability and easy food release, while the tempered glass lid allows for easy monitoring. Dishwasher safe and induction compatible.",
		features: [
			"Hybrid stainless steel and nonstick surface",
			"Tempered glass lid included",
			"Induction-compatible extended bottom",
			"Oven-safe up to 450°F",
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
		slug: "greater-goods-essential-kitchen-scale",
		name: "Greater Goods Essential Kitchen Scale",
		category: "Kitchen Tools",
		rating: 4.7,
		reviews: 634,
		image: "https://m.media-amazon.com/images/I/61CI7mL0wRL._AC_SX679_.jpg",
		amazonUrl:
			"https://www.amazon.com/Greater-Goods-Capacity-Kitchen-Scale/dp/B09QFWXSD8/ref=sr_1_2?crid=2BN9ZM8WS8YS2&dib=eyJ2IjoiMSJ9.nhYrrRzYm85L9q2sMp6skMY7KtArs6XoIaKPqpsvdYJrSVbN3viG0KpSgSIiFIhT1fYBFHPAUztV2Wg-Ehht4FyyfQNtlsN_zFO4yBlt9RzKg_zQGgyiBve2kSe9tywO25oM2Bz6TVdAXanLLswl3oZx_uZHsXVYMqPpQ97wl3I7n9gA5bWbEr2SRWjMO6rfXVbwROxyK18kTkitQivjnhxM4ZrSYc__ZYn0UQnmlYg67PNGg2m3xkQVU5A_p3OY14I7_Ob7U637h172NMzCFosRARFbhPJcdLCZ41pJKN4.n9DlOD_XcFTMQZGK94iw7kiL_jCinPLoXUJAJzQxcIk&dib_tag=se&keywords=Greater+Goods+Essential+Kitchen+Scale&qid=1759758301&sprefix=greater+goods+essential+kitchen+scale%2Caps%2C231&sr=8-2",
		description: "Precise digital kitchen scale with Accucheck for accurate measurements",
		fullDescription:
			"The Greater Goods Essential Kitchen Scale features Accucheck technology for pinpoint accuracy in measurements up to 11 lbs. With multiple units and a tare function, its slim profile and backlit display make it indispensable for baking, portioning, and meal prep.",
		features: [
			"11 lb capacity with 0.1 oz precision",
			"Accucheck for measurement verification",
			"Units: g, oz, lb, ml",
			"Auto-off and tare functionality",
			"Batteries included",
		],
		pros: [
			"Ultra-precise readings",
			"Sleek and space-saving design",
			"Intuitive controls",
			"Backlit for low-light use",
			"Budget-friendly accuracy",
		],
		cons: ["Battery-dependent", "Surface may be small for bowls"],
		verdict: {
			quality: 4,
			value: 5,
			performance: 4,
			overall: 9.0,
			summary: "An essential tool for precise cooking with reliable tech.",
		},
	},
	{
		id: 9,
		slug: "carote-nonstick-cookware-set",
		name: "CAROTE Nonstick Cookware Set",
		category: "Cookware",
		rating: 4.4,
		reviews: 31083,
		image: "https://m.media-amazon.com/images/I/711JrV49tmL._AC_SX679_.jpg",
		amazonUrl:
			"https://www.amazon.com/CAROTE-Nonstick-Cookware-Induction-Saucepans/dp/B0C8HPJW4J/ref=sr_1_2?crid=3H8L5OW1Q4L9P&dib=eyJ2IjoiMSJ9.A6W5_H6ZvvTc_jo8Cq_gZX4PeQY-BM3PlPeK3a8owhc-E75dPg9zelJsp4yUGxk4XEm-7u0u1ecIsKSS1vVfOEzYXdxIWL9JhGjYQYpQgh3KZH7ScxqQWl8tT4eAcmH_n4xv5r6fvltMAv9m9XItDqgTzIGcQnJSrrv8oBa9FbLaeVDiEMPhlvU2gdE-LTJEeIwQYnbQBupUlE0oY62bpYNcL5fvhejb3kY4UcqR9AsJCSSWDq69OPd-yzEOmHilFVKjxMFXYDWc18_5Viv_e3YO3OAq_B82W4B-ogJM-O0.rfXu0T4sBYMCGL0EulRaG8y27j6N0FSoeC7k2io9Ie4&dib_tag=se&keywords=CAROTE%2BNonstick%2BCookware%2BSet&qid=1759758378&sprefix=carote%2Bnonstick%2Bcookware%2Bset%2Caps%2C254&sr=8-2&th=1",
		description: "Induction-compatible granite nonstick cookware set with saucepans",
		fullDescription:
			"The CAROTE 21Pcs Nonstick Cookware Set features reinforced die-cast aluminum with a top-level granite nonstick coating for ultra-non-stick performance and healthy cooking. This comprehensive induction-compatible set includes frying pans, saucepans, stockpots, and utensils, all designed for quick, even heating and easy cleanup.",
		features: [
			"Reinforced die-cast aluminum body",
			"10x ultra-nonstick granite coating (PFOS/PFOA free)",
			"Induction-compatible extended bottom",
			"Oven-safe up to 450°F",
			"21-piece set with lids, utensils, and pan protectors",
		],
		pros: [
			"Superior nonstick for minimal oil use",
			"Even and rapid heating",
			"Lightweight yet durable construction",
			"Effortless hand wash cleaning",
			"Complete set for all cooking needs",
		],
		cons: ["Hand wash recommended", "Nonstick may degrade with metal tools"],
		verdict: {
			quality: 4,
			value: 5,
			performance: 4,
			overall: 8.7,
			summary: "A feature-packed nonstick set offering great value for versatile, healthy cooking.",
		},
	},
]

export default function ProductReviewPage() {
	const params = useParams();
	const slug = params.slug;
	const product = products.find((p) => p.slug === params.slug)

	if (!product) {
		notFound()
	}
	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.shop === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"shop=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

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

									<Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
										<a href={product.amazonUrl + '?tag=foodandwines-20'} data-auto>
											<ShoppingCart className="mr-2 h-5 w-5" />
											Buy on Amazon
										</a>
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
