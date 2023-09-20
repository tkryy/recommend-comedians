import Link from "next/link";

export default function Add_data() {
  /**
   * DaisyUIデザインのスライダーをレンダリングする
   *
   * @param {string} leftLabel - スライダーの左側のラベル
   * @param {string} rightLabel - スライダーの右側のラベル
   * @return {JSX.Element} - Tスライダーをレンダリング
   */
  const renderRatingSliders = (leftLabel: string, rightLabel: string) => {
    return (
      <div className="mt-12 min-w-[400px] z-10">
        <div className="flex justify-between">
          <p className="text-xl">{leftLabel}</p>
          <p className="text-xl">{rightLabel}</p>
        </div>
        <input type="range" min={0} max={10} className="range" step="1" />
        <div className="flex justify-between text-xs px-2">
          {[5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5].map((value) => (
            <span key={value}>
              |<br /> {value}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="container ">
      <h1 className="text-3xl">芸人データを追加する</h1>
      <input
        type="text"
        placeholder="芸人名を記入"
        className="input input-bordered  text-black bg-gray-300"
      />
      <p className="">特徴</p>
      <textarea
        placeholder="芸人の特徴を記入"
        className="textarea textarea-bordered textarea-md  text-black bg-gray-300"
      ></textarea>

      {renderRatingSliders("精密性", "柔軟性")}
      {renderRatingSliders("正統派", "破天荒")}
      {/*  
    内部データ上の分類は問題ないが、サイト上の表記としては「頭悪い」は不適切かもしれない。
    「センス・パワー」との差別化もわかりにくいので他の表現も模索する。
    */}
      {renderRatingSliders("賢い", "頭悪い")}

      {/*  
    以下の部分は「ワード」というパラメータがあったがデザイン的な統一を考えて省略した。
    問題があるようであれば修正を検討する。
    */}
      {renderRatingSliders("センス", "パワー")}

      {renderRatingSliders("演技派", "素")}
      {renderRatingSliders("はやい", "ゆっくり")}
      {renderRatingSliders("尖り", "真面目")}
      {renderRatingSliders("イケメン", "ブサイク")}
      {renderRatingSliders("人気", "コア")}
    </div>
  );
}
