import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, CheckCircle, XCircle, ShoppingCart } from "lucide-react"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    slug: "dishwasher-safe-anti-slip-knife-set",
    name: "Dishwasher Safe Anti-Slip Knife Set",
    category: "Cutlery",
    price: "$129.99",
    rating: 4.9,
    reviews: 1247,
    image: "https://m.media-amazon.com/images/I/71S1DId6ftL._AC_SX679_.jpg",
    description: "Premium stainless steel knives with ergonomic anti-slip handles for kitchen sharpening",
    amazonUrl: "https://www.amazon.com/Dishwasher-Kitchen-kitchen-Sharpening-Anti-slip/dp/B0BKRVT66L/ref=sr_1_2?crid=60NW40ZFM638&dib=eyJ2IjoiMSJ9.mZaLapasYK4tj_y1Y6PuFIjT6zH5KwQirKotukWCQvqKXSX_7vj3XBQxEw7lVwljCXXToJ4Gysn6J86UyTJL9Ns0s8343Z6gYpNAygS9zZflgMeFh9oOhmN_fg0jxTfvdF55EwjQ1tGEJAx1iXbvNR9yfngXS2kbnXNJF2v7vO5V58hw41gHicNtBlNKMi67budvoeKXk8FCaqsGQKEJJOoOLIOmQkKNUuNLoAdQRa9SxIZcVQQotWSV0S17KkQ7ddX8dmjrRUmUOPJUDwb3GQkHMgz2Y3PtCqqrdlsC8Qo.JKlxom_xmKGtoPIgwX19lM7VwX6MIlpexRc6xFzPUWE&dib_tag=se&keywords=HUNTER+Dishwasher+Safe+Knife+Set&qid=1759755386&sprefix=hunter+dishwasher+safe+knife+set%2Caps%2C219&sr=8-2",
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
    price: "$89.99",
    rating: 4.8,
    reviews: 892,
    image: "https://m.media-amazon.com/images/I/71wKZh5tYbL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    description: "Pre-seasoned cast iron skillet with lid for perfect heat distribution",
    amazonUrl: "https://www.amazon.com/Cast-Iron-Skillet-Lid-Pre-Seasoned/dp/B093TCYF9T/ref=sr_1_9?crid=2XS53YUZU594O&dib=eyJ2IjoiMSJ9.sjMifXeEAy06xCdDXNnXlRVeu8riZ8zpZiUfMmi_tpKJ7onOgRuPKnaNPBLD9sY3O92nm6tXiueeWBUhGDOv0oFzp3Kp-9o4PK1deJjPJ34luVwFonIrL0ELD_mKVreBiwXHGKBOiAEXWPfMtAFX1Ft9385nkpFC4WblLwXYc-R9jM-VQG9WIjI7GURaurQ4hHp4uc3VdrOoxA29cnFVUz5UXqwedJbb1P9NFIfxAiVRBqCD9vFX4L3TNN92oelbn3-EJibK5OvSf3vPSnkBTD604bselatDy8k1GIiONkQ.7UWPOWU5xYTRpFVOb9Iy_F7M7H8inXf3vWG-HdeZhoM&dib_tag=se&keywords=Cast%2BIron%2BSkillet%2Bwith%2BLid&qid=1759755444&sprefix=cast%2Biron%2Bskillet%2Bwith%2Blid%2Caps%2C267&sr=8-9&th=1",
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
    price: "$45.99",
    rating: 4.7,
    reviews: 654,
    image: "https://m.media-amazon.com/images/I/81Uptl8nNhL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    description: "Nested set of 5 durable mixing bowls with silicone stackable design",
    amazonUrl: "https://www.amazon.com/PriorityChef-Capacity-Stainless-Silicone-Stackable/dp/B01A10A9UO/ref=sr_1_1?crid=3J5FNBM7PM39X&dib=eyJ2IjoiMSJ9.ElQqGfgtufHvAOhbyyuVXCsVqOtkz6bxfw10hM645Pr_mTdlhQAa9QKMLDMOPs5SvhGZlL5v_IO_xUuuItfg1RTg3n860ASeF_yk3nazFycN1ZiiVxO6U5HQHDXWde_ZgMmUof1z3Tp_yyDIa7S6qp82-KX3rH0sTh9FiyIpFPu6BXGlGILz48BHcLiNifMCleXStyUVmc6sWKbAO3QK8sIvczLvWWdMK8IzVS85kyVwzSaa4MEf0YLOjBXYwhmy8xRoib2T1gcbjQcRJXLVDGIZT42mWo27P5sxddn504M.JPrZSIMnHZZBwFFBzMYUGFP3H--R3X2KQYl3fUhr2Gc&dib_tag=se&keywords=PriorityChef%2BStainless%2BSteel%2BMixing%2BBowls&qid=1759755486&sprefix=priority%2Bchef%2Bstainless%2Bsteel%2Bmixing%2Bbowls%2Caps%2C312&sr=8-1&th=1",
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
    price: "$34.99",
    rating: 4.6,
    reviews: 523,
    image: "https://m.media-amazon.com/images/I/81X4HsbYDeL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    description: "Professional-grade stainless steel cookie sheets for baking and cooling",
    amazonUrl: "https://www.amazon.com/Stainless-Cookie-Sheets-Quarter-Cooling/dp/B0CPJCGL54/ref=sr_1_26?crid=2LTQZU6JNWU7G&dib=eyJ2IjoiMSJ9.DnH0vr_Hh0jgqj1FpGcdj3TaK-9SQey5UjA7T0q4Sd0RNlQ2oaDrDDY4su-E164pKbWCi3UveXlMS_gwL7N5FKbBNHEdwRcz7f3Paqgv3P4Jey1cvDTp8R89cwBoOdqA_Nb8axaeoXZuLzwNIQuJeUdk7pN3nzp0h5d5vSYopSfMqu-0grL-hAFY9NbPf4_9OWXl1Kr8p0XOlnuDCSyFVownIfM7ppSVSG9OS8pXvNNbh0p0sw4-9roEfjgzAwbmTGQ1uuac_H-bvzEDk9_BvkqE8lPbdJVOv87n5Wg55MQ.Cg1uNSF25DXJPhqU6wzWulmnc8c7Zx2t0loeD6Sfo0g&dib_tag=se&keywords=Farberware%2BStainless%2BSteel%2BBaking%2BSheet&qid=1759755519&sprefix=farberware%2Bstainless%2Bsteel%2Bbaking%2Bsheet%2Caps%2C273&sr=8-26&th=1",
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
    price: "$56.99",
    rating: 4.8,
    reviews: 789,
    image: "https://m.media-amazon.com/images/I/81Ms6RgWvqL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    description: "Elegant bamboo charcuterie boards perfect for Christmas gifting and entertaining",
    amazonUrl: "https://www.amazon.com/Bamboo-Charcuterie-Boards-Christmas-Gift/dp/B01DTFF0Y8/ref=sr_1_2_sspa?crid=29VUS9TSNXLW4&dib=eyJ2IjoiMSJ9.E7NZ7lh6GpyurnuRkgLowUN8rIvcs9C1TyzfGNBAE4rx6WWNkw78HE7gSxB9-4-aIJr8jF4flJkCzZ8SekF9eH4e4O97Y38OjkFB7CyiI69Yev7hrZmZLhNE63ta0iwuZwi6oUZYgJuuT-Ow2N9eQmWlo3gGowRwH2hBkdW-nS87laSrM43sl1FVWhorNJ47RoCWod0jq-PBcHqmWbLl0DkapcRWWNRhrN0HvlCMuaZHArUZpDywgK556zpRPdXtWCUrg8xfYw_PGXjeylzOncSmALq3aN20RNoNF2IOrkw.OAgvhOZGJnE66jttI57DzNp5uNjjEwlCO3eviBjHAeE&dib_tag=se&keywords=Charcuterie%2BCheese%2BBoard%2Bwith%2BKnives%2BSet&qid=1759755573&sprefix=charcuterie%2Bcheese%2Bboard%2Bwith%2Bknives%2Bset%2Caps%2C271&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
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
    price: "$24.99",
    rating: 4.5,
    reviews: 412,
    image: "https://m.media-amazon.com/images/I/61rfXav6BOL._AC_SY300_SX300_QL70_FMwebp_.jpg",
    description: "Durable high heat-resistant utensils for non-stick cookware",
    amazonUrl: "https://www.amazon.com/High-Heat-Resistant-Kitchen-Utensil/dp/B0CGD8R5DJ/ref=sr_1_2?crid=2ZJP1IWAU1EJI&dib=eyJ2IjoiMSJ9.XdAG7JnhpfE4NACFPp7woynl41RE5-6R4s5uVrVcaPlWTq_9IIPjnJzZRT2qLV9mOSVfTYH2qMK9X2sbflztPsEoXB0b9TXKwwu4gimWK-JZVg1SQsEpWFHbjtgAS9lWOjfeesDMadx4uRQY-kcF9KV6Jvyv8LEyDtrMu9Gi5vVxUb8_2oq4gntIa_cusEojG6WsBcv7wG5qgwUax8JCO-zIxmokFHTnTfNcwNPWKGKN_PzXg5kLN5MVc7PbNNwPqjwo9mkMLXBrFXAxdEpEnaKY5HM32JRzc_E119VNlbA.TXIokyEPoDcbEXqbyAIFqeDvKjBX3A2XXGYEyngSNFA&dib_tag=se&keywords=U-Taste%2BSilicone%2BSpatula%2BSet&qid=1759755632&sprefix=u-taste%2Bsilicone%2Bspatula%2Bset%2Caps%2C252&sr=8-2&th=1",
    fullDescription:
      "This high heat-resistant kitchen utensil set is built for tough cooking tasks, featuring nylon heads that withstand up to 400°F without melting. Ideal for non-stick pans, the set includes essentials like spatula, spoon, and slotted turner for versatile use.",
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
    price: "$199.99",
    rating: 4.9,
    reviews: 1056,
    image: "https://m.media-amazon.com/images/I/61RA24+5tIL._AC_SX679_.jpg",
    description: "12-inch hybrid nonstick pan with tempered glass lid, dishwasher compatible",
    amazonUrl: "https://www.amazon.com/HexClad-Nonstick-Tempered-Dishwasher-Compatible/dp/B0CSF1J62Z/ref=sr_1_3?crid=35CR9H6NSXITN&dib=eyJ2IjoiMSJ9.DnLa6u7ctakmEKTndLsJZs1Xv6cKxfwTX_0s2vTlGpkSAWjzkTjSVFSCfOVoAJ7yzjQH2kY1tgGifAEjADjHD3z2ClZuZS8o-eBQWL-eDFDOvp3NdnhXZb5xz8uiPx6Bt-vIWH6aHp6xVIoHMKMlqVa7J6m_Ijf0uScCsD1eE2IPYjrolfH7ejLRkwQRlq9hOfIk8FI7o0xJMdu3kJ6CAJgCpYvuh0uaFz-julY6exUmiyPS2gikx198hpZewB7g0_jZ4DWb6-rbBXCNzP4En7N0qu9cX3s6LoRNFQhmdU4._lTpKRcqCgg6syIjRy27iuqlVYfgFv-Z0Piel88Okio&dib_tag=se&keywords=HexClad+Nonstick+Hybrid+Pan&qid=1759755674&sprefix=hexclad+nonstick+hybrid+pan%2Caps%2C257&sr=8-3",
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
    slug: "greater-goods-essential-kitchen-scale",
    name: "Greater Goods Essential Kitchen Scale",
    category: "Kitchen Tools",
    price: "$29.99",
    rating: 4.7,
    reviews: 634,
    image: "https://m.media-amazon.com/images/I/61CI7mL0wRL._AC_SX679_.jpg",
    description: "Precise digital kitchen scale with Accucheck for accurate measurements",
    amazonUrl: "https://www.amazon.com/Greater-Goods-Essential-Kitchen-Accucheck/dp/B0F6G6HJNW/ref=sr_1_9?crid=1I8VLGWOXBNZM&dib=eyJ2IjoiMSJ9.UpJKeor-Mad_71G_AR9sOlGbWx-NOHV5p3n51M11yxjYSOyA99mhTTZmiPK712GFJRR5WmP7k5jwRDEHAfV0YmESE4cKZncEyGxNkTHExmvE5qML0GgmBMEIBKXO8T-1kLr9EOOroQlmKuppr2ksEusNSJsENyyzWLsoiMwdEF-IGAMK9zvcgSEl3AoL7j8d3MlMmScLgYEn5DDkbeZnhYNs-lFz_Q1av-VUiwUhI12xznpe0SO1HVEnPxbp0Sp1tHV0J7JGGoyOU7gT3ReHmuoMapKqGy4vIsK8jky2FZI.4tZ9dpuPbza0KpoNLTYg5ifOcHQzAepVk04Q8d1rV44&dib_tag=se&keywords=Greater+Goods+Digital+Kitchen+Scale&qid=1759755715&sprefix=greater+goods+digital+kitchen+scale%2Caps%2C256&sr=8-9",
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
    price: "$67.99",
    rating: 4.4,
    reviews: 31083,
    image: "https://m.media-amazon.com/images/I/711JrV49tmL._AC_SX679_.jpg",
    description: "Induction-compatible granite nonstick cookware set with saucepans",
    amazonUrl: "https://www.amazon.com/CAROTE-Nonstick-Cookware-Induction-Saucepans/dp/B0C8HPJW4J/ref=sr_1_8?crid=11AX0CLYUH552&dib=eyJ2IjoiMSJ9.ysj7CmlOUGf21atblgOylocuFFlFHPXUWuDafePh3vzuMopsHUwoy1n69ppcWtq2_FuGHLBkes6uYwXHAYZRX5EwgvuomsO5EwQmv8GMg0qAcvbp3rDi86UIJbNwT2tc8Cyi4m3vWKGBS8bKLQon6Y8LbQtuVFj_G5NiNvwns-1PefVyoxi_nDMGIIRVK0StOydjQbwBl3WvxgAHIA7FvvTMtCAAjStMb-ubJIZ1EXP_qWC8gEeciV6elZqcKdiRyMnGz-KuoDXXlUg43wS2AgdcFZkXZC_fCxQht3d7cMg.-001NPptfoityhtjkvl8MlTDFjk7OvjCj7pOw4eotaQ&dib_tag=se&keywords=Ceramic%2BNonstick%2BCookware%2BSet&qid=1759755754&sprefix=ceramic%2Bnonstick%2Bcookware%2Bset%2Caps%2C261&sr=8-8&th=1",
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
