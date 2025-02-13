import FlashcardIcon from "./icons/flashcard";
import FolderIcon from "./icons/folder";
import HomeIcon from "./icons/home";
import LearnIcon from "./icons/learn";
import QuizIcon from "./icons/quiz";

export default function ContentSidebar() {
  return (
    <div className='hidden lg:flex w-40 flex-col pl-4 lg:pl-6 gap-y-2'>
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
  );
}
