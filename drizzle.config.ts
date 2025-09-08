import type { Config } from "drizzle-kit";
import { config } from "dotenv";

// Load .env variables
config();

export default {
  schema: "./src/lib/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!, // must match .env
  },
} satisfies Config;
