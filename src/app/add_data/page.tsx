import PageTitle from "@/components/PageTitle";

export default function Add_data() {
  /**
   * DaisyUIデザインのスライダーをレンダリングする
   *
   * @param {string} leftLabel - スライダーの左側のラベル
   * @param {string} rightLabel - スライダーの右側のラベル
   * @return {JSX.Element} - Tスライダーをレンダリング
   */
  const renderRatingSliders = (
    title: string,
    leftLabel: string,
    rightLabel: string
  ) => {
    return (
      <div className="mt-12 md:min-w-[400px]  space-y-8">
        {/* 質問のタイトル */}
        <div className="">
          <h2 className="md:text-2xl text-lg font-bold">{title}</h2>
          <hr className="h-[0.5px]  bg-[#D9D9D9]  rounded " />
        </div>
        {/* パラメータのスライダー */}
        <div className=" flex items-center justify-center">
          <div className="flex justify-between md:w-2/3 w-[270px]">
            <p className="md:text-xl text-xs md:w-[70px]  w-[50px]  ">
              {leftLabel}
            </p>
            <div>
              <input
                type="range"
                min={0}
                max={10}
                className="md:w-[400px] w-[150px] h-2 accent-[#262526] bg-gradient-to-r from-pink-400 to-cyan-400 rounded-lg appearance-none cursor-pointer"
              ></input>
              <div className="flex justify-between text-xs px-[5px]">
                {[5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5].map((value) => (
                  <div
                    key={value}
                    className="flex flex-col justify-start items-center"
                  >
                    <p>|</p>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="md:text-xl text-xs md:w-[70px] w-[50px] text-end">
              {rightLabel}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      <PageTitle title="芸人データを追加" />

      <div className="flex flex-col justify-center items-center space-y-9 px-2">
        <div id="TEXTS" className="flex flex-col ">
          <h2 className="md:text-3xl text-xl font-bold">基本情報</h2>
          <input
            type="text"
            placeholder="芸人の名前を記入"
            className="input input-bordered md:max-w-[400px] text-black bg-gray-300"
          />
          <p className="">特徴</p>
          <textarea
            placeholder="芸人の特徴を記入"
            className="textarea textarea-bordered textarea-md md:max-w-[400px]  text-black bg-gray-300"
          ></textarea>
        </div>
        <div id="SLIDERS" className="flex flex-col">
          <h2 className="md:text-3xl text-xl font-bold">分析データ</h2>
          <div className="mx-12">
            {renderRatingSliders("どんなスタイル？", "精密", "柔軟")}
            {renderRatingSliders("笑いの取り方は？", "正統派", "破天荒")}
            {/*  
    内部データ上の分類は問題ないが、サイト上の表記としては「頭悪い」は不適切かもしれない。
    「センス・パワー」との差別化もわかりにくいので他の表現も模索する。
    */}
            {renderRatingSliders("ネタの印象は？", "賢い", "馬鹿らしい")}

            {/*  
    以下の部分は「ワード」というパラメータがあったがデザイン的な統一を考えて省略した。
    問題があるようであれば修正を検討する。
    */}
            {renderRatingSliders("強みといえば？", "センス", "パワー")}

            {renderRatingSliders("雰囲気は？", "演技派", "天然")}
            {renderRatingSliders("ネタのテンポは？", "はやい", "ゆっくり")}
            {renderRatingSliders("性格は？", "尖り", "真面目")}
            {renderRatingSliders("華はある方？", "イケメン", "個性的")}
            {renderRatingSliders("今の知名度は？", "人気", "コア")}
          </div>
        </div>
      </div>
    </div>
  );
}
