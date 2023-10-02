// api/counter.ts
import { NextRequest, NextResponse } from "next/server";
import { getFirestore } from "firebase-admin/firestore";
import { getTokens } from "next-firebase-auth-edge/lib/next/tokens";
import { getFirebaseAdminApp } from "@/lib/firebase/firebaseAdmin";
import { authConfig } from "@/config/server-config";
/**
 * Handles a POST request and updates the user counter.
 *
 * @param {NextRequest} request - The request object containing the cookies.
 * @return {Promise<NextResponse>} A promise that resolves to the updated user counter.
 */
export async function POST(request: NextRequest) {

  const tokens = await getTokens(request.cookies, authConfig);

  if (!tokens) {
    console.log(tokens)
    return NextResponse.json(null);
  }

  const db = getFirestore(getFirebaseAdminApp());

  const userCountersRef = db
    .collection("user-counters")
    .doc(tokens.decodedToken.uid);
  const snapshot = await userCountersRef.get();

  const currentUserCounter = await snapshot.data();

  if (!snapshot.exists || !currentUserCounter) {
    const userCounter = {
      id: tokens.decodedToken.uid,
      count: 1,
    };

    await userCountersRef.create(userCounter);
    return NextResponse.json(userCounter);
  }

  const newUserCounter = {
    ...currentUserCounter,
    count: currentUserCounter.count + 1,
  };
  await userCountersRef.update(newUserCounter);

  return NextResponse.json(newUserCounter);
}
