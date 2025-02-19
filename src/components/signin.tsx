import { Dispatch, Ref, SetStateAction, useEffect, useRef } from "react";
import CloseIcon from "./icons/close";
import Image from "next/image";

export default function SignIn({
  signUp,
  setSignUp,
  signIn,
  setSignIn,
}: {
  signUp: boolean;
  setSignUp: Dispatch<SetStateAction<boolean>>;
  signIn: boolean;
  setSignIn: Dispatch<SetStateAction<boolean>>;
}) {
  const signInRef = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        signInRef.current &&
        !signInRef.current.contains(e.target as Element)
      ) {
        setSignIn(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [signInRef]);

  return (
    <div
      className={`absolute w-full h-full flex justify-center items-center left-0 top-0 z-10 bg-[#1b263b]/90`}>
      <div
        className='flex flex-col w-full max-w-[475px] h-auto min-h-[300px] p-2 m-4 bg-[#1b263b] border-[1.5px] border-slate-700 rounded-lg'
        ref={signInRef as Ref<HTMLDivElement> | undefined}>
        <div className='flex w-full h-auto justify-end'>
          <CloseIcon
            className='cursor-pointer size-5 hover:scale-110 transition-transform duration-200 ease-in-out text-white bg-slate-600 rounded-full p-[2px]'
            strokeWidth={1.5}
            onClick={() => setSignIn(!signIn)}
          />
        </div>
        <div className='flex w-full px-10 h-auto justify-center text-white text-2xl font-bold mt-2'>
          <Image
            src={"/nqa.png"}
            width={35}
            height={35}
            className='cursor-pointer w-auto h-[35px] lg:h-[45px]'
            alt='nqa'></Image>
        </div>
        <div className='flex w-full px-10 h-auto justify-start text-white text-2xl font-bold mt-2'>
          Login
        </div>
        <div className='flex w-full px-10 h-auto justify-start text-slate-400 text-xs mt-1'>
          By continuing, you agree to our User Agreement and acknowledge that
          you understand the Privacy Policy.
        </div>
        <div className='flex w-full px-10 h-auto flex-col justify-start mt-4 gap-y-1'>
          <div className='text-slate-300 text-sm'>Username or Email</div>
          <div>
            <input
              type='text'
              placeholder='ex. gojo-satoru'
              className='w-full bg-slate-200 rounded-md min-h-8 focus:outline-0 px-3 py-2 text-slate-800 placeholder-slate-500'
            />
          </div>
        </div>
        <div className='flex w-full px-10 h-auto flex-col justify-start mt-4 gap-y-1'>
          <div className='text-slate-300 text-sm'>Password</div>
          <div>
            <input
              type='password'
              placeholder='••••••••'
              className='w-full bg-slate-200 rounded-md min-h-8 focus:outline-0 px-3 py-2 text-slate-800 placeholder-slate-500'
            />
          </div>
        </div>
        <div className='flex w-full px-10 h-auto justify-between text-slate-400 text-xs mt-2'>
          <div>
            Don&apos;t have an account?
            <span
              className='px-1 cursor-pointer underline text-blue-500'
              onClick={() => {
                setSignUp(!signUp);
                setSignIn(!signIn);
              }}>
              Sign Up
            </span>
          </div>
          <div className='px-1 cursor-pointer underline text-blue-500'>
            Forgot password?
          </div>
        </div>
        <div className='flex w-full px-10 h-auto flex-col justify-start mt-6 mb-12'>
          <div>
            <button
              type='submit'
              className='w-full bg-[#0076bd] hover:bg-[#f89b44] cursor-pointer transition-all duration-500 ease-in-out rounded-md min-h-8 py-2 text-slate-200'>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
