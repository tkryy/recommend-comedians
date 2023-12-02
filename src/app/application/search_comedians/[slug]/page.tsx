"use client";
import { getComedianDataFromID } from "@/lib/gradio";
import { Comedian } from "@/models/Comedian";
import { useEffect } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

// pages/comedian/[id].js
type Props = {
  params: { comedian: Comedian };
};

export default async function ComedianPage() {

    const pathname = useSearchParams().get("id");
    console.log(pathname)

  if (!pathname) {
    return <div>No ID provided</div>;
  }

  const result = await getComedianDataFromID(pathname, []);

  if (result == null) {
    return <div>No data found</div>;
  }

  const comedian: Comedian = result[0];

  return (
    <div>
      <h2>Comedian: {comedian.name}</h2>
      <h3>結成年: {comedian.birthYear}</h3>
      {/* ここにコメディアンの詳細情報を表示 */}
    </div>
  );
}
