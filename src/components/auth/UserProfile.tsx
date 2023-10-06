"use client";

import * as React from "react";
import { useAuth } from "@/lib/firebase/context";
import { useFirebaseAuth } from "@/lib/firebase/firebase-config";
import { useLoadingCallback } from "react-loading-hook";
import { clientConfig } from "../../config/client-config";
import { useRouter } from "next/navigation";
import { signOut, reload } from "firebase/auth";
import Image from "next/image";
interface UserProfileProps {
  count: number;
}

function UserProfile({ count }: UserProfileProps) {
  const router = useRouter();
  const { user } = useAuth();
  const { getFirebaseAuth } = useFirebaseAuth();
  const [hasLoggedOut, setHasLoggedOut] = React.useState(false);
  const [handleLogout, isLogoutLoading] = useLoadingCallback(async () => {
    const auth = getFirebaseAuth();
    await signOut(auth);
    setHasLoggedOut(true);
    await fetch("/api/logout", {
      method: "GET",
    });
    router.push("/login");
  });

  const [handleClaims, isClaimsLoading] = useLoadingCallback(async () => {
    const auth = getFirebaseAuth();
    await fetch("/api/custom-claims", {
      method: "POST",
    });

    await auth.currentUser!.getIdTokenResult(true);
  });

  const [handleIncrementCounterApi, isIncrementCounterApiLoading] =
    useLoadingCallback(async () => {
      const response = await fetch("/api/user-counters", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      await response.json();

      router.refresh();
    });

  function handleRedirect() {
    router.push(
      `${clientConfig.redirectUrl}?redirect_url=${window.location.href}`
    );
  }

  let [isIncrementCounterActionPending, startTransition] =
    React.useTransition();

  if (!user && hasLoggedOut) {
    return (
      <div>
        <div>
          <h3>
            <span>You are being logged out...</span>
          </h3>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col space-y-8">
      <div>
        <div id="USER" className="flex space-x-4 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-primary ring-offset-2">
              {user.photoURL ? (
                <img src={user.photoURL} alt="User Photo" />
              ) : (
                <Image
                alt="icon_mark"
                width="20"
                height="20"
                src="/icons/account_circle_white_24dp.svg"
              ></Image>
              )}
            </div>
          </div>
          <div>
            <div>{user.displayName}</div>
            <h3 className="text-gray-600">現在のメールアドレス</h3>
            <span className="text-lg font-bold">{user.email}</span>
          </div>
        </div>

        {!user.emailVerified && (
          <div>
            <p>Email not verified.</p>
          </div>
        )}

        <div className="flex flex-col space-y-4 mt-3">
          <button
            className="btn w-28"
            disabled={isLogoutLoading}
            onClick={handleLogout}
          >
            Log out
          </button>
        </div>
      </div>
      <div>
        <h3>
          {/* defaultCount is updated by server */}
          Counter: {count}
        </h3>
      </div>
    </div>
  );
}

export default UserProfile;
