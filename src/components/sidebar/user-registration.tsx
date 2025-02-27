import { SidebarMenuButton } from "../ui/sidebar";
import { User } from "lucide-react";
import { useState } from "react";
import LoginDialog from "./login-dialog";
import RegisterDialog from "./register-dialog";
import ForgotDialog from "./forgot-dialog";

export default function UserRegistration() {
  const [loginDialog, setLoginDialog] = useState(false);
  const [registerDialog, setRegisterDialog] = useState(false);
  const [forgotDialog, setForgotDialog] = useState(false);

  return (
    <>
      <SidebarMenuButton onClick={() => setLoginDialog(true)}>
        <User />
        <span>Login</span>
      </SidebarMenuButton>
      <LoginDialog
        loginDialog={loginDialog}
        setLoginDialog={setLoginDialog}
        setRegisterDialog={setRegisterDialog}
        setForgotDialog={setForgotDialog}
      />
      <RegisterDialog
        registerDialog={registerDialog}
        setRegisterDialog={setRegisterDialog}
        setLoginDialog={setLoginDialog}
      />
      <ForgotDialog
        forgotDialog={forgotDialog}
        setForgotDialog={setForgotDialog}
        setLoginDialog={setLoginDialog}
      />
    </>
  );
}
