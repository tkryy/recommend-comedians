import Image from "next/image";
import Link from "next/link";

export default function Team_info() {
  return (
    <div className="ml-8 my-4">
      <div className="flex">
        <p className="text-3xl ml-4">さや香</p>
        <p className="text-3xl ml-8">ー正統派タイプー</p>
      </div>

      <br></br>
      <div className="flex">
        <a href="https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg" >
          <img src="https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg" alt="さや香" width="300" height=""></img>
        </a>
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
          <p className="ml-4">吉本興業大阪本社に所属する日本のお笑いコンビ。歌ネタ王決定戦2020王者。<br></br>M-1グランプリ2017ファイナリスト、M-1グランプリ2022準優勝。</p>
        </div>
      </div>
      <div className="flex ml-12 mt-2">
        <p>新山(左)</p>
        <p className="ml-24">石井(右)</p>
      </div>



    </div>





  );
}