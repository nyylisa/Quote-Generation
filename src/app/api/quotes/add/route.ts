import { db } from "@/lib/db"
import { quotes } from "@/lib/schema"

export async function POST(req: Request) {
  try {
    const { quote, name } = await req.json()

    if (!quote || !name) {
      return new Response(JSON.stringify({ error: "Quote and name are required." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const newQuote = await db.insert(quotes).values({
      quote,
      name,
    }).returning()

    return new Response(JSON.stringify(newQuote[0]), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Failed to add new quote:", error)
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}