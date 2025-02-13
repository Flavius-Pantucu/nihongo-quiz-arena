import ContentSidebar from "./content-sidebar";
import FlashcardIcon from "./icons/flashcard";

export default function Content({ sidebar }: { sidebar: boolean }) {
  return (
    <div
      className={`w-full h-auto min-h-[1000px] flex flex-row pt-6 transition-opacity duration-200 ease-in-out z-[8] 
        ${sidebar ? "opacity-20" : "opacity-100"}`}>
      <ContentSidebar />
      <div className='flex flex-grow justify-center'>
        <div className='flex flex-col w-full px-4 max-w-[1500px]'>
          <div className='flex items-start w-full text-lg font-semibold text-slate-200 mb-2'>
            Recents
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full min-h-[200px] h-auto rounded-lg'>
            <div className='flex flex-row items-center hover:bg-slate-600 translate-all duration-300 ease-in-out rounded-md h-[75px] w-full p-4 gap-2'>
              <div className='flex justify-center items-center h-[44px] aspect-square bg-slate-600 rounded-lg'>
                <FlashcardIcon
                  className='size-6 text-[#51cfff]'
                  strokeWidth='0.1'
                />
              </div>
              <div className='flex flex-col flex-grow'>
                <div className='text-md text-slate-100 font-semibold'>
                  JLPT N5 Kanji
                </div>
                <div className='text-sm text-slate-200'>
                  Flashcard set • 103 terms • by flavius98
                </div>
              </div>
            </div>
            <div className='flex flex-row items-center hover:bg-slate-600 translate-all duration-300 ease-in-out rounded-md h-[75px] w-full p-4 gap-2'>
              <div className='flex justify-center items-center h-[44px] aspect-square bg-slate-600 rounded-lg'>
                <FlashcardIcon
                  className='size-6 text-[#51cfff]'
                  strokeWidth='0.1'
                />
              </div>
              <div className='flex flex-col flex-grow'>
                <div className='text-md text-slate-100 font-semibold'>
                  JLPT N4 Kanji
                </div>
                <div className='text-sm text-slate-200'>
                  Flashcard set • 246 terms • by flavius98
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex w-40'></div>
    </div>
  );
}
