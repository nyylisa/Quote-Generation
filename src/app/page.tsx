// // "use client"

// // import { useState, useEffect } from "react"
// // import { Button } from "@/components/ui/button"
// // import { RefreshCw } from "lucide-react"

// // export default function HomePage() {
// //   const [currentQuote, setCurrentQuote] = useState<{ quote: string; name: string } | null>(null)
// //   const [quotesDiscovered, setQuotesDiscovered] = useState(0)

// //   const getNewQuote = async () => {
// //     try {
// //       const res = await fetch("/api/quotes")
// //       const data = await res.json()
// //       setCurrentQuote(data)
// //       setQuotesDiscovered((prev) => prev + 1)
// //     } catch (error) {
// //       console.error("Failed to fetch quote:", error)
// //     }
// //   }

// //   // Fetch one random quote on page load
// //   useEffect(() => {
// //     getNewQuote()
// //   }, [])

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex flex-col items-center justify-center p-6 text-white">
// //       <div className="max-w-4xl w-full text-center space-y-8">
// //         {/* Header */}
// //         <div className="space-y-4">
// //           <h1 className="text-5xl md:text-6xl font-bold text-balance">Daily Inspiration</h1>
// //           <p className="text-xl md:text-2xl text-white/90 font-light">Discover wisdom from great minds</p>
// //         </div>

// //         {/* Quote Card */}
// //         {currentQuote && (
// //           <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto">
// //             <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed text-balance mb-6">
// //               "{currentQuote.quote}"
// //             </blockquote>
// //             <cite className="text-lg md:text-xl text-white/80 italic">— {currentQuote.name}</cite>
// //           </div>
// //         )}

// //         {/* Get Another Quote Button */}
// //         <div className="flex justify-center">
// //           <Button
// //             onClick={getNewQuote}
// //             className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
// //             size="lg"
// //           >
// //             <RefreshCw className="w-5 h-5 mr-2" />
// //             Get Another Quote
// //           </Button>
// //         </div>

// //         {/* Quote Counter */}
// //         <p className="text-lg text-white/80">Quotes discovered: {quotesDiscovered}</p>
// //       </div>
// //     </div>
// //   )
// // }


// "use client"

// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import { RefreshCw } from "lucide-react"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"

// export default function HomePage() {
//   const [currentQuote, setCurrentQuote] = useState<{ quote: string; name: string } | null>(null)
//   const [quotesDiscovered, setQuotesDiscovered] = useState(0)
//   const [newQuote, setNewQuote] = useState({ quote: "", name: "" })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submissionStatus, setSubmissionStatus] = useState("")

//   const getNewQuote = async () => {
//     try {
//       const res = await fetch("/api/quotes")
//       const data = await res.json()
//       setCurrentQuote(data)
//       setQuotesDiscovered((prev) => prev + 1)
//     } catch (error) {
//       console.error("Failed to fetch quote:", error)
//     }
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setNewQuote((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmissionStatus("")

//     try {
//       const res = await fetch("/api/quotes/add", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newQuote),
//       })

//       if (res.ok) {
//         setSubmissionStatus("Quote added successfully!")
//         setNewQuote({ quote: "", name: "" }) // Clear form
//         // Optionally, fetch the new quote and display it
//         getNewQuote()
//       } else {
//         const errorData = await res.json()
//         setSubmissionStatus(`Failed to add quote: ${errorData.error}`)
//       }
//     } catch (error) {
//       console.error("Failed to submit quote:", error)
//       setSubmissionStatus("An unexpected error occurred.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   // Fetch one random quote on page load
//   useEffect(() => {
//     getNewQuote()
//   }, [])

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-blue-500 flex flex-col items-center justify-center p-6 text-white">
//       <div className="max-w-4xl w-full text-center space-y-8">
//         {/* ... (Existing Header, Quote Card, and Button) ... */}

//         {/* Add Quote Form */}
//         <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl max-w-3xl mx-auto space-y-4 text-left">
//           <h2 className="text-3xl font-bold text-center">Contribute a Quote</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="quote" className="sr-only">Quote</label>
//               <Textarea
//                 id="quote"
//                 name="quote"
//                 placeholder="Enter your quote here..."
//                 value={newQuote.quote}
//                 onChange={handleInputChange}
//                 required
//                 className="bg-white/20 text-white placeholder-white/70 border-white/30"
//               />
//             </div>
//             <div>
//               <label htmlFor="name" className="sr-only">Your Name</label>
//               <Input
//                 id="name"
//                 name="name"
//                 placeholder="Your Name"
//                 value={newQuote.name}
//                 onChange={handleInputChange}
//                 required
//                 className="bg-white/20 text-white placeholder-white/70 border-white/30"
//               />
//             </div>
//             <Button
//               type="submit"
//               disabled={isSubmitting}
//               className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white rounded-full py-3 text-lg font-semibold shadow-md transition-all duration-200"
//             >
//               {isSubmitting ? "Adding..." : "Add My Quote"}
//             </Button>
//           </form>
//           {submissionStatus && <p className="text-center mt-4">{submissionStatus}</p>}
//         </div>

//         <p className="text-lg text-white/80">Quotes discovered: {quotesDiscovered}</p>
//       </div>
//     </div>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function HomePage() {
  const [currentQuote, setCurrentQuote] = useState<{ quote: string; name: string } | null>(null)
  const [quotesDiscovered, setQuotesDiscovered] = useState(0)
  const [newQuote, setNewQuote] = useState({ quote: "", name: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionStatus, setSubmissionStatus] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setNewQuote((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmissionStatus("")

    try {
      const res = await fetch("/api/quotes/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newQuote),
      })

      if (res.ok) {
        setSubmissionStatus("Quote added successfully!")
        setNewQuote({ quote: "", name: "" }) // Clear form
        setIsModalOpen(false) // Close the modal on success
      } else {
        const errorData = await res.json()
        setSubmissionStatus(`Failed to add quote: ${errorData.error}`)
      }
    } catch (error) {
      console.error("Failed to submit quote:", error)
      setSubmissionStatus("An unexpected error occurred.")
    } finally {
      setIsSubmitting(false)
    }
  }

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

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <Button
            onClick={getNewQuote}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            size="lg"
          >
            <RefreshCw className="w-5 h-5 mr-2" />
            Get Another Quote
          </Button>

          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <Button
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 rounded-full px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                size="lg"
              >
                Add Your Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Contribute a Quote</DialogTitle>
                <DialogDescription>
                  Enter your favorite quote and your name to add it to our collection.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Textarea
                    id="quote"
                    name="quote"
                    placeholder="Enter your quote here..."
                    value={newQuote.quote}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={newQuote.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                {submissionStatus && <p className="text-center text-sm">{submissionStatus}</p>}
                <DialogFooter>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Adding..." : "Submit Quote"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Quote Counter */}
        <p className="text-lg text-white/80">Quotes discovered: {quotesDiscovered}</p>
      </div>
    </div>
  )
}