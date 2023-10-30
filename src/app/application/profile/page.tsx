
import { ServerAuthProvider } from "@/lib/firebase/server-auth-provider";
import UserProfile from "@/components/auth/UserProfile";
import { Metadata } from "next";
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { cookies } from "next/headers";
import { authConfig } from "../../../config/server-config";
import PageTitle from "@/components/shared/PageTitle";
import Image from "next/image";
import TestButton from "@/components/auth/FirestoreButtons";
import FavoriteAddButton from "@/components/auth/FavoriteAddButton";
import { Comedian } from "@/models/Comedian";

export default async function Profile() {



  const testComedian: Comedian = {
    id: "testComedian",
    name: "testComedian",
    company: 0,
    imageSRC: "testComedian",
    sex: 0,
    homePageURL: "testComedian",
    info: "testComedian",
    birthYear: "",
    appearance: 0,
    popularity: 0,
    member: 0
  };

  return (
    <div>
      <PageTitle title="Profile" />
     
      <ServerAuthProvider>
        <UserProfile count={0} />
        <TestButton />
        <FavoriteAddButton comedian={testComedian} />
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
