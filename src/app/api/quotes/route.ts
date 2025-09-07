import { NextResponse } from "next/server"
import { db } from "@/lib/db";
import { quotes } from "@/lib/schema";
import { sql } from "drizzle-orm"

export async function GET() {
  try {
    // Fetch a random quote
    const [randomQuote] = await db
      .select()
      .from(quotes)
      .orderBy(sql`RANDOM()`)
      .limit(1)

    if (!randomQuote) {
      return NextResponse.json({ message: "No quotes found" }, { status: 404 })
    }

    return NextResponse.json(randomQuote)
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 })
  }
}
