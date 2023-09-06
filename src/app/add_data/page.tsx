import Link from 'next/link'

export default function Add_data() {
  return (
    <div className="">
      <h1 className="ml-80 my-12 text-3xl">芸人データを追加する</h1>
      <input type="text" placeholder="芸人名を記入" className=" input input-bordered w-full max-w-xs ml-80 text-black bg-gray-300" />
      <p className="ml-80 mt-12">特徴</p>
      <textarea placeholder="芸人の特徴を記入" className="textarea textarea-bordered textarea-md w-full max-w-xs ml-80 text-black bg-gray-300" ></textarea>
      
      <div className="ml-12 mt-12">
        <div className="flex justify-around -mx-56">
          <p className="text-2xl">精密性</p>
          <p className="text-2xl">柔軟性</p>
        </div>
        <input type="range" min={0} max="10" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|<br></br>5</span>
          <span>|<br></br>4</span>
          <span>|<br></br>3</span>
          <span>|<br></br>2</span>
          <span>|<br></br>1</span>
          <span>|<br></br>0</span>
          <span>|<br></br>1</span>
          <span>|<br></br>2</span>
          <span>|<br></br>3</span>
          <span>|<br></br>4</span>
          <span>|<br></br>5</span>
        </div>
      </div>

      <div className="ml-12 mt-12">
        <div className="flex justify-around -mx-56">
          <p className="text-2xl">正統派</p>
          <p className="text-2xl">破天荒</p>
        </div>
        <input type="range" min={0} max="10" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|<br></br>5</span>
          <span>|<br></br>4</span>
          <span>|<br></br>3</span>
          <span>|<br></br>2</span>
          <span>|<br></br>1</span>
          <span>|<br></br>0</span>
          <span>|<br></br>1</span>
          <span>|<br></br>2</span>
          <span>|<br></br>3</span>
          <span>|<br></br>4</span>
          <span>|<br></br>5</span>
        </div>
      </div>

      <div className="ml-12 mt-12">
        <div className="flex justify-around -mx-56">
          <p className="text-2xl">賢い</p>
          <p className="text-2xl">頭悪い</p>
        </div>
        <input type="range" min={0} max="10" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|<br></br>5</span>
          <span>|<br></br>4</span>
          <span>|<br></br>3</span>
          <span>|<br></br>2</span>
          <span>|<br></br>1</span>
          <span>|<br></br>0</span>
          <span>|<br></br>1</span>
          <span>|<br></br>2</span>
          <span>|<br></br>3</span>
          <span>|<br></br>4</span>
          <span>|<br></br>5</span>
        </div>
      </div>

      <div className="ml-12 mt-12">
        <div className="flex justify-around -mx-56">
          <p className="text-2xl">センス</p>
          <p className="text-2xl">パワー</p>
        </div>
        <input type="range" min={0} max="10" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|<br></br>5</span>
          <span>|<br></br>4</span>
          <span>|<br></br>3</span>
          <span>|<br></br>2</span>
          <span>|<br></br>1</span>
          <span>|<br></br>0</span>
          <span>|<br></br>1</span>
          <span>|<br></br>2</span>
          <span>|<br></br>3</span>
          <span>|<br></br>4</span>
          <span>|<br></br>5</span>
        </div>
      </div>

      <div className="ml-12 mt-12">
        <div className="flex justify-around -mx-56">
          <p className="text-2xl">演技派</p>
          <p className="text-2xl">素</p>
        </div>
        <input type="range" min={0} max="10" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|<br></br>5</span>
          <span>|<br></br>4</span>
          <span>|<br></br>3</span>
          <span>|<br></br>2</span>
          <span>|<br></br>1</span>
          <span>|<br></br>0</span>
          <span>|<br></br>1</span>
          <span>|<br></br>2</span>
          <span>|<br></br>3</span>
          <span>|<br></br>4</span>
          <span>|<br></br>5</span>
        </div>
      </div>

      <div className="ml-12 mt-12">
        <div className="flex justify-around -mx-56">
          <p className="text-2xl">スピード</p>
          <p className="text-2xl">ゆっくり</p>
        </div>
        <input type="range" min={0} max="10" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|<br></br>5</span>
          <span>|<br></br>4</span>
          <span>|<br></br>3</span>
          <span>|<br></br>2</span>
          <span>|<br></br>1</span>
          <span>|<br></br>0</span>
          <span>|<br></br>1</span>
          <span>|<br></br>2</span>
          <span>|<br></br>3</span>
          <span>|<br></br>4</span>
          <span>|<br></br>5</span>
        </div>
      </div>

      <div className="ml-12 mt-12">
        <div className="flex justify-around -mx-56">
          <p className="text-2xl">尖り</p>
          <p className="text-2xl">万人受け</p>
        </div>
        <input type="range" min={0} max="10" className="range" step="1" />
        <div className="w-full flex justify-between text-xs px-2">
          <span>|<br></br>5</span>
          <span>|<br></br>4</span>
          <span>|<br></br>3</span>
          <span>|<br></br>2</span>
          <span>|<br></br>1</span>
          <span>|<br></br>0</span>
          <span>|<br></br>1</span>
          <span>|<br></br>2</span>
          <span>|<br></br>3</span>
          <span>|<br></br>4</span>
          <span>|<br></br>5</span>
        </div>
      </div>

    </div>
  );
}
