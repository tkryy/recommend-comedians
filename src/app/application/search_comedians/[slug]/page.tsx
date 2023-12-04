"use client";
import { getComedianDataFromID } from "@/lib/gradio";
import {
  Comedian,
  convertComedianCompanyToString,
  convertComedianCompanyToColor,
} from "@/models/Comedian";
import RatingDataView from "@/components/shared/RatingDataView";
import TypeBadges from "@/components/shared/TypeBadges";
import FavoriteAddButton from "@/components/auth/FavoriteAddButton";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
// pages/comedian/[id].js
type Props = {
  params: { comedian: Comedian };
};

const labelClassName = "md:text-2xl text-[#F25C05] font-bold";
const dataClassName = "md:text-xl";

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
            <Image
              src={comedian.imageSRC || "https://via.placeholder.com/200x200"}
              width={"320"}
              height={"320"}
              alt={comedian.name}
              className="rounded-2xl md:w-[400px] w-[300px]"
            ></Image>
          </a>
        </div>
        <div
          id="RIGHT"
          className="flex flex-col md:max-w-96 text-white py-5 max-h-[380px] "
        >
          <h2 className="md:text-6xl text-lg font-bold mb-3">
            {comedian.name}
          </h2>
          <TypeBadges comedian={comedian} />
          <FavoriteAddButton comedian={comedian} />
          <div className="bg-[#D9D9D9] rounded-lg text-center mt-[100px]">
            <p className="md:text-xl font-bold md:px-7 px-1 py-5 text-black">
              正統派タイプ
            </p>
          </div>
        </div>
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
            <RatingDataView leftLabel="正統派" rightLabel="破天荒" rating={9} />
            <RatingDataView leftLabel="賢い" rightLabel="頭悪い" rating={7} />
            <RatingDataView leftLabel="センス" rightLabel="パワー" rating={3} />
            <RatingDataView leftLabel="精密" rightLabel="柔軟" rating={8} />
            <RatingDataView leftLabel="演技派" rightLabel="素顔" rating={3} />
            <RatingDataView leftLabel="早め" rightLabel="ゆっくり" rating={6} />
            <RatingDataView leftLabel="尖り" rightLabel="真面目" rating={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
