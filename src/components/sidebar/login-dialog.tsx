import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { XIcon } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

export default function LoginDialog({
  loginDialog,
  setLoginDialog,
  setRegisterDialog,
  setForgotDialog,
}: {
  loginDialog: boolean;
  setLoginDialog: Dispatch<SetStateAction<boolean>>;
  setRegisterDialog: Dispatch<SetStateAction<boolean>>;
  setForgotDialog: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={loginDialog}>
      <DialogContent
        className='bg-slate-700 border-none'
        onEscapeKeyDown={() => setLoginDialog(false)}
        onInteractOutside={() => setLoginDialog(false)}>
        <XIcon
          className='absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none cursor-pointer size-5 text-slate-200'
          onClick={() => setLoginDialog(false)}
        />
        <DialogHeader>
          <DialogTitle>
            <div className='flex w-full lg:px-6 h-auto justify-center text-white text-2xl font-bold mt-2'>
              <Image
                src={"/nqa.png"}
                width={35}
                height={35}
                className='cursor-pointer w-auto h-[35px] lg:h-[45px]'
                alt='nqa'></Image>
            </div>
            <div className='flex w-full lg:px-6 h-auto justify-start text-start text-white text-2xl font-bold mt-2'>
              Login
            </div>
            <div className='flex w-full lg:px-6 h-auto justify-start text-start text-slate-400 text-xs mt-1'>
              By continuing, you agree to our User Agreement and acknowledge
              that you understand the Privacy Policy.
            </div>
          </DialogTitle>
          <div className='flex w-full lg:px-6 h-auto flex-col justify-start text-start mt-4 gap-y-1'>
            <div className='text-slate-300 text-sm'>Username or Email</div>
            <div>
              <input
                type='text'
                placeholder='ex. gojo-satoru'
                className='w-full bg-slate-200 rounded-md min-h-8 focus:outline-0 px-3 py-2 text-slate-800 placeholder-slate-500'
              />
            </div>
          </div>
          <div className='flex w-full lg:px-6 h-auto flex-col justify-start text-start mt-4 gap-y-1'>
            <div className='text-slate-300 text-sm'>Password</div>
            <div>
              <input
                type='password'
                placeholder='••••••••'
                className='w-full bg-slate-200 rounded-md min-h-8 focus:outline-0 px-3 py-2 text-slate-800 placeholder-slate-500'
              />
            </div>
          </div>
          <div className='flex w-full lg:px-6 h-auto justify-between text-slate-400 text-xs mt-2'>
            <div>
              Don&apos;t have an account?
              <span
                className='px-1 cursor-pointer underline text-blue-500'
                onClick={() => {
                  setRegisterDialog(true);
                  setLoginDialog(false);
                }}>
                Sign Up
              </span>
            </div>
            <div
              className='px-1 cursor-pointer underline text-blue-500'
              onClick={() => {
                setForgotDialog(true);
                setLoginDialog(false);
              }}>
              Forgot password?
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <div className='flex w-full lg:px-6 h-auto flex-col justify-start mt-2 mb-2'>
            <div>
              <button
                type='submit'
                className='w-full bg-[#0076bd] hover:bg-[#f89b44] cursor-pointer transition-all duration-500 ease-in-out rounded-md min-h-8 py-2 text-slate-200'>
                Login
              </button>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
