"use client";

import { useState } from "react";
import Content from "./content";
import SignUp from "./signup";
import SignIn from "./signin";

export default function Container() {
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <div className='w-full h-auto min-h-screen'>
      <Content />
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
