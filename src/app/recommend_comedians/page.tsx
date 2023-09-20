import Image from "next/image";
import Link from "next/link";

export default function Recommend_comedians() {
  return (
    <div className="container flex flex-col items-center justify-center h-screen min-h-screen ">
      <h1 className="text-3xl mt-64">おすすめ芸人診断</h1>
      <div className="flex mt-4">
        <input type="text" placeholder="芸人名を記入" className=" input input-bordered text-black bg-gray-300" />
        <button className="btn text-white hover:opacity-75 ml-2">
          診断
        </button>
      </div>

      <p className="mt-12 mb-4 text-3xl">結果</p>
      <div className="">
        <Image
          src={"/images/icon01.png"}
          alt='おすすめ芸人画像'
          width="300"
          height="100" />
        <p className="ml-32 mt-2 text-xl">芸人名</p>
        <button className="btn  btn-secondary text-white hover:opacity-75 ml-24 mt-4">
          お気に入り登録
        </button>
      </div>

      <p className="mt-8 text-3xl">あなたのおすすめ芸人タイプは○○です。</p>
      <Link href="">
        <p className="underline hover:opacity-50 text-xl mb-96">他の○○タイプの芸人を見る</p>
      </Link>

    </div>
  );
}
