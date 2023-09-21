import PageTitle from "@/components/PageTitle";
import { Comedian } from "@/models/Comedian";
import ComedianCard from "@/components/ComedianCard";
import GenreIcon from "@/components/GenreIcon";

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

export default function Search_comedians() {
  return (
    <div>
      <PageTitle title="芸人を探す" />
      {/*　検索ページ */}
      <div className="space-y-4">
        {/* キーワード検索 */}
        <div className="space-y-4 items-center justify-between">
          <h2 className="text-2xl font-bold">キーワード検索</h2>
          <div className="flex items-center justify-center">
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
        {/* 芸風検索 */}
        {/* ボタンにして絞り込みができるようにする */}
        <div className="space-y-4 items-center justify-between">
          <h2 className="text-2xl font-bold">芸風から探す</h2>
          <div className="flex items-center justify-center space-x-6">
            <GenreIcon
              genre="漫才"
              imageSRC="/icons/mic_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="コント"
              imageSRC="/icons/sports_kabaddi_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="大喜利"
              imageSRC="/icons/edit_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="歌ネタ"
              imageSRC="/icons/music_note_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
             <GenreIcon
              genre="ものまね"
              imageSRC="/icons/group_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="ピン芸人"
              imageSRC="/icons/emoji_people_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
          </div>
        </div>
        
        {/* トレンド */}
        <div className="flex flex-col justify-start space-y-4">
          <h2 className="text-2xl font-bold">トレンド</h2>
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
    </div>
  );
}
