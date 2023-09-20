import Image from "next/image";
import Link from "next/link";

export default function Search_comedians() {
  return (
    <div>
      <h1 className="text-3xl">芸人を探す</h1>
      <div className="flex">
        <input type="text" placeholder="芸人名を記入" className=" input input-bordered w-full max-w-xs ml-80 text-black bg-gray-300" />
        <button className="btn text-white hover:opacity-75 ml-2">
          検索
        </button>

      </div>

    </div>
  );
}
