"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Content from "./content";

export default function Container() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='w-full h-screen'>
      <Navbar
        className='sticky left-0 top-0 w-[100%] h-28 lg:h-20 flex flex-row flex-wrap justify-between gap-y-2 px-4 lg:px-6 pt-4 lg:pt-2'
        setSidebar={setSidebar}
        sidebar={sidebar}
      />

      <Sidebar
        className={`absolute left-0 top-0 w-[45%] lg:w-[20%] h-full flex flex-col justify-start items-start gap-y-2 px-4 lg:px-6 pt-4 lg:pt-2 bg-[#1b263b] transition-all duration-300 ease-in-out 
          ${
            sidebar
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        setSidebar={setSidebar}
        sidebar={sidebar}
      />

      <Content className={`w-full h-auto pt-6`} />
    </div>
  );
}
