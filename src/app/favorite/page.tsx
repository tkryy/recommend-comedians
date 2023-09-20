import Image from "next/image";
import Link from "next/link";
import PageTitle from "@/components/PageTitle";
export default function Favorite() {
  const renderFavoriteRow = (
    imageSRC: string,
    name: string,
    company: string,
    birthYear: string,
    genres: string
  ) => {
    return (
      <tr>
        <td>
          <div className="flex items-center space-x-5">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <a href="/team_info">
                  <img src={imageSRC} alt={name} width="300" height=""></img>
                </a>
              </div>
            </div>
            <div>
              <Link href="/team_info">
                <div className="font-bold">{name}</div>
              </Link>
            </div>
          </div>
        </td>
        <td>
          {company}
          <br />
        </td>
        <td>{birthYear}</td>
        <th>
          <Link href="/genres">
            <button className="">{genres}</button>
          </Link>
        </th>
      </tr>
    );
  };

  return (
    <div>
      <PageTitle title="お気に入り" />
      <div className="flex flex-col items-center">
      <table className="table  bg-[#F2F2F7]">
        {/* head */}
        <thead>
          <tr >
            <th className="text-black">名前</th>
            <th className="text-black">所属事務所</th>
            <th className="text-black">結成年</th>
            <th className="text-black">ジャンル</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {renderFavoriteRow(
            "https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg",
            "さや香",
            "吉本興業(大阪)",
            "2014",
            "正統派"
          )}
          {/* row 2 */}
          {renderFavoriteRow(
            "/images/icon01.png",
            "サンプル",
            "サンプル興業",
            "2022",
            "正統派"
          )}
          {/* row 3 */}
          {renderFavoriteRow(
            "/images/icon01.png",
            "サンプル",
            "サンプル興業",
            "2022",
            "正統派"
          )}
          {/* row 4 */}
          {renderFavoriteRow(
            "/images/icon01.png",
            "サンプル",
            "サンプル興業",
            "2022",
            "正統派"
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}
