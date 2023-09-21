import { Comedian } from "@/models/Comedian";
import Image from "next/image";

// ダミー画像のURL
const dummyImageSRC = "https://via.placeholder.com/200x200";

interface ComedianCardProps {
  comedian: Comedian;
}

function ComedianCard({ comedian }: ComedianCardProps) {
  return (
    <div className="bg-[#F2F2F7] shadow-md w-52 h-62 rounded-md">
      <div className="p-4">
        {/* 画像 */}
        <div className="avator flex flex-col items-center">
        
            <Image
              src={comedian.imageSRC || dummyImageSRC} // comedian.imageSRCが存在しない場合にダミー画像を表示
              alt={comedian.name}
              width={180}
              height={180}
              className=" w-[180px]"
            />
     
        </div>
        {/* テキスト */}
        <div className="mt-3">
          <h3 className="text-xl font-bold">{comedian.name}</h3>
          <h4 className="text-sm text-gray-700">{comedian.company}</h4>
          <div className="flex mt-2 space-x-1">
            {comedian.manzai && (
              <div id="BADGE" className="badge badge-primary text-xs">
                漫才
              </div>
            )}
            {comedian.conte && (
              <div id="BADGE" className="badge badge-primary text-xs">
                コント
              </div>
            )}
            {comedian.mimic && (
              <div id="BADGE" className="badge badge-primary text-xs">
                ものまね
              </div>
            )}
            {comedian.alone && (
              <div id="BADGE" className="badge badge-primary text-xs">
                ピン
              </div>
            )}
            {comedian.rhythm && (
              <div id="BADGE" className="badge badge-primary text-xs">
                歌ネタ
              </div>
            )}
            {comedian.ogiri && (
              <div id="BADGE" className="badge badge-primary text-xs">
                大喜利
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComedianCard;
