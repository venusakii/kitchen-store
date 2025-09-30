"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-foreground flex-1 min-w-[250px]">
            This website uses cookies to enhance your experience and analyze site usage. By continuing, you consent to
            our use of cookies.
          </p>
          <div className="flex items-center gap-2">
            <Button onClick={acceptCookies} className="bg-primary text-primary-foreground hover:bg-primary/90">
              Accept
            </Button>
            <Button variant="ghost" size="icon" onClick={acceptCookies}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
