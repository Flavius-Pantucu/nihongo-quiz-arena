import { cn } from "@/utils/cn";
import Sidebar from "./sidebar";
export default function Content(props) {
  return (
    <div className={cn("", props.className)}>
      <div className='w-full flex justify-center'>Main content</div>
    </div>
  );
}
