"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Content from "./content";

export default function Container() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        sidebarRef.current.className.includes("opacity-100")
      ) {
        setSidebar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <div className='w-full h-auto min-h-screen'>
      <Sidebar
        className={`absolute left-0 top-0 w-[30%] lg:w-[10%] min-w-[250px] h-full flex flex-col justify-start items-start gap-y-2 px-4 lg:px-6 pt-4 lg:pt-2 bg-[#1b263b] border-r-[2.5px] border-slate-700 transition-all duration-300 ease-in-out z-10 
          ${
            sidebar
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        setSidebar={setSidebar}
        sidebar={sidebar}
        sidebarRef={sidebarRef}
      />
      <Navbar
        className={`sticky left-0 top-0 w-[100%] h-28 lg:h-20 flex flex-row flex-wrap justify-between gap-y-2 px-4 lg:px-6 pt-4 lg:pt-2 bg-[#1b263b] transition-opacity duration-200 ease-in-out z-[9]
        ${sidebar ? "opacity-20" : "opacity-100"}`}
        setSidebar={setSidebar}
        sidebar={sidebar}
      />
      <Content
        className={`w-full h-auto flex flex-row pt-6 transition-opacity duration-200 ease-in-out z-[8]
        ${sidebar ? "opacity-20" : "opacity-100"}`}
        setSidebar={setSidebar}
        sidebar={sidebar}
      />
    </div>
  );
}
