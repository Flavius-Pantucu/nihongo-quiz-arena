import { cn } from "@/utils/cn";
import ContentSidebar from "./content-sidebar";

export default function Content(props) {
  return (
    <div className={cn("", props.className)}>
      <ContentSidebar
        className={`hidden lg:flex w-40 flex-col pl-4 lg:pl-6 gap-y-2`}
      />
      <div className='flex flex-grow justify-center'>Main content</div>
      <div className='hidden lg:flex w-40'></div>
    </div>
  );
}
