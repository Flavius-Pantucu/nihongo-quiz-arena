import { Dispatch, SetStateAction } from "react";
import ContentSidebar from "./content-sidebar";

export default function Content({ sidebar }: { sidebar: boolean }) {
  return (
    <div
      className={`w-full h-auto flex flex-row pt-6 transition-opacity duration-200 ease-in-out z-[8] 
        ${sidebar ? "opacity-20" : "opacity-100"}`}>
      <ContentSidebar />
      <div className='flex flex-grow justify-center text-white'>
        Main content
      </div>
      <div className='hidden lg:flex w-40'></div>
    </div>
  );
}
