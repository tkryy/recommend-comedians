import Image from 'next/image'
import Link from 'next/link';

function Sidebar({ }) {
  return (
    <ul className="menu menu-lg bg-gray-200 w-56 rounded-box">
      <li>
        <a>
          <img className="w-8 -ml-1" src="/images/home01.png" />
          <Link href="/">ホーム</Link>
        </a>
      </li>
      <li>
        <Link href="/search_geinin">
          {/* <img className="w-8 -ml-1" src="/images/search02.png"/> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg> */}
          <Image alt="search" width="20" height="20" src="/icons/search_FILL0_wght400_GRAD0_opsz24.svg"></Image>
          <p>芸人を探す</p>
        </Link>
      </li>
      <li>
        <a>
          <img className="w-8 -ml-1" src="/images/star03.png" />
          <Link href="/favorite">お気に入り</Link>
        </a>
      </li>
      <li>
        <a>
          <img className="w-8 -ml-1" src="/images/add02.png" />
          <Link href="/add_data">データ追加</Link>
        </a>
      </li>

      <div className="mt-40 border-2 border-gray-300"></div>
      <li>
        <a>
          <img className="w-8 -ml-1" src="/images/hatena02.png" />
          <Link href="/explanation">使い方</Link>
        </a>
      </li>
      <li>
        <a>
          <img className="w-8 -ml-1 rounded-full" src="/images/haguruma01.png" />
          <Link href="/setting">設定</Link>
        </a>
      </li>
    </ul>
  )

}

export default Sidebar;