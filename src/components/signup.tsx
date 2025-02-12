import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { PasswordInput } from "./ui/password-input";
import UserIcon from "./icons/user";

const formSchema = z.object({
  user_name: z.string().min(4).max(32),
  user_email: z.string(),
  user_password: z.string(),
  user_confirm_password: z.string(),
});
export default function SignUp() {
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <UserIcon
            className='cursor-pointer size-8 hover:scale-110 transition-all duration-500 ease-in-out text-white'
            strokeWidth={1}
          />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[450px] bg-[#1b263b] border-0'>
        <DialogHeader>
          <DialogTitle className='text-center text-white pt-4'>
            Register
          </DialogTitle>
          <DialogDescription className='text-center text-xs px-6'>
            by continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4 max-w-full px-6'>
            <FormField
              control={form.control}
              name='user_name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Username</FormLabel>
                  <FormControl>
                    <Input
                      type='text'
                      placeholder='ex. madara1337'
                      className='mt-1 text-white'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='user_email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Email</FormLabel>
                  <FormControl>
                    <Input
                      className='mt-1 text-white'
                      placeholder='ex. madara1337@abc.com'
                      type='email'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='user_password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      className='mt-1 text-white'
                      placeholder='*******'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='user_confirm_password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-white'>Confirm password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      className='mt-1 text-white'
                      placeholder='*******'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                type='submit'
                className='bg-[#0076bd] hover:bg-[#f89b44] transition-colors duration-300 ease-in-out cursor-pointer'>
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
