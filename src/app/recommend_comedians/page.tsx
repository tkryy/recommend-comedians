"use client";
import { getComedianNamePredict } from "@/lib/gradio";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";

export default function Recommend_comedians() {
  const [resultText, setResultText] = useState("結果");
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleButtonClick = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    const result = await getComedianNamePredict(searchText);
    setResultText(result || "結果");
    setIsLoading(false);
    setSearchText("");
  };

  return (
    <div className="">
      <PageTitle title="AIおすすめ診断" />
      <div className="flex flex-col items-center ">
        <div className="flex mt-4">
          <form onSubmit={handleButtonClick}>
            {" "}
            {/* 追加 */}
            <input
              id="SEARCH_BOX"
              type="text"
              placeholder="芸人名を記入"
              className="input input-bordered text-black bg-gray-300"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit">実行</button>{" "}
            {/* type属性を追加 */}
          </form>{" "}
          {/* 追加 */}
        </div>

        <p className="mt-12 mb-4 text-3xl">結果</p>

        <div className="">
          <Image
            src={"/images/icon01.png"}
            alt="おすすめ芸人画像"
            width="300"
            height="100"
          />
          <p className="ml-32 mt-2 text-xl">芸人名</p>
          {!isLoading && <div id="RESULT_TEXT">{resultText}</div>}{" "}
          {/* isLoadingがfalseのときだけ表示 */}
          {isLoading && (
            <span
              id="LOADING"
              className="loading loading-infinity text-[#F25C05] loading-lg"
            ></span>
          )}{" "}
          {/* isLoadingがtrueのときだけ表示 */}
          <button className="btn  btn-secondary text-white hover:opacity-75 ml-24 mt-4">
            お気に入り登録
          </button>
        </div>

        <p className="mt-8 text-3xl">あなたのおすすめ芸人タイプは○○です。</p>
        <Link href="">
          <p className="underline hover:opacity-50 text-xl mb-96">
            他の○○タイプの芸人を見る
          </p>
        </Link>
      </div>
    </div>
  );
}
