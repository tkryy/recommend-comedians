import styles from "./page.module.css";
import { ServerAuthProvider } from "@/lib/firebase/server-auth-provider";
import UserProfile from "@/components/auth/UserProfile";
import { Metadata } from "next";
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { cookies } from "next/headers";
import { authConfig } from "../../config/server-config";
import PageTitle from "@/components/shared/PageTitle";
import { getFirebaseAdminApp } from "@/lib/firebase/firebaseAdmin";
import { getFirestore } from "firebase-admin/firestore";

export default async function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />

      <ServerAuthProvider>
        <UserProfile count={0} />
      </ServerAuthProvider>
    </div>
  );
}

// Generate customized metadata based on user cookies
// https://nextjs.org/docs/app/building-your-application/optimizing/metadata
export async function generateMetadata(): Promise<Metadata> {
  const tokens = await getTokens(cookies(), authConfig);

  if (!tokens) {
    return {};
  }

  return {
    title: `${tokens.decodedToken.email} profile page`,
  };
}
