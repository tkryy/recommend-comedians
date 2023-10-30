import { NextRequest, NextResponse } from "next/server";
import {
  db,
  QuerySnapshot,
  QueryDocumentSnapshot,
} from "@/lib/firebase/firebaseAdmin";

const USER_COLLECTION_NAME = "users";
const FAVORITE_COLLECTION_NAME = "favorites";

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const insertData = await request.json();
  const userID = searchParams.get("userid") ?? "error";
  const refPath = db
    .collection(USER_COLLECTION_NAME)
    .doc(userID)
    .collection(FAVORITE_COLLECTION_NAME)
    .doc(insertData.id);

  const docRef = await refPath.set(insertData);

  return NextResponse.json({ ...insertData, id: refPath.id });
}

export async function PATCH(request: NextRequest) {
  /*const updateData = await request.json();
  db.collection(USER_COLLECTION_NAME).doc(updateData.id).update(updateData);
  return NextResponse.json(updateData);
  */
  const { searchParams } = new URL(request.url);
  const deleteData = await request.json();
  const userID = searchParams.get("userid") ?? "error";
  const comedianId = searchParams.get("comedianId") ?? "error";
  const docId = deleteData.id;
  db.collection(USER_COLLECTION_NAME)
    .doc(userID)
    .collection(FAVORITE_COLLECTION_NAME)
    .doc(docId)
    .delete();
  return NextResponse.json(deleteData);
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const deleteData = await request.json();
  const userID = searchParams.get("userid") ?? "error";
  const comedianId = searchParams.get("comedianId") ?? "error";
  const docId = deleteData.id;
  db.collection(USER_COLLECTION_NAME)
    .doc(userID)
    .collection(FAVORITE_COLLECTION_NAME)
    .doc(docId)
    .delete();
  return NextResponse.json(deleteData);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const userID = searchParams.get("userid") ?? "error";

  const refPath = db
    .collection(USER_COLLECTION_NAME)
    .doc(userID)
    .collection(FAVORITE_COLLECTION_NAME);
  const snapshot: QuerySnapshot = await refPath.get();

  const data = snapshot.docs.map((doc: QueryDocumentSnapshot) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return NextResponse.json(data);
}
