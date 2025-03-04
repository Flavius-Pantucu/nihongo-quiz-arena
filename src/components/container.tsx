import { createUser, selectUsers } from "@/db/users/users-action";
import Content from "./content";
export default async function Container() {
  return (
    <div className='w-full h-auto min-h-screen mt-4'>
      <Content />
    </div>
  );
}
