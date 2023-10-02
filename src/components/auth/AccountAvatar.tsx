"use client";

import * as React from "react";
import { useAuth } from "@/lib/firebase/context";
import { ServerAuthProvider } from "@/lib/firebase/server-auth-provider";
import Image from "next/image";

function UserAccountAvatar() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="w-10 rounded-full">
        <Image
          alt="icon_mark"
          width="20"
          height="20"
          src="/icons/account_circle_white_24dp.svg"
        ></Image>
      </div>
    );
  }

  return (
    <div className="rounded-full">
      <div className="w-10 rounded-full ring ring-primary ring-offset-primary ring-offset-2">
        {user.photoURL && <img src={user.photoURL} />}
      </div>
    </div>
  );
}

export default UserAccountAvatar;
