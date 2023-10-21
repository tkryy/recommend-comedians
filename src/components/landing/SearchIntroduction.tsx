import Image from "next/image";
import Link from "next/link";

export const SearchIntroduction = () => {
  return (
    <div className="flex pt-24 pl-40">
      <h1 className="text-5xl font-bold text-yellow-500 mt-4">キーワード、<br></br>芸風から検索！<br></br><span className="text-base text-black ">Tendonでは、キーワードや芸風からの検索機能を<br></br>用意しています。</span></h1>
      
      <div className="flex ml-12">
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