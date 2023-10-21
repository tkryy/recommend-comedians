import Image from "next/image";
import Link from "next/link";

export const RecommendFor = () => {
  return (
    <div className="flex justify-center pt-24">
      
      <div className="flex-wrap -ml-8">
      <h1 className="text-5xl font-bold text-yellow-500 mt-4 ml-40 w-full">こんな方におすすめ！</h1>

      <p className="text-xl text-black mt-8 ml-16 w-full">Tendonは、最近芸人を推しはじめたひと、たくさんを芸人を知りたい人など<br></br>お笑いが好きな人はもちろん、お笑いに少しでも興味がある人にもおすすめです。</p>

      <p className="text-5xl font-bold text-yellow-500 mt-8 -ml-4">自分の知らない好みの芸人を見つけよう！
      </p>
      </div>
    </div>
  );
};