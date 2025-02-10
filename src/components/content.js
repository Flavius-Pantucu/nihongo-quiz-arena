import { cn } from "@/utils/cn";
import HomeIcon from "./icons/home";
import FolderIcon from "./icons/folder";
import QuizIcon from "./icons/quiz";
import FlashcardIcon from "./icons/flashcard";
import LearnIcon from "./icons/learn";

export default function Content(props) {
  return (
    <div className={cn("", props.className)}>
      <div className={`w-40 flex flex-col pl-4 lg:pl-6 gap-y-2`}>
        <div className='group/item w-full h-full flex flex-row gap-x-2'>
          <div className='w-auto h-auto cursor-pointer rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300 '>
            <HomeIcon
              className='size-6'
              strokeWidth='2'
            />
          </div>
          <div className='flex items-center group/description invisible group-hover/item:visible px-2 my-1 bg-slate-500 rounded-md text-white text-xs'>
            Dashboard
          </div>
        </div>
        <div className='group/item w-full h-full flex flex-row gap-x-2'>
          <div className='w-auto h-auto cursor-pointer rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300 '>
            <FolderIcon
              className='size-6'
              strokeWidth='2'
            />
          </div>
          <div className='flex items-center group/description invisible group-hover/item:visible px-2 my-1 bg-slate-500 rounded-md text-white text-xs'>
            Browse
          </div>
        </div>
        <div className='border-[1.5px] w-10 rounded-lg border-slate-700'></div>
        <div className='group/item w-full h-full flex flex-row gap-x-2'>
          <div className='w-auto h-auto cursor-pointer rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300 '>
            <LearnIcon
              className='size-6'
              strokeWidth='2'
            />
          </div>
          <div className='flex items-center group/description invisible group-hover/item:visible px-2 my-1 bg-slate-500 rounded-md text-white text-xs'>
            Learn
          </div>
        </div>
        <div className='group/item w-full h-full flex flex-row gap-x-2'>
          <div className='w-auto h-auto cursor-pointer rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300 '>
            <QuizIcon
              className='size-6'
              strokeWidth='2'
            />
          </div>
          <div className='flex items-center group/description invisible group-hover/item:visible px-2 my-1 bg-slate-500 rounded-md text-white text-xs'>
            Quiz
          </div>
        </div>
        <div className='group/item w-full h-full flex flex-row gap-x-2'>
          <div className='w-auto h-auto cursor-pointer rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300 '>
            <FlashcardIcon
              className='size-6'
              strokeWidth='2'
            />
          </div>
          <div className='flex items-center group/description invisible group-hover/item:visible px-2 my-1 bg-slate-500 rounded-md text-white text-xs'>
            Flashcards
          </div>
        </div>
      </div>
      <div className='flex flex-grow justify-center'>Main content</div>
      <div className='w-32'></div>
    </div>
  );
}
