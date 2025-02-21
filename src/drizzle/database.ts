'use server';

import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres"
import * as schema from "./schema"

config({ path: ".env" });

export const db = drizzle({
  schema,
  connection: {
    connectionString: process.env.DATABASE_URL,
  },
})