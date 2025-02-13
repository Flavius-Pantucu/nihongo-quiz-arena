import Image from "next/image";
import BarsIcon from "./icons/bars";
import PlusIcon from "./icons/plus";
import SearchInput from "./icons/searchInput";
import UserIcon from "./icons/user";
import { Dispatch, SetStateAction } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FlashcardIcon from "./icons/flashcard";
import FolderIcon from "./icons/folder";
import UsersIcon from "./icons/users";

export default function Navbar({
  sidebar,
  setSidebar,
  signUp,
  setSignUp,
}: {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
  signUp: boolean;
  setSignUp: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className={`sticky left-0 top-0 w-[100%] h-28 lg:h-20 flex flex-row flex-wrap justify-between gap-y-2 px-4 lg:px-6 pt-4 lg:pt-2 bg-[#1b263b] transition-opacity duration-200 ease-in-out z-[9]
        ${sidebar ? "opacity-20" : "opacity-100"}`}>
      <div className='w-[50%] lg:w-[33%] h-[50%] lg:h-full flex justify-start items-center gap-4'>
        <BarsIcon
          className='cursor-pointer size-8 hover:scale-110 transition-transform duration-200 ease-in-out text-white'
          strokeWidth={1.5}
          onClick={() => setSidebar(!sidebar)}
        />
        <Image
          src={"/nqa.png"}
          width={35}
          height={35}
          className='cursor-pointer w-auto h-[35px] lg:h-[45px]'
          alt='nqa'></Image>
      </div>
      <SearchInput className='hidden w-0 lg:flex lg:w-[33%] h-full justify-center items-center' />
      <div className='w-[50%] lg:w-[33%] h-[50%] lg:h-full flex justify-end items-center gap-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <PlusIcon
                className='cursor-pointer size-8 hover:scale-110 transition-all duration-500 ease-in-out bg-[#0076bd] hover:bg-[#f89b44] rounded-lg text-white'
                strokeWidth={1}
              />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            className='w-56 text-white bg-[#1b263b] mt-2 text-slate-200 border-slate-500'>
            <DropdownMenuGroup>
              <DropdownMenuItem className='h-10 px-6 cursor-pointer'>
                <FlashcardIcon
                  className='size-5'
                  strokeWidth='.1'
                />
                Flashcard set
              </DropdownMenuItem>
              <DropdownMenuItem className='h-10 px-6 cursor-pointer'>
                <FolderIcon
                  className='size-5'
                  strokeWidth='2'
                />
                Folder
              </DropdownMenuItem>
              <DropdownMenuItem className='h-10 px-6 cursor-pointer'>
                <UsersIcon
                  className='size-5'
                  strokeWidth='2'
                />
                Class
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <UserIcon
          className='cursor-pointer size-8 hover:scale-110 transition-all duration-500 ease-in-out text-white'
          strokeWidth={1}
          onClick={() => setSignUp(!signUp)}
        />
      </div>
      <SearchInput className='flex w-[100%] h-[50%] lg:hidden justify-center items-center' />
    </div>
  );
}
