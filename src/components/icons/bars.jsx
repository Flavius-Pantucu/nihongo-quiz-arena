import { cn } from "@/lib/utils";

export default function BarsIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={props.strokeWidth}
      stroke='currentColor'
      onClick={props.onClick}
      className={cn("", props.className)}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  );
}
