import {
  Comedian,
  convertComedianCompanyToString,
  convertComedianCompanyToColor,
} from "@/models/Comedian";

import Image from "next/image";

// ダミー画像のURL
const dummyImageSRC = "https://via.placeholder.com/200x200";

interface ComedianCardProps {
  comedian: Comedian;
}

function ComedianCard({ comedian }: ComedianCardProps) {
  const size = 400;
  const badgeClass =
    "text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-white bg-transparent";

  const companyColor = convertComedianCompanyToColor(comedian);
  return (
    <div className="bg-[#F2F2F7] rounded-md card max-w-[220px] shadow-2xl">
      {/* テキスト */}
      <div className="card-body max-h-[250px]">
        <h3 className="text-xl font-bold">{comedian.name}</h3>

        <div className="flex mt-2 space-x-1">
          {comedian.manzai && (
            <div
              id="BADGE"
              className={badgeClass}
              style={{ backgroundColor: companyColor }}
            >
              漫才
            </div>
          )}
          {comedian.conte && (
            <div
              id="BADGE"
              className={badgeClass}
              style={{ backgroundColor: companyColor }}
            >
              コント
            </div>
          )}
          {comedian.mimic && (
            <div
              id="BADGE"
              className={badgeClass}
              style={{ backgroundColor: companyColor }}
            >
              ものまね
            </div>
          )}
          {comedian.alone && (
            <div
              id="BADGE"
              className={badgeClass}
              style={{ backgroundColor: companyColor }}
            >
              ピン
            </div>
          )}
          {comedian.rhythm && (
            <div
              id="BADGE"
              className={badgeClass}
              style={{ backgroundColor: companyColor }}
            >
              歌ネタ
            </div>
          )}
          {comedian.ogiri && (
            <div
              id="BADGE"
              className={badgeClass}
              style={{ backgroundColor: companyColor }}
            >
              大喜利
            </div>
          )}
        </div>
      </div>
      {/* 画像 */}

      <div
        className={
          "flex flex-col items-start justify-between min-h-[265px] rounded-b-lg" +
          companyColor
        }
        style={{
          backgroundColor: companyColor,
          borderRadius: "0px 0px 8px 8px",
        }}
      >
        <Image
          src={comedian.imageSRC || dummyImageSRC} // comedian.imageSRCが存在しない場合にダミー画像を表示
          alt={comedian.name}
          layout="responsive"
          width={300}
          height={300}
          className=""
        />
        <h4 className="text-sm text-[#fff] pl-3 py-3">
          {convertComedianCompanyToString(comedian)}
        </h4>
      </div>
    </div>
  );
}

export default ComedianCard;
