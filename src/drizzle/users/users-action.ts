import { db } from "@/drizzle/database";
import { UserTable } from "@/drizzle/schema/user";

export const createUser = async (data : typeof UserTable.$inferInsert) => {
    const newUser = await db.transaction(async trx => {
      const [newUser] = await trx.insert(UserTable).values(data).returning();
      if(newUser == null){
        trx.rollback();
        throw new Error('Could not create user');
      }
    });
    return newUser
  };