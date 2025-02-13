import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import Container from "@/components/container";

config({ path: ".env" });

export default function Home() {
  const sql = neon(process.env.DATABASE_URL!);
  const db = drizzle({ client: sql });

  return (
    <div className='w-full h-screen bg-[#1b263b]'>
      <Container />
    </div>
  );
}
