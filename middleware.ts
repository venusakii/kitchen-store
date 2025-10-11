import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "dishwasher-safe-anti-slip-knife-set",
  "cast-iron-skillet-with-lid",
  "prioritychef-stainless-steel-mixing-bowls",
  "stainless-steel-cookie-sheets-set",
  "bamboo-charcuterie-board-set",
  "high-heat-resistant-kitchen-utensils",
  "hexclad-nonstick-hybrid-pan",
  "greater-goods-essential-kitchen-scale",
  "carote-nonstick-cookware-set",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://ai-skillup.shop")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/reviews/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("ai", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/shop"],
};
