"use client";
import { getComedianDataForSearch } from "@/lib/gradio";
import { useState } from "react";
import PageTitle from "@/components/shared/PageTitle";
import { Comedian, dummyData } from "@/models/Comedian";
import ComedianCard from "@/components/shared/ComedianCard";
import GenreIcon from "@/components/shared/GenreIcon";


export default function Search_comedians() {
  const [resultText, setResultText] = useState("？？？");
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [searchBoolean, setSearchBoolean] = useState(["","","","","","","","",""]);

  const handleButtonClick = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

    const result = await getComedianDataForSearch(searchText, searchBoolean);
    setIsLoading(false);
    await setResultText(result || "結果");
  };

  return (
    <div className="">
      <PageTitle title="芸人を探す" />
      {/*　検索ページ */}
      <div className="space-y-4 mx-20">
        {/* キーワード検索 */}
        <div className="space-y-4 items-center justify-between">
          <h2 className="text-2xl font-bold">キーワード検索</h2>
          <div className="flex items-center justify-center">
            <input
              id="SEARCH_BOX"
              type="text"
              placeholder="芸人さんの名前の一部を入力！"
              className="input input-bordered md:w-96 w-full text-black bg-gray-300"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className="btn text-white bg-[#732C02] hover:opacity-75 ml-2">
              検索
            </button>
          </div>
        </div>
        {/* 芸風検索 */}
        {/* ボタンにして絞り込みができるようにする */}
        <div className="space-y-4 items-center justify-center">
          <h2 className="text-2xl font-bold text-start">芸風から探す</h2>
          <div className="grid md:grid-cols-6 grid-cols-3 md:gap-0 gap-3 px-12">
            <GenreIcon
              genre="漫才/漫談"
              imageSRC="/icons/mic_FILL0_wght400_GRAD0_opsz24_white.svg"
            />

            <GenreIcon
              genre="コント"
              imageSRC="/icons/sports_kabaddi_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="ピン芸"
              imageSRC="/icons/emoji_people_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="リズム/歌"
              imageSRC="/icons/music_note_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="ギャグ"
              imageSRC="/icons/sentiment_very_satisfied_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="大喜利"
              imageSRC="/icons/edit_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="ものまね"
              imageSRC="/icons/group_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="トーク"
              imageSRC="/icons/record_voice_over_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="SNS"
              imageSRC="/icons/slideshow_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
          </div>
        </div>

        {/* 検索結果 */}
        <div className="md:flex  items-center md:space-x-3">
          <h3 className="text-3xl font-bold">検索結果</h3>
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

        {/* トレンド */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">トレンド</h2>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-5 md:px-0 px-12">
            {dummyData.map((comedian: Comedian) => (
              <ComedianCard comedian={comedian} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
