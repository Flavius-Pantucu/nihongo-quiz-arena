"use server"

import { UserTable } from "@/db/schema/user";
import { db } from "../db";

export const createUser = async (user : typeof UserTable.$inferInsert) => {
  console.log(user);
  
  await db.insert(UserTable).values(user);
};

export const selectUsers = async () => {
  return await db.select().from(UserTable);
}
