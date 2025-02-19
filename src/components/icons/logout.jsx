import { cn } from "@/lib/utils";

export default function LogoutIcon(props) {
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
        d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
      />
    </svg>
  );
}
