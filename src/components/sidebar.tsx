import Image from "next/image";
import BarsIcon from "./icons/bars";
import FlashcardIcon from "./icons/flashcard";
import FolderIcon from "./icons/folder";
import HomeIcon from "./icons/home";
import LearnIcon from "./icons/learn";
import QuizIcon from "./icons/quiz";
import {
  Dispatch,
  Ref,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
} from "react";

export default function Sidebar({
  sidebar,
  setSidebar,
}: {
  sidebar: boolean;
  setSidebar: Dispatch<SetStateAction<boolean>>;
}) {
  const sidebarRef = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Element) &&
        sidebarRef.current.className.includes("opacity-100")
      ) {
        setSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div
      className={`absolute left-0 top-0 w-[30%] lg:w-[10%] min-w-[250px] h-full flex flex-col justify-start items-start gap-y-2 px-4 lg:px-6 pt-4 lg:pt-2 bg-[#1b263b] border-r-[2.5px] border-slate-700 transition-all duration-300 ease-in-out z-10 
        ${
          sidebar ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      ref={sidebarRef as Ref<HTMLDivElement> | undefined}>
      <div className='flex justify-start items-center gap-4 h-14 lg:h-[72px]'>
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
      <div className='flex flex-col w-full gap-y-2 pt-4'>
        <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300'>
          <div className='size-6'>
            <HomeIcon
              className='w-full h-full'
              strokeWidth='2'
            />
          </div>
          <span>Dashboard</span>
        </div>
        <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300'>
          <FolderIcon
            className='size-6'
            strokeWidth='2'
          />
          <span>Browse</span>
        </div>
        <div className='border-[1.5px] w-full max-w-[200px] rounded-lg border-slate-700'></div>
        <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300'>
          <LearnIcon
            className='size-6'
            strokeWidth='2'
          />
          <span>Learn</span>
        </div>
        <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300'>
          <QuizIcon
            className='size-6'
            strokeWidth='2'
          />
          <span>Quiz</span>
        </div>
        <div className='flex flex-row justify-start items-start w-[100%] max-w-[200px] cursor-pointer gap-x-6 rounded-lg p-2 text-slate-300 hover:bg-slate-600 hover:text-[#f89b44] transition-colors ease-in-out duration-300'>
          <FlashcardIcon
            className='size-6'
            strokeWidth='2'
          />
          <span>Flashcards</span>
        </div>
      </div>
    </div>
  );
}
