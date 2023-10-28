import { NextRequest, NextResponse } from "next/server";
import { db, QuerySnapshot, QueryDocumentSnapshot } from "@/lib/firebase/firebaseAdmin";
import { IPlan } from "@/components/auth/FirestoreButtons";

const COLLECTION_NAME = "plans";

export async function POST(request: NextRequest) {
  const insertData: IPlan = await request.json();
  const docRef = db.collection(COLLECTION_NAME).doc(insertData.id);
  await docRef.set(insertData);
  return NextResponse.json({ ...insertData, id: docRef.id });
}

export async function PATCH(request: NextRequest) {
  const updateData = await request.json();
  db.collection(COLLECTION_NAME).doc(updateData.id).update(updateData);
  return NextResponse.json(updateData);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const month = searchParams.get("month");
  const snapshot: QuerySnapshot = await db.collection(COLLECTION_NAME).get();
  const data = snapshot.docs.map((doc: QueryDocumentSnapshot) => ({ ...doc.data(), id: doc.id }));
  return NextResponse.json(data);
}

export async function DELETE(request: NextRequest) {
  const deleteData = await request.json();
  await db.collection(COLLECTION_NAME).doc(deleteData.id).delete();
  return NextResponse.json({ message: 'Document successfully deleted!' });
}
