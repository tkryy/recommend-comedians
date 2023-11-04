import Image from "next/image";
import Link from "next/link";

export const RecommendFor = () => {
  return (
    <div className="flex justify-center md:pt-24">
      
      <div className="flex-wrap md:-ml-8 -ml-16">
      <h1 className="md:text-5xl text-3xl font-bold text-yellow-500 mt-4 md:ml-40 ml-32 md:w-full">こんな方におすすめ！</h1>

      <p className="md:text-xl text-black md:mt-8 mt-4 md:ml-16 ml-20 md:w-full">Tendonは、最近芸人を推しはじめた人、たくさんを芸人を知りたい人など<br className="md:block hidden"></br>お笑いが好きな人はもちろん、お笑いに少しでも興味がある人にもおすすめです。</p>

      <p className="md:text-5xl text-xl font-bold text-yellow-500 md:mt-8 mt-4 md:-ml-4 md:ml-0 ml-20">自分の知らない好みの芸人を見つけよう！
      </p>
      </div>
    </div>
  );
};