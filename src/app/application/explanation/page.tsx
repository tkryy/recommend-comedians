import ComedianCard from "@/components/shared/ComedianCard";
import PageTitle from "@/components/shared/PageTitle";
import { Comedian, dummyData } from "@/models/Comedian";
import { convertComedianCompanyToColor, convertComedianCompanyToString } from "@/models/Comedian";
import SkillBadges from "@/components/shared/ComedianSkillBadge";
import { sample } from "@/models/Comedian";
import Image from "next/image";

export default function Explanation() {
  const titleCSS = 'text-lg md:text-xl font-bold';
  const textCSS = 'text-sm md:text-base lg:text-lg pb-2 p-3';
  return (
    <div className="p-2">
      <PageTitle title="使い方" />
      {/* <p className="font-bold md:text-xl px-2">
        自分の好きな芸人名を入力すると、入力した芸人と似ている芸人をAIが判断して、おすすめを提案します！
      </p>

      <div className="p-8 md:p-12">
        <p className="">(例)</p>
        <div className="flex justify-center items-center w-[150px] md:w-[600px] ml-24 md:ml-2">
          <Image
            src={"/images/recommend_exam01.png"}
            alt="例１"
            width="300"
            height="100"
          />
          <Image
            src={"/images/recommend_exam02.png"}
            alt="例１"
            width="300"
            height="100"
          />
        </div>
        <p className="mt-2 ml-4 md:ml-2 w-[300px] md:w-[600px]">
          左図のように好きな芸人名を入力すると、右図のようにおすすめの芸人が出力されます。
        </p>
      </div> */}
      <div className="md:ml-12 pb-10 border">
        <p className={titleCSS}>1.メイン機能</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>それぞれの機能の使い方は以下のボタンを押したら見られます！</p>
          <div className="md:flex p-1">
            {/* ポップアップ 1  おすすめ機能 */}
            <div className="p-1">
              <label htmlFor="modal_recommend" className="btn w-[140px] bg-red-400 border-none text-white">おすすめ機能</label>
              <input type="checkbox" id="modal_recommend" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box bg-white">
                  <h3 className="text-lg font-bold">おすすめ機能</h3>
                  <p className="py-4">This modal works with a hidden checkbox!</p>
                </div>
                <label className="modal-backdrop" htmlFor="modal_recommend">Close</label>
              </div>
            </div>
            {/* ポップアップ 2  検索機能 */}
            <div className="p-1">
              <label htmlFor="modal_search" className="btn w-[140px] bg-red-400 border-none text-white">検索機能</label>
              <input type="checkbox" id="modal_search" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box bg-white">
                  <h3 className="text-lg font-bold">検索機能</h3>
                  <p className="py-4">This modal works with a hidden checkbox!</p>
                </div>
                <label className="modal-backdrop" htmlFor="modal_search">Close</label>
              </div>
            </div>
            {/* ポップアップ 3  お気に入り機能 */}
            <div className="p-1">
              <label htmlFor="modal_favorite" className="btn w-[140px] bg-red-400 border-none text-white">お気に入り機能</label>
              <input type="checkbox" id="modal_favorite" className="modal-toggle" />
              <div className="modal" role="dialog">
                <div className="modal-box bg-white">
                  <h3 className="text-lg font-bold">お気に入り機能</h3>
                  <p className="py-4">This modal works with a hidden checkbox!</p>
                </div>
                <label className="modal-backdrop" htmlFor="modal_favorite">Close</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:ml-12 pt-2 md:px-20 pb-10 border">
        <p className={titleCSS}>2.事務所について</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>各所属事務所は以下のように色分けされています。少数派の事務所は「その他」に分類されます。</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {dummyData.map((comedian: Comedian) => (
              <div className="flex items-center md:p-1 px-1">
              <div
                className="h-4 w-4 rounded-full mr-2"
                style={{
                  backgroundColor: convertComedianCompanyToColor(comedian),
                }}
              ></div>
              <p className="text-sm md:text-base">
                {convertComedianCompanyToString(comedian)}
              </p>
            </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:ml-12 pt-2 md:px-20 pb-10 border">
        <p className={titleCSS}>3.ジャンルアイコンについて</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>芸人さんの芸風やスキルを表すアイコンです。事務所ごとに色が変わります。</p>
          <SkillBadges comedian={sample} />
        </div>
      </div>

      <div className="md:ml-12 pt-2 md:px-20 pb-10 border">
        <p className={titleCSS}>4.SNSボタンについて</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}>芸人さんごとにSNSボタンが用意されています。このボタンを押すとその芸人さんのSNSへ飛ぶことができます。SNSをしていない、または、SNSデータが設定されていない芸人さんについては飛ぶことができません。</p>

        </div>
      </div>

      <div className="md:ml-12 pt-2 md:px-20 pb-10 border">
        <p className={titleCSS}>5.お気に入りボタンについて</p>
        <div className="flex flex-col justify-center items-center ">
          <p className={textCSS}></p>

        </div>
      </div>
    </div>
  );
}
