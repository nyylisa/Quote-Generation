"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

export default function HomePage() {
  const [currentQuote, setCurrentQuote] = useState<{ quote: string; name: string } | null>(null)
  const [quotesDiscovered, setQuotesDiscovered] = useState(0)

  const getNewQuote = async () => {
    try {
      const res = await fetch("/api/quotes")
      const data = await res.json()
      setCurrentQuote(data)
      setQuotesDiscovered((prev) => prev + 1)
    } catch (error) {
      console.error("Failed to fetch quote:", error)
    }
  }

  // Fetch one random quote on page load
  useEffect(() => {
    getNewQuote()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex flex-col items-center justify-center p-6 text-white">
      <div className="max-w-4xl w-full text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-balance">Daily Inspiration</h1>
          <p className="text-xl md:text-2xl text-white/90 font-light">Discover wisdom from great minds</p>
        </div>

        {/* Quote Card */}
        {currentQuote && (
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-balance mb-6">
              "{currentQuote.quote}"
            </blockquote>
            <cite className="text-lg md:text-xl text-white/80 italic">— {currentQuote.name}</cite>
          </div>
        )}

        {/* Get Another Quote Button */}
        <div className="flex justify-center">
          <Button
            onClick={getNewQuote}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            size="lg"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Get Another Quote
          </Button>
        </div>

        {/* Quote Counter */}
        <p className="text-lg text-white/80">Quotes discovered: {quotesDiscovered}</p>
      </div>
    </div>
  )
}
