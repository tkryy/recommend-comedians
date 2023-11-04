"use client";
import { useComediansStore } from "@/lib/zustand/Stores";
import { useRouter } from "next/navigation";
import {
  convertComedianCompanyToString,
  convertComedianCompanyToColor,
} from "@/models/Comedian";
import RatingDataView from "@/components/shared/RatingDataView";
import TypeBadges from "@/components/shared/TypeBadges";
import FavoriteAddButton from "@/components/auth/FavoriteAddButton";
import Image from "next/image";
export default function Page({ params }: { params: { slug: string } }) {
  const comedians = useComediansStore((state) => state.comedians);
  const comedian = comedians.find((comedian) => comedian.id === params.slug);

  const labelClassName = "md:text-2xl text-[#F25C05] font-bold";
  const dataClassName = "md:text-xl";
  const tdTextClasses = "md:text-base text-[10px] text-[#8E8E93]";
  const badgeClass =
    "md:text-sm text-[10px] font-medium  md:px-2.5 md:py-0.5 rounded text-white items-center text-center bg-transparent";
  const router = useRouter();

  if (!comedian) {
    router.push("/application/favorite");
    return <div>404</div>;
  }

  const companyColor = convertComedianCompanyToColor(comedian);

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
              吉本興業大阪本社に所属する日本のお笑いコンビ。歌ネタ王決定戦2020王者。
              M-1グランプリ2017ファイナリスト、M-1グランプリ2022準優勝。
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
