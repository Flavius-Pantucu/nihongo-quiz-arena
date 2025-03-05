"use client";

import Image from "next/image";
import { DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction } from "react";
import { registerAction } from "@/db/user/user-action";
import { registerSchema } from "@/db/user/user-schema";

const formSchema = registerSchema;

type SchemaProps = z.infer<typeof formSchema>;
export default function RegisterForm({
  setRegisterDialog,
  setLoginDialog,
}: {
  setRegisterDialog: Dispatch<SetStateAction<boolean>>;
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
    const response = await registerAction(values);
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
          <div className='flex w-full lg:px-6 h-auto justify-start text-white text-2xl font-bold mt-2'>
            Register
          </div>
          <div className='flex w-full lg:px-6 h-auto justify-start text-slate-400 text-xs mt-1'>
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </div>
        </DialogTitle>
        <div className='flex w-full lg:px-6 h-auto flex-col justify-start mt-3 gap-y-1'>
          <label
            className='text-slate-300 text-sm'
            htmlFor=''>
            Username
          </label>
          <input
            {...register("username")}
            type='text'
            placeholder='ex. gojo-satoru'
            className='w-full bg-slate-200 rounded-md min-h-8 focus:outline-0 px-3 py-2 text-slate-800 placeholder-slate-500'
          />
          {errors?.username && (
            <span className='text-red-400 text-sm'>
              {errors.username.message}
            </span>
          )}
        </div>
        <div className='flex w-full lg:px-6 h-auto flex-col justify-start mt-3 gap-y-1'>
          <label
            className='text-slate-300 text-sm'
            htmlFor=''>
            Email
          </label>
          <input
            {...register("email")}
            type='text'
            placeholder='ex. gojosatoru@jjk.jp'
            className='w-full bg-slate-200 rounded-md min-h-8 focus:outline-0 px-3 py-2 text-slate-800 placeholder-slate-500'
          />
          {errors?.email && (
            <span className='text-red-400 text-sm'>{errors.email.message}</span>
          )}
        </div>
        <div className='flex w-full lg:px-6 h-auto flex-col justify-start mt-3 gap-y-1'>
          <label
            className='text-slate-300 text-sm'
            htmlFor=''>
            Password
          </label>
          <input
            {...register("password")}
            type='password'
            placeholder='••••••••'
            className='w-full bg-slate-200 rounded-md min-h-8 focus:outline-0 px-3 py-2 text-slate-800 placeholder-slate-500'
          />
          {errors?.password && (
            <span className='text-red-400 text-sm'>
              {errors.password.message}
            </span>
          )}
        </div>
        <div className='flex w-full lg:px-6 h-auto flex-col justify-start mt-3 gap-y-1'>
          <label
            className='text-slate-300 text-sm'
            htmlFor=''>
            Confirm Password
          </label>
          <input
            {...register("confirm")}
            type='password'
            placeholder='••••••••'
            className='w-full bg-slate-200 rounded-md min-h-8 focus:outline-0 px-3 py-2 text-slate-800 placeholder-slate-500'
          />
          {errors?.confirm && (
            <span className='text-red-400 text-sm'>
              {errors.confirm.message}
            </span>
          )}
        </div>
        <div className='flex w-full lg:px-6 h-auto justify-start text-slate-400 text-xs mt-2'>
          Already have an account?
          <span
            className='px-1 cursor-pointer underline text-blue-500'
            onClick={() => {
              setRegisterDialog(false);
              setLoginDialog(true);
            }}>
            Sign In
          </span>
        </div>
      </DialogHeader>
      <DialogFooter>
        <div className='flex w-full lg:px-6 h-auto flex-col justify-start mt-6 mb-2'>
          <button
            type='submit'
            className='w-full bg-[#0076bd] hover:bg-[#f89b44] cursor-pointer transition-all duration-500 ease-in-out rounded-md min-h-8 py-2 text-slate-100'>
            Register
          </button>
        </div>
      </DialogFooter>
    </form>
  );
}
