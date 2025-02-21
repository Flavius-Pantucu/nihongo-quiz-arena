import { Dispatch, Ref, SetStateAction, useEffect, useRef } from "react";
import CloseIcon from "./icons/close";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import bcrypt from "bcryptjs";
import { UserTable } from "@/drizzle/schema/user";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
);

const formSchema = z
  .object({
    username: z
      .string()
      .min(4, {
        message: "Username must be at least 4 characters.",
      })
      .max(32, {
        message: "Username must be at most 32 characters.",
      }),
    email: z
      .string()
      .min(1, {
        message: "Email is required.",
      })
      .email({
        message: "Invalid email address",
      }),
    password: z.string().trim().regex(passwordValidation, {
      message:
        "Password must be atleast 8 characters long with atleast one uppercase letter, one lowercase letter and one number",
    }),
    confirm: z.string().trim(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

type SchemaProps = z.infer<typeof formSchema>;

export default async function SignUp({
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SchemaProps>({
    resolver: zodResolver(formSchema),
  });

  async function submitForm(values: z.infer<typeof formSchema>) {
    const user: typeof UserTable.$inferInsert = {
      username: values.username,
      email: values.email,
      password: bcrypt.hashSync(values.password, 10),
    };

    console.log("New user created!");
  }

  const signUpRef = useRef<HTMLDivElement | undefined>(undefined);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        signUpRef.current &&
        !signUpRef.current.contains(e.target as Element)
      ) {
        setSignUp(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [signUpRef]);

  return (
    <div
      className={`absolute w-full h-full flex justify-center items-center left-0 top-0 z-10 bg-[#1b263b]/90`}>
      <div
        className='flex flex-col w-full max-w-[475px] h-auto min-h-[300px] p-2 m-4 bg-[#1b263b] border-[1.5px] border-slate-700 rounded-lg'
        ref={signUpRef as Ref<HTMLDivElement> | undefined}>
        <div className='flex w-full h-auto justify-end'>
          <CloseIcon
            className='cursor-pointer size-5 hover:scale-110 transition-transform duration-200 ease-in-out text-white bg-slate-600 rounded-full p-[2px]'
            strokeWidth={1.5}
            onClick={() => setSignUp(!signUp)}
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
          Register
        </div>
        <div className='flex w-full px-10 h-auto justify-start text-slate-400 text-xs mt-1'>
          By continuing, you agree to our User Agreement and acknowledge that
          you understand the Privacy Policy.
        </div>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className='flex w-full px-10 h-auto flex-col justify-start mt-3 gap-y-1'>
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
          <div className='flex w-full px-10 h-auto flex-col justify-start mt-3 gap-y-1'>
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
              <span className='text-red-400 text-sm'>
                {errors.email.message}
              </span>
            )}
          </div>
          <div className='flex w-full px-10 h-auto flex-col justify-start mt-3 gap-y-1'>
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
          <div className='flex w-full px-10 h-auto flex-col justify-start mt-3 gap-y-1'>
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
          <div className='flex w-full px-10 h-auto justify-start text-slate-400 text-xs mt-2'>
            Already have an account?
            <span
              className='px-1 cursor-pointer underline text-blue-500'
              onClick={() => {
                setSignUp(!signUp);
                setSignIn(!signIn);
              }}>
              Sign In
            </span>
          </div>
          <div className='flex w-full px-10 h-auto flex-col justify-start mt-6 mb-12'>
            <div>
              <button
                type='submit'
                className='w-full bg-[#0076bd] hover:bg-[#f89b44] cursor-pointer transition-all duration-500 ease-in-out rounded-md min-h-8 py-2 text-slate-100'>
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
