import ContentSidebar from "./content-sidebar";
import FlashcardIcon from "./icons/flashcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Content({ sidebar }: { sidebar: boolean }) {
  return (
    <div
      className={`w-full h-auto min-h-[1000px] flex flex-row pt-6 transition-opacity duration-200 ease-in-out z-[8] 
        ${sidebar ? "opacity-20" : "opacity-100"}`}>
      <ContentSidebar />
      <div className='flex flex-grow justify-center'>
        <div className='flex flex-col items-center w-full px-4 max-w-[1500px]'>
          <div className='flex items-start w-[90%] lg:w-full text-lg font-semibold text-slate-200 mb-2'>
            Recents
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[90%] lg:w-full mb-4 h-auto rounded-lg'>
            <div className='flex flex-row items-center hover:bg-slate-700 translate-all duration-200 ease-in-out rounded-md h-[75px] w-full p-4 gap-2 cursor-pointer'>
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
            <div className='flex flex-row items-center hover:bg-slate-700 translate-all duration-200 ease-in-out rounded-md h-[75px] w-full p-4 gap-2 cursor-pointer'>
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
          <div className='flex items-start w-[90%] lg:w-full text-lg font-semibold text-slate-200 mb-2'>
            Popular flashcards sets
          </div>
          <div className='flex w-[80%] lg:w-full'>
            <Carousel className='w-full'>
              <CarouselContent className='ml-0'>
                <CarouselItem className='flex justify-center items-center px-1 lg:basis-1/2 xl:basis-1/3 h-[200px]'>
                  <div className='w-full h-full'>
                    <Card className='w-full h-full rounded-lg bg-slate-700 cursor-pointer border-slate-600 hover:border-b-4 hover:border-b-[#51cfff]'>
                      <CardHeader>
                        <CardTitle className='font-semibold text-lg text-slate-200'>
                          JLPT N5 Kanji
                        </CardTitle>
                        <CardDescription className='mt-1'>
                          <span className='text-xs bg-slate-600 text-slate-200 px-[8.5px] py-1 rounded-xl font-semibold'>
                            103 terms
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent></CardContent>
                      <CardFooter className='pb-0 pt-6'>
                        <div className='w-full flex flex-row justify-between items-center'>
                          <div className='flex flex-row gap-x-2 items-center'>
                            <span className='text-slate-200 text-md font-semibold'>
                              by flavius98
                            </span>
                            <Avatar className='w-8 h-8'>
                              <AvatarImage src='https://github.com/shadcn.png' />
                              <AvatarFallback>F</AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <span className='text-xs bg-slate-600 text-slate-200 px-[8.5px] py-1 rounded-xl font-semibold'>
                              1337 views
                            </span>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center px-1 lg:basis-1/2 xl:basis-1/3 h-[200px]'>
                  <div className='w-full h-full rounded-lg bg-slate-700'></div>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center px-1 lg:basis-1/2 xl:basis-1/3 h-[200px]'>
                  <div className='w-full h-full rounded-lg bg-slate-700'></div>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center px-1 lg:basis-1/2 xl:basis-1/3 h-[200px]'>
                  <div className='w-full h-full rounded-lg bg-slate-700'></div>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center px-1 lg:basis-1/2 xl:basis-1/3 h-[200px]'>
                  <div className='w-full h-full rounded-lg bg-slate-700'></div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className='-left-10 border-0 cursor-pointer bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-slate-200' />
              <CarouselNext className='-right-10 border-0 cursor-pointer bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-slate-200' />
            </Carousel>
          </div>
        </div>
      </div>
      <div className='hidden lg:flex w-40'></div>
    </div>
  );
}
