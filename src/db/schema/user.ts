import { integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable("users", {
  uuid: uuid('uuid').defaultRandom(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar({ length: 255 }).notNull().unique(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).notNull()
});