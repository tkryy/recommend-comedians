"use client";
import { getComedianDataForSearch } from "@/lib/gradio";
import { useState } from "react";
import PageTitle from "@/components/shared/PageTitle";
import { Comedian, dummyData } from "@/models/Comedian";
import ComedianCard from "@/components/shared/ComedianCard";
import Image from "next/image";

export default function Search_comedians() {
  const [resultText, setResultText] = useState("？？？");
  const [params, setParams] = useState<string[]>([]);
  const [comedians, setComedians] = useState<Comedian[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleButtonClick = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    //console.log(genreStr);

    console.log(params);
    const result = await getComedianDataForSearch(searchText, params);
    setIsLoading(false);
    if (result == null) await setResultText("エラー");
    else {
      console.log(result);
      await setComedians(result);
    }
  };

  const genreButton = (genre: string, imageSRC: string) => {
    return (
      <button
        className="flex flex-col items-center justify-center w-16"
        onClick={() => {
          if (params.includes(genre)) {
            setParams(params.filter((item) => item !== genre));
          } else {
            setParams([...params, genre]);
          }
        }}
      >
        <div
          className={
            params.includes(genre)
              ? "ring-2 ring-[#F25C05] rounded-lg"
              : "rounded-lg"
          }
        >
          <Image
            className="bg-[#014747] hover:bg-[#025454] p-2  rounded-md m-[2px] "
            src={imageSRC}
            alt={genre}
            width={50}
            height={50}
          />
        </div>
        <p className="text-sm mt-2">{genre}</p>
      </button>
    );
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
            <form onSubmit={handleButtonClick}>
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
            </form>
          </div>
        </div>
        {/* 芸風検索 */}
        {/* ボタンにして絞り込みができるようにする */}
        <div className="space-y-4 items-center justify-center">
          <h2 className="text-2xl font-bold text-start">芸風を選択</h2>
          <div className="grid md:grid-cols-6 grid-cols-3 md:gap-4 gap-3 px-12">
            {genreButton(
              "漫才/漫談",
              "/icons/mic_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
            {genreButton(
              "コント",
              "/icons/sports_kabaddi_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
            {genreButton(
              "ピン芸",
              "/icons/emoji_people_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
            {genreButton(
              "リズム/歌",
              "/icons/music_note_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
            {genreButton(
              "ギャグ",
              "/icons/sentiment_very_satisfied_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
            {genreButton(
              "大喜利",
              "/icons/edit_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
            {genreButton(
              "ものまね",
              "/icons/group_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
            {genreButton(
              "トーク",
              "/icons/record_voice_over_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
            {genreButton(
              "SNS",
              "/icons/slideshow_FILL0_wght400_GRAD0_opsz24_white.svg"
            )}
          </div>
        </div>

        {/* 検索結果 */}
        <div className=" items-center md:space-x-3">
          <h3 className="text-3xl font-bold">検索結果</h3>
          <div className="flex flex-col justify-center items-center min-w-[300px]] p-3 rounded-lg md:mt-0 mt-2">
            {!isLoading && (
              <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-5 md:px-0 px-12">
                {comedians.map((comedian: Comedian) => (
                  <ComedianCard comedian={comedian} />
                ))}
                {comedians.length == 1 && comedians[0].name == "undefined" && (
                  <p>検索結果はありません</p>
                )}
              </div>
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
