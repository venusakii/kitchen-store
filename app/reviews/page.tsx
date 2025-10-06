import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

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
  },
]

export default function ReviewsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-12 md:py-16 bg-gradient-to-br from-accent/20 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground text-balance">
                Product Reviews
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Explore our comprehensive reviews of the finest kitchen products available on Amazon
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <Link key={product.id} href={`/reviews/${product.slug}`}>
                  <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border h-full">
                    <CardContent className="p-0">
                      <div className="aspect-square relative overflow-hidden bg-muted">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4 bg-card text-card-foreground px-3 py-1 rounded-full text-xs font-semibold border border-border">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl font-semibold text-foreground mb-2 text-balance">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{product.description}</p>
                        <div className="flex items-center gap-2 mb-4">
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
                            {product.rating} ({product.reviews})
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
      </main>

      <Footer />
    </div>
  )
}
