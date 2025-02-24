import { defineConfig } from 'drizzle-kit';

import 'dotenv/config';

export default defineConfig({
    dbCredentials: {
      url: process.env.DATABASE_URL!,
    },
    dialect: 'mysql',
  out: './drizzle',
  schema: './db/schema.ts',
});
