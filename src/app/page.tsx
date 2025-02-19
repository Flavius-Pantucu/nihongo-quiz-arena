import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import Container from "@/components/container";

config({ path: ".env" });

export default function Home() {
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle({ client: sql });
  db.select();

  return (
    <div className='w-full h-screen'>
      <Container />
    </div>
  );
}
