import { NextRequest, NextResponse } from "next/server";
import {
  db,
  QuerySnapshot,
  QueryDocumentSnapshot,
} from "@/lib/firebase/firebaseAdmin";

const CONTACT_COLLECTION_NAME = "contact";

export async function POST(request: NextRequest) {
  const insertData = await request.json();
  
  const refPath = db
    .collection(CONTACT_COLLECTION_NAME)
    .doc();

  const docRef = await refPath.set(insertData);

  return NextResponse.json({ ...insertData, id: refPath.id });
}