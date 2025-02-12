"use client";

import { RefObject, useEffect, useRef, useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Content from "./content";
import SignUp from "./signup";

export default function Container() {
  const [sidebar, setSidebar] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const sidebarRef = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Element) &&
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
        setSidebar={setSidebar}
        sidebar={sidebar}
        sidebarRef={sidebarRef as RefObject<HTMLDivElement>}
      />
      <Navbar
        setSidebar={setSidebar}
        sidebar={sidebar}
        signUp={signUp}
        setSignUp={setSignUp}
      />
      <Content sidebar={sidebar} />
      {signUp && <SignUp />}
    </div>
  );
}
