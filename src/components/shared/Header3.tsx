import Image from "next/image";
import Link from "next/link";
import UserAccountAvatar from "../auth/AccountAvatar";
import { ServerAuthProvider } from "@/lib/firebase/server-auth-provider";
function Header3({}) {
  return (
    <>
      <div className="navbar bg-opacity-80 shadow-lg backdrop-filter backdrop-blur-sm bg-[#F25C05] fixed top-0 z-50">
        <div className="navbar-start lg:ml-4">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost xl:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 rounded-box w-52 text-black"
            >
              <li>
                <Link href="/">
                  <Image
                    alt="home"
                    width="20"
                    height="20"
                    src="/icons/home_FILL0_wght400_GRAD0_opsz24.svg"
                  ></Image>
                  <p>ホーム</p>
                </Link>
              </li>
              <li>
                <Link href="/recommend_comedians">
                  <Image
                    alt="recommend"
                    width="20"
                    height="20"
                    src="/icons/smart_toy_black_24dp.svg"
                  ></Image>
                  <p>AIおすすめ診断</p>
                </Link>
              </li>
              <li>
                <Link href="/search_comedians">
                  <Image
                    alt="search"
                    width="20"
                    height="20"
                    src="/icons/search_FILL0_wght400_GRAD0_opsz24.svg"
                  ></Image>
                  <p>芸人を探す</p>
                </Link>
              </li>
              <li>
                <Link href="/favorite">
                  <Image
                    alt="star"
                    width="20"
                    height="20"
                    src="/icons/star_FILL0_wght400_GRAD0_opsz24.svg"
                  ></Image>
                  <p>お気に入り</p>
                </Link>
              </li>
              <li>
                <Link href="/add_data">
                  <Image
                    alt="add"
                    width="20"
                    height="20"
                    src="/icons/person_add_FILL0_wght400_GRAD0_opsz24.svg"
                  ></Image>
                  <p>データ追加</p>
                </Link>
              </li>

              <div className="mt-40 border-2 border-gray-300"></div>
              <li>
                <Link href="/explanation">
                  <Image
                    alt="hatena"
                    width="20"
                    height="20"
                    src="/icons/help_FILL0_wght400_GRAD0_opsz24.svg"
                  ></Image>
                  <p>使い方</p>
                </Link>
              </li>
              <li>
                <Link href="/setting">
                  <Image
                    alt="setting"
                    width="20"
                    height="20"
                    src="/icons/settings_FILL0_wght400_GRAD0_opsz24.svg"
                  ></Image>
                  <p>設定</p>
                </Link>
              </li>
            </ul>
          </div>
          <Link
            style={{ fontFamily: "Futura" }}
            href="/"
            className=" normal-case text-2xl text-white "
          >
            <div className="flex items-center">
              <Image
                src={"/icons/tendonIcon_white.svg"}
                alt="tendon"
                width={50}
                height={50}
              ></Image>
              {/* サービス名の文字の太さは通常でお願いします */}
              {/* もしboldにする場合は資料などもそれに統一する必要あり */}
              <h1 className="ml-3">Tendon</h1>
            </div>
          </Link>
        </div>

        <div className="navbar-end mr-6">
          {/* ベルマーク */}
          <button className="btn btn-ghost btn-circle mr-4">
            <div className="indicator text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>

          {/* アイコンマーク */}
          <div className="dropdown dropdown-end ">
            <ServerAuthProvider>
              <UserAccountAvatar />
            </ServerAuthProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header3;
