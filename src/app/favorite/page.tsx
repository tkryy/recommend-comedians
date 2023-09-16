import Image from "next/image";
import Link from "next/link";

export default function Favorite() {
  return (
    <div>
      <>
        <h1 className="ml-80 my-12 text-3xl">お気に入り</h1>
        <table className="table ml-4">
          {/* head */}
          <thead>
            <tr>
              <th>
                {/* <label>
                <input type="checkbox" className="checkbox" />
              </label> */}
              </th>
              <th className="text-black">芸人名</th>
              <th className="text-black">所属事務所</th>
              <th className="text-black">結成年</th>
              <th className="text-black">ジャンル</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  1
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-5">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <a href="/team_info" >
                        <img src="https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg" alt="さや香" width="" height=""></img>
                      </a>
                    </div>
                  </div>
                  <div>
                    <Link href="/team_info">
                      <div className="font-bold">さや香</div>
                    </Link>
                  </div>
                </div>
              </td>
              <td>
                吉本興業(大阪)
                <br />
              </td>
              <td>2014</td>
              <th>
                <Link href="/genres">
                  <button className="btn btn-ghost btn-xs">正統派</button>
                </Link>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <th>
                <label>
                  2
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={"/images/icon01.png"}
                        alt='おすすめ芸人画像'
                        width="300"
                        height="100" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">名前</div>
                  </div>
                </div>
              </td>
              <td>
                所属事務所
                <br />
              </td>
              <td>結成年</td>
              <th>
                <Link href="/genres">
                  <button className="btn btn-ghost btn-xs">ジャンル</button>
                </Link>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <th>
                <label>
                  3
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={"/images/icon01.png"}
                        alt='おすすめ芸人画像'
                        width="300"
                        height="100" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">名前</div>
                  </div>
                </div>
              </td>
              <td>
                所属事務所
                <br />
              </td>
              <td>結成年</td>
              <th>
                <Link href="/genres">
                  <button className="btn btn-ghost btn-xs">ジャンル</button>
                </Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <th>
                <label>
                  4
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={"/images/icon01.png"}
                        alt='おすすめ芸人画像'
                        width="300"
                        height="100" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">名前</div>
                  </div>
                </div>
              </td>
              <td>
                所属事務所
                <br />
              </td>
              <td>結成年</td>
              <th>
                <Link href="/genres">
                  <button className="btn btn-ghost btn-xs">ジャンル</button>
                </Link>
              </th>
            </tr>
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th className="text-black">芸人名</th>
              <th className="text-black">所属事務所</th>
              <th className="text-black">結成年</th>
              <th className="text-black">ジャンル</th>
              <th></th>
            </tr>
          </tfoot>

        </table>

      </>
    </div>
  );
}
