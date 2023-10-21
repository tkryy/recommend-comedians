import Image from "next/image";
import Link from "next/link";

export const SearchIntroduction = () => {
  return (
    <div className="flex pt-24 pl-40">
      <div>
      <h1 className="text-5xl font-bold text-yellow-500 mt-8">キーワード、<br></br>芸風から検索！</h1>
      <p className="text-xl text-black mt-8">Tendonでは、キーワードや芸風からの<br></br>検索機能を用意しています。</p>
      </div>
      <div className="ml-12">
        <Image
          src={"/images/search_exam01.png"}
          alt="検索ページの図"
          width="650"
          height="320"
          className="mockup-window border border-base-300"
        ></Image>
      </div>
    </div>
  );
};