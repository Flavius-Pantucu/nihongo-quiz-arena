"use client";

import { useState } from "react";
import { UserMenu } from "./user-menu";
import UserRegistration from "./user-registration";

export function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  const [isLogged] = useState(false);

  return isLogged ? <UserMenu user={user} /> : <UserRegistration />;
}
