import Image from "next/image";
import Link from "next/link";

export const FavoriteIntroduction = () => {
  return (
    <div className="flex pt-24 pl-40">
      <Image
        src={"/images/favorite_exam01.png"}
        alt="お気に入りページの図"
        width="600"
        height="320"
        className="p-4 mockup-window border border-base-300"
      ></Image>
      <div className="pt-20 pl-16">
      <h1 className="text-5xl font-bold text-yellow-500 mt-4">お気に入り機能</h1>

      <p className="text-xl text-black mt-8 -ml-8">Tendonでは、新たに発見したお気に入りの芸人を<br></br>記録できます。<br></br>あなただけのお気に入りの芸人リストを作りましょう。</p>
      </div>
    </div>
  );
};