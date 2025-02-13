import { cn } from "@/lib/utils";

export default function FlashcardIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='currentColor'
      viewBox='0 0 24 24'
      strokeWidth={props.strokeWidth}
      stroke='currentColor'
      className={cn("", props.className)}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='m20 5.175.825.4c.517.217.867.587 1.05 1.112A2.036 2.036 0 0 1 21.8 8.25l-1.8 3.9V5.175ZM16 3c.55 0 1.021.2 1.413.6.391.4.587.875.587 1.425V11l-2.675-7.35a3.382 3.382 0 0 1-.125-.337.906.906 0 0 0-.175-.313H16Zm-5.15.125a2.007 2.007 0 0 1 1.55.075c.517.233.867.608 1.05 1.125l4.425 12.225c.183.517.159 1.03-.075 1.537a1.892 1.892 0 0 1-1.125 1.038l-7.525 2.75a1.974 1.974 0 0 1-1.537-.075 1.892 1.892 0 0 1-1.038-1.125L2.125 8.45A1.974 1.974 0 0 1 2.2 6.913a1.892 1.892 0 0 1 1.125-1.038l7.525-2.75ZM11.55 5 4 7.75 8.475 20 16 17.25 11.55 5Z'
      />
    </svg>
  );
}
