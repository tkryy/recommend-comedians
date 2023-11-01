"use client";
import { getComedianDataForSearch } from "@/lib/gradio";
import { useState } from "react";
import PageTitle from "@/components/shared/PageTitle";
import { Comedian, dummyData } from "@/models/Comedian";
import ComedianCard from "@/components/shared/ComedianCard";
import GenreIcon from "@/components/shared/GenreIcon";

type searchParam = {
  isManzai: boolean;
  isConte: boolean;
  isPin: boolean;
  isRhythm: boolean;
  isGag: boolean;
  isOgiri: boolean;
  isMimic: boolean;
  isTalk: boolean;
  isSNS: boolean;
};

// ボタンが押されていたら文字列に追加
function boolToStr(b: searchParam): string[] {
  const s = ["", "", "", "", "", "", "", "", ""];
  if (b.isManzai) s[0] = "漫才/漫談";
  if (b.isConte) s[1] = "コント";
  if (b.isPin) s[2] = "ピン芸";
  if (b.isRhythm) s[3] = "リズム/歌";
  if (b.isGag) s[4] = "ギャグ";
  if (b.isOgiri) s[5] = "大喜利";
  if (b.isMimic) s[6] = "ものまね";
  if (b.isTalk) s[7] = "トーク";
  if (b.isSNS) s[8] = "SNS";
  return s;
}

export default function Search_comedians() {
  const [resultText, setResultText] = useState("？？？");
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [params, setParams] = useState<searchParam>({
    isManzai: false,
    isConte: false,
    isPin: false,
    isRhythm: false,
    isGag: false,
    isOgiri: false,
    isMimic: false,
    isTalk: false,
    isSNS: false,
  });
  const genreStr = boolToStr(params);

  const handleButtonClick = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);
    //console.log(genreStr);
    const result = await getComedianDataForSearch(searchText, genreStr);
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
          <div className="grid md:grid-cols-6 grid-cols-3 md:gap-0 gap-3 px-12">
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() =>
                  setParams({ ...params, isManzai: !params.isManzai })
                }
              >
                <GenreIcon
                  genre="漫才/漫談"
                  imageSRC="/icons/mic_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() =>
                  setParams({ ...params, isConte: !params.isConte })
                }
              >
                <GenreIcon
                  genre="コント"
                  imageSRC="/icons/sports_kabaddi_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() => setParams({ ...params, isPin: !params.isPin })}
              >
                <GenreIcon
                  genre="ピン芸"
                  imageSRC="/icons/emoji_people_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() =>
                  setParams({ ...params, isRhythm: !params.isRhythm })
                }
              >
                <GenreIcon
                  genre="リズム/歌"
                  imageSRC="/icons/music_note_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() => setParams({ ...params, isGag: !params.isGag })}
              >
                <GenreIcon
                  genre="ギャグ"
                  imageSRC="/icons/sentiment_very_satisfied_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() =>
                  setParams({ ...params, isOgiri: !params.isOgiri })
                }
              >
                <GenreIcon
                  genre="大喜利"
                  imageSRC="/icons/edit_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() =>
                  setParams({ ...params, isMimic: !params.isMimic })
                }
              >
                <GenreIcon
                  genre="ものまね"
                  imageSRC="/icons/group_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() => setParams({ ...params, isTalk: !params.isTalk })}
              >
                <GenreIcon
                  genre="トーク"
                  imageSRC="/icons/record_voice_over_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
            <div className="flex justify-center">
              <button
                className="flex flex-col items-center justify-center h-[70px] w-[60px]"
                onClick={() => setParams({ ...params, isSNS: !params.isSNS })}
              >
                <GenreIcon
                  genre="SNS"
                  imageSRC="/icons/slideshow_FILL0_wght400_GRAD0_opsz24_white.svg"
                />
              </button>
            </div>
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
