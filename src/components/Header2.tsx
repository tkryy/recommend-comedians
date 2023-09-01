import Image from 'next/image'
import Link from 'next/link'

function Header2({ }) {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar bg-gray-800">
            <div className="flex-none lg:hidden z-30">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2 text-white">タイトル</div>
            <div className="flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {/* ベルマーク */}
                <button className="btn btn-ghost btn-circle">
                  <div className="indicator text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                    <span className="badge badge-xs badge-primary indicator-item"></span>
                  </div>
                </button>

                {/* アイコンマーク */}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                      <Image alt="icon_mark" width="20" height="20" src="/icons/account_circle_white_24dp.svg"></Image>
                    </div>
                  </label>
                  <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white">
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-gray-200 text-black">
            {/* Sidebar content here */}
            <li>
              <Link href="/">
                <Image alt="home" width="20" height="20" src="/icons/home_FILL0_wght400_GRAD0_opsz24.svg"></Image>
                <p>ホーム</p>
              </Link>
            </li>
            <li>
              <Link href="/recommend_comedians">
                <Image alt="recommend" width="20" height="20" src="/icons/smart_toy_black_24dp.svg"></Image>
                <p>おすすめAIを使う</p>
              </Link>
            </li>
            <li>
              <Link href="/search_comedians">
                <Image alt="search" width="20" height="20" src="/icons/search_FILL0_wght400_GRAD0_opsz24.svg"></Image>
                <p>芸人を探す</p>
              </Link>
            </li>
            <li>
              <Link href="/favorite">
                <Image alt="star" width="20" height="20" src="/icons/star_FILL0_wght400_GRAD0_opsz24.svg"></Image>
                <p>お気に入り</p>
              </Link>
            </li>
            <li>
              <Link href="/add_data">
                <Image alt="add" width="20" height="20" src="/icons/person_add_FILL0_wght400_GRAD0_opsz24.svg"></Image>
                <p>データ追加</p>
              </Link>
            </li>

            <div className="mt-40 border-2 border-gray-300"></div>
            <li>
              <Link href="/explanation">
                <Image alt="hatena" width="20" height="20" src="/icons/help_FILL0_wght400_GRAD0_opsz24.svg"></Image>
                <p>使い方</p>
              </Link>

            </li>
            <li>
              <Link href="/setting">
                <Image alt="setting" width="20" height="20" src="/icons/settings_FILL0_wght400_GRAD0_opsz24.svg"></Image>
                <p>設定</p>
              </Link>
            </li>

          </ul>

        </div>
      </div>

    </>
  );
}

export default Header2;