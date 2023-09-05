export default function Add_data() {
  return (
    <div className="">
      <h1 className="ml-80 my-12 text-3xl">芸人データを追加する</h1>
      <input type="text" placeholder="芸人名を記入" className=" input input-bordered w-full max-w-xs ml-80 text-black bg-gray-300" />
      <p className="ml-80 mt-12">特徴</p>
      <textarea placeholder="芸人の特徴を記入" className="textarea textarea-bordered textarea-md w-full max-w-xs ml-80 text-black bg-gray-300" ></textarea>
      <select className="select select-bordered w-full max-w-xs ml-80 mt-12 mb-32 text-black bg-gray-300 box-content h-20 w-30">
        <option disabled selected>追加する芸人に最も適する<br></br>ジャンルを選択してください。</option>
        <option>コント師多めの演技波系</option>
        <option>純粋な漫才多め、正統派系</option>
        <option>正統派多め、しゃべくり系</option>
        <option>搦め手使い、漫才コント系</option>
        <option>変な奴ら多め、尖り系</option>
        <option>ツッコミのパワー強め、パワー系</option>
        <option>正統派とまでは言えないけど正統派に近い、準正統派系</option>
        <option>演技とセンスが強い、センス系</option>
        <option>素の人間性勝負、非演技派系</option>
        <option>両刀多め、二刀流系</option>
      </select>
    </div>
  );
}
