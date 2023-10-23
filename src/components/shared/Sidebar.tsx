import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  const renderSliderItem = (href: string, src: string, text: string) => {
    return (
      <li>
        <Link href={href}>
          <Image alt={text} width={20} height={20} src={src} />
          <p className="pl-4 text-sm font-bold	 text-black">{text}</p>
        </Link>
      </li>
    );
  };

  return (
      <ul
        className="menu  fixed top-0 z-40 menu-lg bg-transparent-90   w-56  hidden xl:block min-h-screen"
        style={{ backgroundImage: "url(/images/sideBack.webp)" }}
      >
        <div
          style={{
            marginTop: "80px",
          }}
        >
          {renderSliderItem(
            "/",
            "/icons/home_FILL0_wght400_GRAD0_opsz24.svg",
            "ホーム"
          )}

          {renderSliderItem(
            "/application/recommend_comedians",
            "/icons/smart_toy_black_24dp.svg",
            "AIおすすめ診断"
          )}

          {renderSliderItem(
            "/application/search_comedians",
            "/icons/search_FILL0_wght400_GRAD0_opsz24.svg",
            "芸人を探す"
          )}

          {renderSliderItem(
            "/application/favorite",
            "/icons/star_FILL0_wght400_GRAD0_opsz24.svg",
            "お気に入り"
          )}

          {renderSliderItem(
            "/application/add_data",
            "/icons/person_add_FILL0_wght400_GRAD0_opsz24.svg",
            "データ追加"
          )}

          <div id="BORDER" className="mt-40 border-2 border-gray-300" />
        </div>

        <div>
          {renderSliderItem(
            "/application/explanation",
            "/icons/help_FILL0_wght400_GRAD0_opsz24.svg",
            "使い方"
          )}

          {renderSliderItem(
            "/application/setting",
            "/icons/settings_FILL0_wght400_GRAD0_opsz24.svg",
            "設定"
          )}
        </div>
      </ul>
  );
}

export default Sidebar;
