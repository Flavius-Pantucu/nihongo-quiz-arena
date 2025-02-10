import Image from "next/image";
import BarsIcon from "./icons/bars";
import PlusIcon from "./icons/plus";
import SearchInput from "./icons/searchInput";
import UserIcon from "./icons/user";
import { cn } from "@/utils/cn";

export default function Navbar(props) {
  return (
    <div className={cn("", props.className)}>
      <div className='w-[50%] lg:w-[33%] h-[50%] lg:h-full flex justify-start items-center gap-4'>
        <BarsIcon
          className='cursor-pointer size-8 hover:scale-110 transition-transform duration-200 ease-in-out'
          strokeWidth={1.5}
          onClick={() => props.setSidebar(!props.sidebar)}
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
        <PlusIcon
          className='cursor-pointer size-8 hover:scale-110 transition-all duration-500 ease-in-out bg-[#0076bd] hover:bg-[#f89b44] rounded-lg'
          strokeWidth={1}
        />
        <UserIcon
          className='cursor-pointer size-8 hover:scale-110 transition-transform duration-200 ease-in-out'
          strokeWidth={1.5}
        />
      </div>
      <SearchInput className='flex w-[100%] h-[50%] lg:hidden justify-center items-center' />
    </div>
  );
}
