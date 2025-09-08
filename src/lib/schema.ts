import { pgTable, serial, text, integer } from "drizzle-orm/pg-core"

export const quotes = pgTable("quotes", {
  id: serial("id").primaryKey(),
  quote: text("quote").notNull(),   
  name: text("name").notNull(),
  
})

export const users = pgTable("users", {
  id: serial("id").primaryKey(),    // auto-incrementing ID
  name: text("name").notNull(),     // user name
  age: integer("age"),              // optional age
});

