import ContentSidebar from "./content-sidebar";
import FlashcardIcon from "./icons/flashcard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import UsersIcon from "./icons/users";

export default function Content({ sidebar }: { sidebar: boolean }) {
  return (
    <div
      className={`w-full h-auto min-h-[1000px] pt-6 transition-opacity duration-200 ease-in-out z-[8] 
        ${sidebar ? "opacity-20" : "opacity-100"}`}>
      <ContentSidebar />
      <div className='flex flex-grow justify-center'>
        <div className='flex flex-col items-center w-full lg:w-[80%] px-4 max-w-[1500px]'>
          <div className='flex items-start w-[90%] lg:w-full text-lg font-semibold text-slate-200 mb-2'>
            Recents
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[90%] lg:w-full h-auto rounded-lg'>
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
          <div className='flex items-start w-[90%] lg:w-full text-lg font-semibold text-slate-200 mt-8 mb-2'>
            Popular flashcards sets
          </div>
          <div className='flex w-[80%] lg:w-full'>
            <Carousel className='w-full'>
              <CarouselContent className='ml-0'>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        JLPT N5 Kanji
                      </CardTitle>
                      <CardDescription>
                        <span className='text-xs bg-slate-600 text-slate-200 px-[8.5px] py-1 rounded-xl font-semibold'>
                          103 terms
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent> </CardContent>
                    <CardFooter className='flex flex-row pt-6'>
                      <span className='text-slate-200 text-md font-semibold'>
                        by flavius98
                      </span>
                      <Avatar className='w-8 h-8 ml-2'>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>F</AvatarFallback>
                      </Avatar>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        JLPT N4 Kanji
                      </CardTitle>
                      <CardDescription>
                        <span className='text-xs bg-slate-600 text-slate-200 px-[8.5px] py-1 rounded-xl font-semibold'>
                          256 terms
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent> </CardContent>
                    <CardFooter className='flex flex-row pt-6'>
                      <span className='text-slate-200 text-md font-semibold'>
                        by flavius98
                      </span>
                      <Avatar className='w-8 h-8 ml-2'>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>F</AvatarFallback>
                      </Avatar>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        JLPT N3 Kanji
                      </CardTitle>
                      <CardDescription>
                        <span className='text-xs bg-slate-600 text-slate-200 px-[8.5px] py-1 rounded-xl font-semibold'>
                          479 terms
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent> </CardContent>
                    <CardFooter className='flex flex-row pt-6'>
                      <span className='text-slate-200 text-md font-semibold'>
                        by flavius98
                      </span>
                      <Avatar className='w-8 h-8 ml-2'>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>F</AvatarFallback>
                      </Avatar>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        JLPT N2 Kanji
                      </CardTitle>
                      <CardDescription>
                        <span className='text-xs bg-slate-600 text-slate-200 px-[8.5px] py-1 rounded-xl font-semibold'>
                          736 terms
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent> </CardContent>
                    <CardFooter className='flex flex-row pt-6'>
                      <span className='text-slate-200 text-md font-semibold'>
                        by flavius98
                      </span>
                      <Avatar className='w-8 h-8 ml-2'>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>F</AvatarFallback>
                      </Avatar>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        JLPT N1 Kanji
                      </CardTitle>
                      <CardDescription>
                        <span className='text-xs bg-slate-600 text-slate-200 px-[8.5px] py-1 rounded-xl font-semibold'>
                          1028 terms
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent> </CardContent>
                    <CardFooter className='flex flex-row pt-6'>
                      <span className='text-slate-200 text-md font-semibold'>
                        by flavius98
                      </span>
                      <Avatar className='w-8 h-8 ml-2'>
                        <AvatarImage src='https://github.com/shadcn.png' />
                        <AvatarFallback>F</AvatarFallback>
                      </Avatar>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className='-left-10 border-0 cursor-pointer bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-slate-200' />
              <CarouselNext className='-right-10 border-0 cursor-pointer bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-slate-200' />
            </Carousel>
          </div>
          <div className='flex items-start w-[90%] lg:w-full text-lg font-semibold text-slate-200 mt-8 mb-2'>
            Top creators
          </div>
          <div className='flex w-[80%] lg:w-full'>
            <Carousel className='w-full'>
              <CarouselContent className='ml-0'>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        <Avatar className='w-16 h-16'>
                          <AvatarImage src='https://github.com/shadcn.png' />
                          <AvatarFallback>F</AvatarFallback>
                        </Avatar>
                      </CardTitle>
                      <CardDescription className='flex flex-row items-center mt-2 text-slate-100 text-xl font-bold '>
                        flavius98
                        <span className='text-xs text-slate-800 ml-2 bg-slate-200 px-[8.5px] py-1 rounded-xl font-bold'>
                          Teacher
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex flex-row gap-x-2'>
                      <span className='flex flex-row items-center text-xs text-slate-200 gap-x-1 font-bold bg-slate-600 rounded-full px-2 py-1'>
                        <FlashcardIcon
                          className='size-4'
                          strokeWidth={0.1}
                        />{" "}
                        5 flashcard sets
                      </span>
                      <span className='flex flex-row items-center text-xs text-slate-200 gap-x-1 font-bold bg-slate-600 rounded-full px-2 py-1'>
                        <UsersIcon
                          className='size-4'
                          strokeWidth={2}
                        />{" "}
                        1 class
                      </span>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        <Avatar className='w-16 h-16'>
                          <AvatarImage src='https://i.pinimg.com/474x/52/cc/00/52cc0079b27fc6f940680142d60b60a0.jpg' />
                          <AvatarFallback>F</AvatarFallback>
                        </Avatar>
                      </CardTitle>
                      <CardDescription className='flex flex-row items-center mt-2 text-slate-100 text-xl font-bold '>
                        tanjirokamado
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex flex-row gap-x-2'>
                      <span className='flex flex-row items-center text-xs text-slate-200 gap-x-1 font-bold bg-slate-600 rounded-full px-2 py-1'>
                        <FlashcardIcon
                          className='size-4'
                          strokeWidth={0.1}
                        />{" "}
                        1 flashcard sets
                      </span>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        <Avatar className='w-16 h-16'>
                          <AvatarImage src='https://avatarfiles.alphacoders.com/368/368811.png' />
                          <AvatarFallback>F</AvatarFallback>
                        </Avatar>
                      </CardTitle>
                      <CardDescription className='flex flex-row items-center mt-2 text-slate-100 text-xl font-bold '>
                        violet
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex flex-row gap-x-2'>
                      <span className='flex flex-row items-center text-xs text-slate-200 gap-x-1 font-bold bg-slate-600 rounded-full px-2 py-1'>
                        <FlashcardIcon
                          className='size-4'
                          strokeWidth={0.1}
                        />{" "}
                        1 flashcard sets
                      </span>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        <Avatar className='w-16 h-16'>
                          <AvatarImage src='https://avatarfiles.alphacoders.com/320/320973.jpg' />
                          <AvatarFallback>F</AvatarFallback>
                        </Avatar>
                      </CardTitle>
                      <CardDescription className='flex flex-row items-center mt-2 text-slate-100 text-xl font-bold '>
                        gojoxsatoru
                        <span className='text-xs text-slate-800 ml-2 bg-slate-200 px-[8.5px] py-1 rounded-xl font-bold'>
                          Teacher
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex flex-row gap-x-2'>
                      <span className='flex flex-row items-center text-xs text-slate-200 gap-x-1 font-bold bg-slate-600 rounded-full px-2 py-1'>
                        <FlashcardIcon
                          className='size-4'
                          strokeWidth={0.1}
                        />{" "}
                        13 flashcard sets
                      </span>
                      <span className='flex flex-row items-center text-xs text-slate-200 gap-x-1 font-bold bg-slate-600 rounded-full px-2 py-1'>
                        <UsersIcon
                          className='size-4'
                          strokeWidth={2}
                        />{" "}
                        5 class
                      </span>
                    </CardFooter>
                  </Card>
                </CarouselItem>
                <CarouselItem className='flex justify-center items-center lg:basis-1/2 xl:basis-1/3 px-1 h-[200px]'>
                  <Card className='w-full h-full rounded-lg bg-slate-700 border-slate-600 cursor-pointer hover:border-b-3 hover:border-b-[#51cfff] transition-all duration-100 ease-in-out'>
                    <CardHeader>
                      <CardTitle className='font-semibold text-lg text-slate-200'>
                        <Avatar className='w-16 h-16'>
                          <AvatarImage src='https://avatarfiles.alphacoders.com/224/224251.png' />
                          <AvatarFallback>F</AvatarFallback>
                        </Avatar>
                      </CardTitle>
                      <CardDescription className='flex flex-row items-center mt-2 text-slate-100 text-xl font-bold '>
                        mikunakano
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className='flex flex-row gap-x-2'>
                      <span className='flex flex-row items-center text-xs text-slate-200 gap-x-1 font-bold bg-slate-600 rounded-full px-2 py-1'>
                        <FlashcardIcon
                          className='size-4'
                          strokeWidth={0.1}
                        />{" "}
                        2 flashcard sets
                      </span>
                      <span className='flex flex-row items-center text-xs text-slate-200 gap-x-1 font-bold bg-slate-600 rounded-full px-2 py-1'>
                        <UsersIcon
                          className='size-4'
                          strokeWidth={2}
                        />{" "}
                        1 class
                      </span>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className='-left-10 border-0 cursor-pointer bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-slate-200' />
              <CarouselNext className='-right-10 border-0 cursor-pointer bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-slate-200' />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
