"use client";

import { useState } from "react";
import Content from "./content";
import SignUp from "./signup";
import SignIn from "./signin";

export default function Container() {
  const [signUp] = useState(false);
  const [signIn] = useState(false);

  return (
    <div className='w-full h-auto min-h-screen'>
      <Content />
      {signUp && <SignUp />}
      {signIn && <SignIn />}
    </div>
  );
}
