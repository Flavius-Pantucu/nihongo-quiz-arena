import { Dispatch, SetStateAction } from "react";

export default function SignUp({
  signUp,
  setSignUp,
}: {
  signUp: boolean;
  setSignUp: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div
      className='absolute w-full h-full left-0 top-0 z-10 bg-white'
      onClick={() => setSignUp(!signUp)}>
      TBD
    </div>
  );
}
