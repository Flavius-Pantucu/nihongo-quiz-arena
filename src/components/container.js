"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Content from "./content";

export default function Container() {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className='w-full h-screen'>
      {/* <Navbar
        className='absolute left-0 top-0 w-[100%] h-[8%] lg:h-[4%] flex flex-row flex-wrap justify-between gap-y-2 px-4 lg:px-6 my-2 lg:my-4'
        setSidebar={setSidebar}
        sidebar={sidebar}
      /> */}
      <Sidebar
        className={`absolute left-0 top-0 lg-[20%] h-full flex flex-col justify-start items-start gap-y-2 px-4 lg:px-6 my-2 lg:my-4`}
        setSidebar={setSidebar}
        sidebar={sidebar}
      />
      {/* <Content
        className={`w-[100%] lg:w-[60%] h-[95%] flex flex-row justify-center items-start`}
      /> */}
    </div>
  );
}
