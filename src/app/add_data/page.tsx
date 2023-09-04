export default function Add_data() {
  return (
    <div className="">
      <h1 className="ml-80 my-12 text-3xl">芸人データを追加する</h1>
      <input type="text" placeholder="芸人名を記入" className=" input input-bordered w-full max-w-xs ml-80 text-black bg-gray-300" />
      <p className="ml-80 mt-12">特徴</p>
      <textarea placeholder="芸人の特徴を記入" className="textarea textarea-bordered textarea-md w-full max-w-xs ml-80 text-black bg-gray-300" ></textarea>
    </div>
  );
}
