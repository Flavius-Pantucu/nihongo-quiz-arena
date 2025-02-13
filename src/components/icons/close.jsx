import { cn } from "@/lib/utils";

export default function CloseIcon(props) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={props.strokeWidth}
      stroke='currentColor'
      className={cn("", props.className)}
      onClick={props.onClick}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M6 18 18 6M6 6l12 12'
      />
    </svg>
  );
}
