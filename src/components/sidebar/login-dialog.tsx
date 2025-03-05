import { Dialog, DialogContent } from "../ui/dialog";
import { XIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import LoginForm from "../forms/login-form";

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
        <LoginForm
          setRegisterDialog={setRegisterDialog}
          setForgotDialog={setForgotDialog}
          setLoginDialog={setLoginDialog}
        />
      </DialogContent>
    </Dialog>
  );
}
