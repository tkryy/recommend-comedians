import Image from "next/image";
import Link from "next/link";

export const HowToUse = () => {
  return(
    
    <div className="flex justify-center flex-wrap">
      <h1 className="text-5xl font-bold w-full ml-96 p-4 text-yellow-500">芸人名を入力、おすすめを提案！</h1>
      <div className="flex justify-center space-x-5 -ml-24">
      <Image
          src={"/images/recommend_exam01.png"}
          alt="診断ページの図"
          width="500"
          height="320"
          className=""
        ></Image>
        <Image
          src={"/images/recommend_exam02.png"}
          alt="診断ページの図"
          width="500"
          height="320"
          className=""
        ></Image>
      </div>
        
    </div>

  );
};