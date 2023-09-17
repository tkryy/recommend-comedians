import Link from 'next/link'

export default function Add_data() {
  return (
    <div className="container flex flex-col items-center justify-center h-screen min-h-screen">
      <h1 className="text-3xl">芸人データを追加する</h1>
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
        <div className="flex justify-around -mx-24">
          <p className="text-2xl">センス</p>
          <p className="text-2xl">ワード</p>
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
          <p className="text-2xl">はやい</p>
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
          <p className="text-2xl">真面目</p>
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
          <p className="text-2xl">イケメン</p>
          <p className="text-2xl">ブサイク</p>
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
          <p className="text-2xl">人気</p>
          <p className="text-2xl">コア</p>
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
