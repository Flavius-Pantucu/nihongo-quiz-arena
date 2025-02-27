import { Dialog, DialogContent } from "../ui/dialog";
import { XIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import UserForm from "../forms/register-form";

export default function RegisterDialog({
  registerDialog,
  setRegisterDialog,
  setLoginDialog,
}: {
  registerDialog: boolean;
  setRegisterDialog: Dispatch<SetStateAction<boolean>>;
  setLoginDialog: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Dialog open={registerDialog}>
      <DialogContent
        className="bg-slate-700 border-none"
        onEscapeKeyDown={() => setRegisterDialog(false)}
        onInteractOutside={() => setRegisterDialog(false)}
      >
        <XIcon
          className="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:outline-none cursor-pointer size-5 text-slate-200"
          onClick={() => setRegisterDialog(false)}
        />
        <UserForm
          setRegisterDialog={setRegisterDialog}
          setLoginDialog={setLoginDialog}
        />
      </DialogContent>
    </Dialog>
  );
}
