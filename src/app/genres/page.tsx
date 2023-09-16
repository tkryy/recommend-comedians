import Image from "next/image";
import Link from "next/link";

export default function Genres() {
  return (
    <div>
      <>
        <h1 className="ml-80 my-12 text-3xl">ジャンル</h1>
        <div className="flex">
          <div>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">精密性タイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">柔軟性タイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">正統派タイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">破天荒タイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">賢いタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">頭悪いタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">センスタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">ワードタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">パワータイプ</span></p>
            </Link>

          </div>

          <div>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">演技派タイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">素タイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">はやいタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">ゆっくりタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">尖りタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">真面目タイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">イケメンタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">ブサイクタイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">人気タイプ</span></p>
            </Link>
            <Link href="">
              <p className="ml-12 mb-8 text-2xl">・<span className="underline hover:opacity-50">コアタイプ</span></p>
            </Link>


          </div>


        </div>

      </>
    </div>
  );
}
