import RatingDataView from "@/components/shared/RatingDataView";

export default function Team_info() {
  const labelClassName = "md:text-2xl text-[#F25C05] font-bold";
  const dataClassName = "md:text-2xl";

  return (
    <div className="md:mx-0 mx-4  space-y-9">
      {/* ヘッダー */}
      <div
        id="HEADER"
        className=" bg-[#331301]  rounded-3xl md:max-w-6xl max-w-sm"
      >
        <div className="md:flex block md:p-6 p-3 md:justify-start justify-center">
          <a
            href="https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg"
            className="flex items-center justify-center my-2"
          >
            <img
              src="https://profile.yoshimoto.co.jp/assets/data/profile/6046/683c87f6a8956e984e6a47b30b2779ab134e824f.jpg"
              alt="さや香"
              className="rounded-2xl md:w-[400px] w-[300px]"
            ></img>
          </a>
          <div className="flex flex-col md:w-96 text-white md:ml-9 ml-2 py-5 max-h-[380px]">
            <div>
              <h2 className="md:text-6xl text-lg font-bold">さや香</h2>

              <p className="mt-3">新山(左) 石井(右)</p>
            </div>

            <div className="bg-[#D9D9D9] rounded-lg text-center mt-[100px]">
              <p className="md:text-xl font-bold md:px-7 px-1 py-5 text-black">
                正統派タイプ
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-9 block md:flex md:flex-col items-center justify-center ">
        <div className="md:flex md:space-x-9 ">
          {/* プロフィール */}
          <div className="border-2 space-y-3 border-gray-300 md:p-9 p-3 md:max-w-xl max-w-sm">
            <div className="flex items-center">
              <h3 className={labelClassName}>結成年：</h3>
              <h3 className={dataClassName}>2014</h3>
            </div>
            <div className="flex">
              <p className={labelClassName}>所属事務所：</p>
              <p className={dataClassName}>吉本興業(大阪)</p>
            </div>

            <div className="flex">
              <p className={labelClassName}>どんな芸人？</p>
            </div>

            <p className="mt-3 md:text-base text-xs">
              吉本興業大阪本社に所属する日本のお笑いコンビ。歌ネタ王決定戦2020王者。
              M-1グランプリ2017ファイナリスト、M-1グランプリ2022準優勝。
            </p>
          </div>
          {/* 分析データ */}
          <div className="flex flex-col md:mt-0 mt-4 items-center justify-center border-2 border-gray-300 md:p-9 p-3 space-y-5 md:max-w-xl max-w-sm">
            <RatingDataView leftLabel="正統派" rightLabel="破天荒" rating={9} />
            <RatingDataView leftLabel="賢い" rightLabel="頭悪い" rating={7} />
            <RatingDataView leftLabel="センス" rightLabel="パワー" rating={3} />
            <RatingDataView leftLabel="精密" rightLabel="柔軟" rating={8} />
            <RatingDataView leftLabel="演技派" rightLabel="素顔" rating={3} />
            <RatingDataView leftLabel="早め" rightLabel="ゆっくり" rating={6} />
            <RatingDataView leftLabel="尖り" rightLabel="真面目" rating={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
