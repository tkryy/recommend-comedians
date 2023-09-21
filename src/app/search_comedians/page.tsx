import PageTitle from "@/components/PageTitle";
import { Comedian } from "@/models/Comedian";
import ComedianCard from "@/components/ComedianCard";
export default function Search_comedians() {
  const dummyData: Comedian[] = [
    {
      id: "1",

      name: "ダミー芸人1",
      sex: 1,
      info: "これはダミーデータ1です",
      company: "株式会社テスト",
      birthYear: "2000",
      manzai: true,
      appearance: 1,
      popularity: 1,
    },
    {
      id: "2",
      name: "ダミー芸人2",
      //imageSRC: "https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg",
      sex: 1,
      info: "これはダミーデータ1です",
      company: "株式会社テスト",
      birthYear: "2000",
      manzai: true,
      conte: true,
      appearance: 1,
      popularity: 1,
    },
  ];

  return (
    <div>
      <PageTitle title="芸人を探す" />
      {/*　検索ページ */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2>キーワード検索</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="「ものまね」「歌ネタ」などキーワードを入力！"
              className="input input-bordered w-96 text-black bg-gray-300"
            />
            <button className="btn text-white hover:opacity-75 ml-2">
              検索
            </button>
          </div>
        </div>
        {/* トレンド */}
        <div className="grid grid-cols-5 gap-5">
          <ComedianCard comedian={dummyData[0]} />
          <ComedianCard comedian={dummyData[1]} />
          <ComedianCard comedian={dummyData[0]} />
          <ComedianCard comedian={dummyData[1]} />
          <ComedianCard comedian={dummyData[0]} />
          <ComedianCard comedian={dummyData[1]} />
        </div>
      </div>
    </div>
  );
}
