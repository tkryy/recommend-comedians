"use client";
import { getComedianDataForSearch } from "@/lib/gradio";
import { useState } from "react";
import PageTitle from "@/components/shared/PageTitle";
import { Comedian, dummyData } from "@/models/Comedian";
import ComedianCard from "@/components/shared/ComedianCard";
import Image from "next/image";

export default function Search_comedians() {
  const [params, setParams] = useState<string[]>([]);
  const [comedians, setComedians] = useState<Comedian[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");

  /**
   * ボタンクリックイベントを処理します。
   *
   * @param {React.FormEvent} event - フォームイベント。
   */
  const handleButtonClick = async (event: React.FormEvent) => {
    event.preventDefault(); // デフォルトのフォーム送信動作を防ぎます
    setIsLoading(true); // ローディング状態を true に設定します

    // 入力がなければ何も表示しない
    if (searchText === "") { setIsLoading(false); }
    // 入力があれば検索結果を加工して表示
    else {
      // getComedianDataForSearch 関数を呼び出してコメディアンのデータを取得します
      const result = await getComedianDataForSearch(searchText, params);

      setIsLoading(false); // ローディング状態を false に設定します
      if (result == null) {
        await setComedians([]); // 結果が null の場合、コメディアンの状態を空の配列に設定します
      } else {
        await setComedians(result); // コメディアンの状態を取得した結果に設定します
      }
    }
    
  };

  const genreButton = (genre: string, imageSRC: string) => {
    return (
      <button
        className={`flex flex-col items-center justify-center w-16`}
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
    <div className="md:mx-5 md:w-full">
      <PageTitle title="芸人を探す" />
      {/*　検索ページ */}
      <div className="space-y-4 md:mx-10 mx-2">
        {/* キーワード検索 */}
        <div className="space-y-4 items-center justify-between ">
          <h2 className={`md:text-2xl font-bold`}>
            キーワード検索
          </h2>
          <div className={`flex items-center justify-center`}>
            <form onSubmit={handleButtonClick} className="flex">
              <input
                id="SEARCH_BOX"
                type="text"
                placeholder="芸名の一部を入力！"
                className={`input input-bordered 
                            md:w-96 w-full 
                            text-black 
                            bg-gray-300`}
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
          <h2 className={`md:text-2xl font-bold text-start`}
          >
            芸風を選択
          </h2>
          <div className={`grid
                          md:grid-cols-5 grid-cols-3 
                          md:gap-4 gap-3 
                          px-20`}
          >
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
          {/* <div style={{backgroundColor: "rgb(200,200,200)"}}>
            <p className="tx:10">
              お気に入りしている芸人の名前を押すと個別ページを見れるよ！ <br></br>
              お気に入りしていない芸人の名前を押すとお気に入りページへ進むよ。
            </p>
          </div> */}
        </div>

        {/* 検索結果 */}
        <div key={'result_comedians'} className=" items-center">
          <h3 className={`md:text-3xl 
                          font-bold`}
          >
            検索結果
          </h3>
          <div className={`flex flex-col justify-center items-center 
                          sm:min-w-[230px] md:min-w-[300px] 
                          p-3 
                          rounded-lg 
                          md:mt-0 mt-2`}
          >
            {!isLoading && (
              <div
                className={`grid 
                            grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                            md:gap-5 gap-5 
                            md:px-0 px-12`}
              >
                {comedians.map((comedian: Comedian) => (
                  <div key={comedian.id} className="flex">
                    <ComedianCard comedian={comedian} />
                  </div>
                ))}
                {comedians.length === 0 && searchText !== "" && (
                  <p>検索結果ありません</p>
                )}
              </div>
            )}
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
        {/* <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">トレンド</h2>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-5 md:px-0 px-12">
            {dummyData.map((comedian: Comedian) => (
              <ComedianCard comedian={comedian} />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}
