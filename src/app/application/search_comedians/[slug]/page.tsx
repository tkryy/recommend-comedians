'use client'
import { getComedianDataFromID, URLtoImage } from "@/lib/gradio";
import { Comedian, convertComedianCompanyToString } from "@/models/Comedian";
import SNSIcon from "@/components/shared/SNSIcon";
//import RatingDataView from "@/components/shared/RatingDataView";
//import TypeBadges from "@/components/shared/TypeBadges";
import SkillBadges from "@/components/shared/ComedianSkillBadge";
import FavoriteAddButton from "@/components/auth/FavoriteAddButton";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { SNSIconList } from "@/components/shared/SNSIconList";
//import { useState } from "react";
// pages/comedian/[id].js
type Props = {
  params: { comedian: Comedian };
};

const labelClassName = "md:text-2xl text-[#F25C05] font-bold";
const dataClassName = "md:text-xl";

export default async function ComedianPage() {
  // 検索パラメータからIDパラメータを取得
  const id = useSearchParams().get("id");
  //console.log(id)

  // IDが提供されていない場合、エラーメッセージを表示
  if (!id) {
    return <div>IDが指定されていません</div>;
  }

  // IDに基づいてコメディアンのデータを取得
  const comedians = await getComedianDataFromID(id, []);
  //console.log(comedians);
  // データが見つからない場合、エラーメッセージを表示
  if (!comedians || comedians.length === 0) {
    return <div>データが見つかりません</div>;
  }

  // リストから最初のコメディアンを取得
  const comedian: Comedian = comedians[0];
  //console.log(comedian);

  //const [imgSRC, setImgSRC] = useState('/icons/tendonIcon.svg');
  //const c_imgSRC = await URLtoImage(comedian.imageSRC || '/icons/tendonIcon.svg');
  //const imgSRC = URLtoImage(comedian.imageSRC || 'https://via.placeholder.com/200x200');
  //console.log(imgSRC);

  // ページ上にコメディアンの詳細を表示
  return (
    <div className="flex flex-col space-y-9 items-center justify-center md:max-w-6xl max-w-sm md:p-6 p-3">
      <div
        id="HEADER"
        className="bg-[#D9D9D9] md:flex block space-x-9 items-center justify-start rounded-3xl p-9 w-full"
      >
        <div id="LEFT" className="">
          <a
            href={comedian.homePageURL}
            className="flex items-center justify-center"
          > 

            {comedian.imageSRC === 'no_image' ? (
              <Image
                src={"/icons/tendonIcon.svg"}
                width={"320"}
                height={"320"}
                alt={"tendonIcon"}
                className="rounded-2xl md:w-[400px] w-[300px]"
              ></Image>
            ) : (
              <Image
                //src={comedian.imageSRC || "https://via.placeholder.com/200x200"}
                src={comedian.imageSRC || "/icons/tendonIcon.svg"}
                width={"320"}
                height={"320"}
                alt={comedian.name}
                className="rounded-2xl md:w-[400px] w-[300px]"
              ></Image>
            )}

          </a>
        </div>
        <div
          id="RIGHT"
          className="flex flex-col md:max-w-96 text-white py-5 max-h-[380px] "
        >
          <h2 className="md:text-6xl text-lg font-bold mb-3">
            {comedian.name}
          </h2>
          <SkillBadges comedian={comedian} />
          <FavoriteAddButton comedian={comedian} />
          <SNSIconList comedian={comedian} />
        </div>
        <p>{comedian.updated_at}</p>
      </div>

      <div className="my-9 block md:flex md:flex-col items-center justify-center ">
        <div className="md:flex md:space-x-9 ">
          {/* プロフィール */}
          <div className="max-w-[500px] border-2 space-y-3 border-gray-300 md:p-9 p-3">
            <div className="flex items-center">
              <h3 className={labelClassName}>結成年：</h3>
              <h3 className={dataClassName}>{comedian.birthYear}</h3>
            </div>
            <div className="flex">
              <p className={labelClassName}>所属事務所：</p>
              <p className={dataClassName}>
                {convertComedianCompanyToString(comedian)}
              </p>
            </div>

            <div className="flex">
              <p className={labelClassName}>どんな芸人？</p>
            </div>

            <p className="mt-3 md:text-base text-xs">
              {comedian.info || "まだ情報はありません"}
            </p>
          </div>
          {/* 分析データ */}
          <div className="min-w-[500px] flex flex-col md:mt-0 mt-4 items-center justify-center border-2 border-gray-300 md:p-7 p-3 space-y-5">
            {comedian.movie_link === 'no_link' ? (
              <Image
                src={"/icons/tendonIcon.svg"}
                width={"320"}
                height={"320"}
                alt={"tendonIcon"}
                className="rounded-2xl md:w-[560px] w-[315px]"
              ></Image>
            ) : (
              <iframe
                width="560"
                height="315"
                src={comedian.movie_link}
                title="YouTube video player"

                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div >
  );
}
