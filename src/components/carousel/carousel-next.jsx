export default function CarouselNext(props) {
  return (
    <button
      className='inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 dark:focus-visible:ring-neutral-300 border-neutral-200 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 absolute h-6 w-6 lg:h-8 lg:w-8 rounded-full top-1/2 -translate-y-1/2 -left-7 lg:-left-10 border-0 cursor-pointer bg-slate-600 hover:bg-slate-500 text-slate-300 hover:text-slate-200'
      disabled={false}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        className='lucide lucide-arrow-left h-4 w-4'>
        <path d='m12 19-7-7 7-7'></path>
        <path d='M19 12H5'></path>
      </svg>
      <span className='sr-only'>Previous slide</span>
    </button>
  );
}
