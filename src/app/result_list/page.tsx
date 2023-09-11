import Image from "next/image";
import Link from "next/link";

export default function Result_list() {
  return (
    <div className="overflow-x-auto">
      <h1 className="ml-80 my-12 text-3xl">検索結果</h1>
      <table className="table">
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
                  <div className="font-bold">さや香</div>
                </div>
              </div>
            </td>
            <td>
              吉本興業(大阪)
              <br />
            </td>
            <td>2014</td>
            <th>
              <button className="btn btn-ghost btn-xs">正統派</button>
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
                    <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
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
                    <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span className="badge badge-ghost badge-sm">Office Assistant I</span>
            </td>
            <td>Crimson</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
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
                    <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
            </td>
            <td>Indigo</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
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
    </div>

  );
}
