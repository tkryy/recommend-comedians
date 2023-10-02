"use client";

import * as React from "react";
import { useAuth } from "@/lib/firebase/context";

import { useFirebaseAuth } from "@/lib/firebase/firebase-config";
import { useLoadingCallback } from "react-loading-hook";
import { clientConfig } from "../../config/client-config";

import { useRouter } from "next/navigation";

import { signOut, reload } from "firebase/auth";

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
    window.location.reload();
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
    <div className="flex flex-col">
      <div>
        <div id="USER" className="flex space-x-4 items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-primary ring-offset-2">
              {user.photoURL && <img src={user.photoURL} />}
            </div>
          </div>
          <div>
            <h3 className="text-gray-600">現在のメールアドレス</h3>
            <span className="text-lg font-bold">{user.email}</span>
          </div>
        </div>

        {!user.emailVerified && (
          <div>
            <p>Email not verified.</p>
          </div>
        )}

        <div className="flex flex-col space-y-4">
          <div>
            <h5>Custom claims</h5>
            <p>{JSON.stringify(user.customClaims, undefined, 2)}</p>
          </div>
          <button className="btn w-80" disabled={isClaimsLoading} onClick={handleClaims}>
            Refresh custom user claims
          </button>
          <button className="btn w-28" disabled={isLogoutLoading} onClick={handleLogout}>
            Log out
          </button>
          <button className="btn w-28" onClick={handleRedirect}>Redirect</button>
        </div>
      </div>
      <div>
        <h3>
          {/* defaultCount is updated by server */}
          Counter: {count}
        </h3>
        <div>
          <button
            disabled={
              isIncrementCounterApiLoading || isIncrementCounterActionPending
            }
            onClick={handleIncrementCounterApi}
          >
            Update counter w/ api endpoint
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
