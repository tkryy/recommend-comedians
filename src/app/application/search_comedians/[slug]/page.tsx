"use client";
import { getComedianDataFromID } from "@/lib/gradio";
import { Comedian } from "@/models/Comedian";
import { useSearchParams } from "next/navigation";

// pages/comedian/[id].js
type Props = {
  params: { comedian: Comedian };
};

export default async function ComedianPage() {
  // 検索パラメータからIDパラメータを取得
  const id = useSearchParams().get("id");

  // IDが提供されていない場合、エラーメッセージを表示
  if (!id) {
    return <div>IDが指定されていません</div>;
  }

  // IDに基づいてコメディアンのデータを取得
  const comedians = await getComedianDataFromID(id, []);

  // データが見つからない場合、エラーメッセージを表示
  if (!comedians || comedians.length === 0) {
    return <div>データが見つかりません</div>;
  }

  // リストから最初のコメディアンを取得
  const comedian: Comedian = comedians[0];

  // ページ上にコメディアンの詳細を表示
  return (
    <div>
      <h2>コメディアン: {comedian.name}</h2>
      <h3>結成年: {comedian.birthYear}</h3>
      {/* ここに追加のコメディアンの詳細を表示 */}
    </div>
  );
}
