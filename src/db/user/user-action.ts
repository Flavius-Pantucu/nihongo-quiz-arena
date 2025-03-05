"use server"

import { UserTable } from "@/db/schema/user";
import { db } from "../db";
import { z } from "zod";
import { eq, or } from "drizzle-orm";
import { loginSchema, registerSchema } from "./user-schema";
import bcrypt from "bcryptjs";
import { comparePasswords } from "@/lib/utils";

export async function registerAction(unsafeData: z.infer<typeof registerSchema>) {
  const { success, data } = registerSchema.safeParse(unsafeData)

  if (!success) return "Unable to create account"
  
  const existingUser = await db.select().from(UserTable).where(
    or(
      eq(UserTable.email, data.email),
      eq(UserTable.username, data.username)
    )
  )

  if (existingUser != null && existingUser.length > 0) return "Account already exists for this email"

  try {
    const hashedPassword = bcrypt.hashSync(data.password, 10)

    const [user] = await db
      .insert(UserTable)
      .values({
        username: data.username,
        email: data.email,
        password: hashedPassword,
      })
      .returning({ id: UserTable.id, role: UserTable.uuid })

    if (user == null) return "Unable to create account"

    //TBD Cookie save.
  } catch {
    return "Unable to create account"
  }

  return "Account created successfully"
}

export async function loginAction(unsafeData: z.infer<typeof loginSchema>) {
  const { success, data } = loginSchema.safeParse(unsafeData)

  if (!success) return "Unable to log you in"

  const user = await db.select().from(UserTable).where(
    or(
      eq(UserTable.email, data.account),
      eq(UserTable.username, data.account)
    )
  )

  if (user == null || user.length == 0) {
    return "Unable to log you in"
  }

  const isCorrectPassword = comparePasswords(data.password, user[0].password)

  if (!isCorrectPassword) return "Unable to log you in"

  //TBD Cookie save.

  return "Successfully logged in"
}