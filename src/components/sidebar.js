import FlashcardIcon from "./icons/flashcard";
import FolderIcon from "./icons/folder";
import HomeIcon from "./icons/home";
import LearnIcon from "./icons/learn";
import QuizIcon from "./icons/quiz";
import { cn } from "@/utils/cn";

export default function Sidebar(props) {
  return (
    <div className={cn("", props.className)}>
      <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#A0C878] transition-colors ease-in-out duration-200'>
        <div className='size-4 lg:size-6'>
          <HomeIcon
            className='w-full h-full'
            strokeWidth='2'
          />
        </div>
        <span>Dashboard</span>
      </div>
      <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#A0C878] transition-colors ease-in-out duration-200'>
        <FolderIcon
          className='size-4 lg:size-6'
          strokeWidth='2'
        />
        <span>Browse</span>
      </div>
      <div className='border-[1.5px] w-full max-w-[200px] rounded-lg border-slate-700'></div>
      <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#A0C878] transition-colors ease-in-out duration-200'>
        <LearnIcon
          className='size-4 lg:size-6'
          strokeWidth='2'
        />
        <span>Learn</span>
      </div>
      <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#A0C878] transition-colors ease-in-out duration-200'>
        <QuizIcon
          className='size-4 lg:size-6'
          strokeWidth='2'
        />
        <span>Quiz</span>
      </div>
      <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#A0C878] transition-colors ease-in-out duration-200'>
        <FlashcardIcon
          className='size-4 lg:size-6'
          strokeWidth='2'
        />
        <span>Flashcards</span>
      </div>
    </div>
  );
}
