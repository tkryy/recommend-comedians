import Image from 'next/image'
import Link from 'next/link';

function Sidebar({ }) {
  return (
    <ul className="menu menu-lg bg-gray-200 w-56 rounded-box">
      <li>
        <Link href="/">
          <img className="w-8 -ml-1" src="/images/home01.png" />
          <p>ホーム</p>
        </Link>
      </li>
      <li>
        <Link href="/search_geinin" >
          <Image alt="search" width="20" height="20" src="/icons/search_FILL0_wght400_GRAD0_opsz24.svg"></Image>
          <p>芸人を探す</p>
        </Link>
      </li>
      <li>
        <Link href="/favorite">
          <img className="w-8 -ml-1" src="/images/star03.png" />
          <p>お気に入り</p>
        </Link>
      </li>
      <li>
        <Link href="/add_data">
          <img className="w-8 -ml-1" src="/images/add02.png" />
          <p>データ追加</p>
        </Link>
      </li>

      <div className="mt-40 border-2 border-gray-300"></div>
      <li>
        <Link href="/explanation">
          <img className="w-8 -ml-1" src="/images/hatena02.png" />
          <p>使い方</p>
        </Link>
      </li>
      <li>
        <Link href="/setting">
          <img className="w-8 -ml-1 rounded-full" src="/images/haguruma01.png" />
          <p>設定</p>
        </Link>
      </li>
    </ul>
  )

}

export default Sidebar;