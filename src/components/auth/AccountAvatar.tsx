"use client";

import * as React from "react";
import { useAuth } from "@/lib/firebase/context";
import Link from "next/link";

function UserAccountAvatar() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="">
        <button className="btn btn-info">
          <Link href={"/login"}>ログイン</Link>
        </button>
      </div>
    );
  }

  return (
    <div>
      <label tabIndex={0}>
        <div className="rounded-full avatar">
          <div className="w-10 rounded-full ring ring-info ring-offset-info ring-offset-1">
            {user.photoURL && <img src={user.photoURL} />}
          </div>
        </div>
      </label>
      <div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#000] rounded-box w-52 text-white"
        >
          <li>
            <Link href={"/application/profile"} className="justify-between">
              プロフィール
            </Link>
          </li>
          <li>
            <Link href={"/setting"} className="justify-between">
              設定
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserAccountAvatar;
