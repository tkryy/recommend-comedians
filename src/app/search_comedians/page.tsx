import Image from "next/image";
import Link from "next/link";

export default function Search_comedians() {
  return (
    <div>
      <h1 className="ml-80 my-12 text-3xl">芸人を探す</h1>
      <input type="text" placeholder="検索" className=" input input-bordered w-full max-w-xs ml-80 text-black bg-gray-300" />
    </div>
  );
}
