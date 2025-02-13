"use client";

import { useState } from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import Content from "./content";
import SignUp from "./signup";
import SignIn from "./signin";

export default function Container() {
  const [sidebar, setSidebar] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='w-full h-auto min-h-screen'>
      <Sidebar
        setSidebar={setSidebar}
        sidebar={sidebar}
      />
      <Navbar
        setSidebar={setSidebar}
        sidebar={sidebar}
        signUp={signUp}
        setSignUp={setSignUp}
      />
      <Content sidebar={sidebar} />
      {signUp && (
        <SignUp
          signUp={signUp}
          setSignUp={setSignUp}
          signIn={signIn}
          setSignIn={setSignIn}
        />
      )}
      {signIn && (
        <SignIn
          signUp={signUp}
          setSignUp={setSignUp}
          signIn={signIn}
          setSignIn={setSignIn}
        />
      )}
    </div>
  );
}
