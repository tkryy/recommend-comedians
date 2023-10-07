import PageTitle from "@/components/shared/PageTitle";
import Image from "next/image";

export default function Explanation() {
  return (
    <div className="md:ml-12">
      <PageTitle title="使い方" />
      <p className="font-bold md:text-xl px-2">
        自分の好きな芸人名を入力すると、入力した芸人と似ている芸人をAIが判断して、おすすめを提案します！
      </p>

      <div className="p-8 md:p-12">
        <p className="">(例)</p>
        <div className="flex justify-center items-center w-[150px] md:w-[600px] ml-24 md:ml-2">
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
        <p className="mt-2 ml-4 md:ml-2 w-[300px] md:w-[600px]">
          左図のように好きな芸人名を入力すると、右図のようにおすすめの芸人が出力されます。
        </p>
      </div>
    </div>
  );
}
