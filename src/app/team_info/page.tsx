import Image from "next/image";
import Link from "next/link";

import RatingDataView from "@/components/RatingDataView";

export default function Team_info() {
  const labelClassName = "text-2xl text-[#F25C05] font-bold";
  const dataClassName = "text-2xl";

  return (
    <div>
      {/* ヘッダー */}
      <div id="HEADER" className=" bg-[#331301]  rounded-3xl">
        <div className="flex  p-6 justify-start">
          <a href="https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg">
            <img
              src="https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg"
              alt="さや香"
              width="400"
              className="rounded-2xl"
            ></img>
          </a>
          <div className="flex flex-col w-96 text-white ml-9 py-5 max-h-[380px]">
            <div>
              <h2 className="text-6xl font-bold">さや香</h2>

              <p className="mt-3">新山(左) 石井(右)</p>
            </div>

            <div className="bg-[#D9D9D9] rounded-lg text-center mt-[100px]">
              <p className="text-xl font-bold px-7 py-5 text-black">
                正統派タイプ
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container  my-9 flex flex-col items-center justify-center ">
        <div className="flex space-x-9 ">
          {/* プロフィール */}
          <div className="border-2 space-y-3 border-gray-300 p-9 max-w-xl">
            <div className="flex items-center">
              <h3 className={labelClassName}>結成年：</h3>
              <h3 className={dataClassName}>2014</h3>
            </div>

            <div className="flex">
              <p className={labelClassName}>所属事務所：</p>
              <p className={dataClassName}>吉本興業(大阪)</p>
            </div>

            <div className="flex">
              <p className={labelClassName}>どんな芸人？</p>
            </div>

            <p className="mt-3">
              吉本興業大阪本社に所属する日本のお笑いコンビ。歌ネタ王決定戦2020王者。
              M-1グランプリ2017ファイナリスト、M-1グランプリ2022準優勝。
            </p>
          </div>
          {/* 分析データ */}
          <div className="border-2 border-gray-300 p-9 max-w-xl space-y-5 ">
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
