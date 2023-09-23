"use client";

import { getComedianNamePredict } from "@/lib/gradio";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
import TypingAnimation from "@/components/TypingCode";

export default function Recommend_comedians() {
  const [resultText, setResultText] = useState("？？？");
  const [isLoading, setIsLoading] = useState(false);

  const [isTypingFirst, setIsTypingFirst] = useState(false);
  const [isTypingSecond, setIsTypingSecond] = useState(false);
  const [isTypingThird, setIsTypingThird] = useState(false);

  const [searchText, setSearchText] = useState("");

  const handleButtonClick = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    setIsTypingFirst(true);
    await setTimeout(() => setIsTypingSecond(true), 500);
    await setTimeout(() => setIsTypingThird(true), 1000);

    const result = await getComedianNamePredict(searchText);
    setIsLoading(false);
    await setResultText(result || "結果");

    await setTimeout(() => setIsTypingFirst(false), 500);
    await setTimeout(() => setIsTypingSecond(false), 500);
    await setTimeout(() => setIsTypingThird(false), 500);
  };

  return (
    <div className="">
      <PageTitle title="AIおすすめ診断" />

      <div className="flex flex-col justify-center items-center space-y-[50px] ">
        <div className="flex flex-col items-center justify-center min-w-full">
          <h2 className="md:text-3xl font-bold text-center">
            AIがあなたの好みから
            <br />
            新しいおすすめ芸人をご紹介!
          </h2>

          <div className="flex mt-4">
            <form onSubmit={handleButtonClick}>
              {" "}
              {/* 追加 */}
              <input
                id="SEARCH_BOX"
                type="text"
                placeholder="好きな芸人の名前を入力！"
                className="input input-bordered text-[#000] bg-[#D9D9D9] md:min-w-[300px]"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                className="btn bg-[#732C02] text-white ml-4"
              >
                実行
              </button>{" "}
              {/* type属性を追加 */}
            </form>{" "}
            {/* 追加 */}
          </div>
        </div>

        <div className="mockup-code md:min-w-[500px]">
          <pre data-prefix="$">
            <code>あなたの好みを分析...</code>
          </pre>
          <pre data-prefix=">" className="text-warning">
            {isTypingFirst && <TypingAnimation text={"installing..."} />}
            {!isTypingFirst && <TypingAnimation text={" "} />}{" "}
          </pre>
          <pre data-prefix=">" className="text-warning">
            {isTypingSecond && (
              <TypingAnimation text={"Tendon server access..."} />
            )}
            {!isTypingSecond && <TypingAnimation text={" "} />}{" "}
          </pre>
          <pre data-prefix=">" className="text-success">
            {isTypingThird && <TypingAnimation text={"access authorized!"} />}
            {!isTypingThird && <TypingAnimation text={" "} />}{" "}
          </pre>
        </div>

        <div className="md:flex  items-center md:space-x-3">
          <h3 className="text-3xl font-bold">おすすめは</h3>
          <div className="flex flex-col justify-center items-center min-w-[300px] border-2 border-[#D9D9D9] p-3 rounded-lg md:mt-0 mt-2">
            {!isLoading && (
              <h4 id="RESULT_TEXT" className="text-xl font-bold">
                {resultText}
              </h4>
            )}{" "}
            {/* isLoadingがfalseのときだけ表示 */}
            {isLoading && (
              <span
                id="LOADING"
                className="loading loading-infinity text-[#F25C05] loading-2xl"
              ></span>
            )}{" "}
            {/* isLoadingがtrueのときだけ表示 */}
          </div>
        </div>
        <p className=" md:text-3xl ">あなたのおすすめ芸人タイプは○○です。</p>
        <div className="flex items-center justify-center space-x-3">
          <Link href="" className="btn btn-outline btn-accent  text-white   ">
            他の○○タイプの芸人を見る
          </Link>
          <button className="btn   btn-accent text-white ">
            お気に入り登録
          </button>
        </div>
      </div>
    </div>
  );
}
