import { z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
);

export const registerSchema = z
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

  export const loginSchema = z.object({
    account: z.string().min(1),
    password: z.string().min(1),
  })