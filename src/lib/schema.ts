import { pgTable, serial, text } from "drizzle-orm/pg-core"

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  quote: text("quote").notNull(),   
  name: text("name").notNull(),
  
})
