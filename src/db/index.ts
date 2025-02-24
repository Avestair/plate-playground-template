import { drizzle } from "drizzle-orm/mysql2";

import 'dotenv/config';

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const db = drizzle(process.env.DATABASE_URL);