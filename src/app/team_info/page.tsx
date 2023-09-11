import Image from "next/image";
import Link from "next/link";

export default function Team_info() {
  return (
    <div className="ml-8 my-4">
      <p className="text-3xl">さや香</p>
      <br></br>
      <div className="flex">
        <Image
          src={"/images/icon01.png"}
          alt='おすすめ芸人画像'
          width="300"
          height="100" />
        <div>
          <div className="flex">
            <p className="ml-4 text-2xl">結成年</p>
            <p className="ml-4 mt-2">2014</p>
          </div>
          <br></br>
          <div className="flex">
            <p className="ml-4 text-2xl">所属事務所</p>
            <p className="ml-4 mt-2">吉本興業(大阪)</p>
          </div>
          <br></br>
          <div className="flex">
            <p className="ml-4 text-2xl">備考</p>
            <p className="ml-4 mt-2">なし</p>
          </div>
          <br></br>
          <p className="ml-4">吉本興業大阪本社に所属する日本のお笑いコンビ。歌ネタ王決定戦2020王者。M-1グランプリ2017ファイナリスト、M-1グランプリ2022準優勝。</p>

        </div>


      </div>

    </div>





  );
}