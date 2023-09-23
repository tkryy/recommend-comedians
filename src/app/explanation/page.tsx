import PageTitle from '@/components/PageTitle';
import Image from "next/image";

export default function Explanation() {
  return (
    <div>
      <PageTitle title="使い方" />
      <p className="font-bold text-xl">自分の好きな芸人名を入力すると、入力した芸人と似ている芸人をAIが判断して、おすすめを提案します！</p>

      <div className="p-12">
        <p className="mt-2">(例)</p>
        <div className="flex justify-center items-center ">
          <Image
            src={"/images/recommend_exam01.png"}
            alt="例１"
            width="300"
            height="100"
          />
          <Image
            src={"/images/recommend_exam02.png"}
            alt="例１"
            width="300"
            height="100"
          />
        </div>
        <p className="mt-2">左図のように、好きな芸人名を入力すると、右の図のようにおすすめの芸人が出力されます。</p>
      </div>


    </div>

  );
}
