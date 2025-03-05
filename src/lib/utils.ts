import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import bcrypt from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function comparePasswords(password: string, hashedPassword: string){
  return bcrypt.compare(password, hashedPassword);
}