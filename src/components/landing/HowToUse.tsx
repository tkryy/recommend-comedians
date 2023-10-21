import Image from "next/image";
import Link from "next/link";

export const HowToUse = () => {
  return (
    <div className="flex justify-center flex-wrap">
      <h1 className="text-5xl font-bold w-full ml-80 pt-8 text-yellow-500">芸人名を入力、おすすめを提案！</h1>
      <p className="text-xl w-full ml-64 p-4">あなたの好みの芸人名を入力すると、入力した芸人と似ている芸人をAIが判断して、おすすめを提案します！</p>
      <div className="flex justify-center space-x-5 -ml-44 ">
        <Image
          src={"/images/recommend_exam03.png"}
          alt="診断ページの図1"
          width="500"
          height="320"
          className="mockup-window border border-base-300"
        ></Image>
        <Image
          src={"/images/recommend_exam04.png"}
          alt="診断ページの図2"
          width="500"
          height="320"
          className="mockup-window border border-base-300"
        ></Image>
      </div>
    </div>
  );
};