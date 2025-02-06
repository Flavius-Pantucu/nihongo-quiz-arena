import BarsIcon from "./icons/bars";
import PlusIcon from "./icons/plus";
import SearchInput from "./icons/searchInput";
import UserIcon from "./icons/user";
import { cn } from "@/utils/cn";

export default function Navbar(props) {
  return (
    <div className={cn("", props.className)}>
      <div className='w-[50%] lg:w-[33%] h-[50%] lg:h-full flex justify-start items-center'>
        <BarsIcon
          className='cursor-pointer size-6 lg:size-8 hover:scale-110 transition-transform duration-200 ease-in-out'
          strokeWidth={1.5}
        />
      </div>
      <SearchInput className='hidden w-0 lg:flex lg:w-[33%] h-full justify-center items-center' />
      <div className='w-[50%] lg:w-[33%] h-[50%] lg:h-full flex justify-end items-center gap-4'>
        <PlusIcon
          className='cursor-pointer size-6 lg:size-8 hover:scale-110 transition-all duration-200 ease-in-out bg-[#3B6790] hover:bg-[#155E95] rounded-lg'
          strokeWidth={1}
        />
        <UserIcon
          className='cursor-pointer size-6 lg:size-8 hover:scale-110 transition-transform duration-200 ease-in-out'
          strokeWidth={1.5}
        />
      </div>
      <SearchInput className='flex w-[100%] h-[50%] lg:hidden justify-center items-center' />
    </div>
  );
}
