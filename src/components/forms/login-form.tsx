"use client";

import Image from "next/image";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { loginSchema } from "@/db/user/user-schema";
import { loginAction } from "@/db/user/user-action";

const formSchema = loginSchema;

type SchemaProps = z.infer<typeof formSchema>;
export default function LoginForm({
  setRegisterDialog,
  setForgotDialog,
  setLoginDialog,
}: {
  setRegisterDialog: Dispatch<SetStateAction<boolean>>;
  setForgotDialog: Dispatch<SetStateAction<boolean>>;
  setLoginDialog: Dispatch<SetStateAction<boolean>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProps>({
    resolver: zodResolver(formSchema),
  });

  async function submitForm(values: z.infer<typeof formSchema>) {
    const response = await loginAction(values);
    console.log(response);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
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
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </div>
        </DialogTitle>
        <div className='flex w-full lg:px-6 h-auto flex-col justify-start text-start mt-4 gap-y-1'>
          <div className='text-slate-300 text-sm'>Username or Email</div>
          <div>
            <input
              {...register("account")}
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
              {...register("password")}
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
          <button
            type='submit'
            className='w-full bg-[#0076bd] hover:bg-[#f89b44] cursor-pointer transition-all duration-500 ease-in-out rounded-md min-h-8 py-2 text-slate-200'>
            Login
          </button>
        </div>
      </DialogFooter>
    </form>
  );
}
