import Image from 'next/image'
import Link from 'next/link';

function Sidebar({ }) {
  return (
    <ul className="menu menu-lg bg-gray-200 w-56 rounded-box">
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
  )

}

export default Sidebar;