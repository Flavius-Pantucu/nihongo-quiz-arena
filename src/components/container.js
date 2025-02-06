"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Content from "./content";

export default function Container() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  return (
    <div className='w-full h-screen flex flex-column flex-wrap px-4 lg:px-6 py-2 lg:py-4'>
      <Navbar className='w-[100%] h-[10%] lg:h-[5%] flex flex-row flex-wrap justify-between gap-y-2 mb-4' />
      <Sidebar className='w-[20%] lg:w-[20%] h-[95%] flex flex-col justify-start items-start gap-y-2' />
      <Content className='w-[80%] lg:w-[60%] h-[95%] flex flex-row justify-center items-start' />
      <div className='w-0 lg:w-[20%] h-[95%]'></div>
    </div>
  );
}
