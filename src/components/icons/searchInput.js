import { cn } from "@/utils/cn";
import SearchIcon from "./search";
export default function SearchInput(props) {
  return (
    <div className={cn("", props.className)}>
      <div className='relative w-[100%] flex justify-center'>
        <div className='absolute inset-y-0 start-0 flex items-center pl-4 pointer-events-none'>
          <SearchIcon
            className='size-5 text-gray-400'
            strokeWidth={3}
          />
        </div>
        <input
          className='block w-full p-2 ps-12 text-md ring-1 focus:ring-[1.5px] rounded-lg bg-gray-700 ring-gray-600 placeholder-gray-400 text-white outline-none font-semibold'
          placeholder='Search'
        />
      </div>
    </div>
  );
}
