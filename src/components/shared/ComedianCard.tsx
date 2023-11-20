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
    "text-xs font-medium mr-2 text-center px-2.5 py-0.5 rounded text-white bg-transparent";

  const companyColor = convertComedianCompanyToColor(comedian);

  if (comedian.name == "undefined") {
    return null;
  }



  const badge = (input: number | undefined, text: String) => {
    if (input !== undefined && input > 0) {
      return (
        <div className="w-[80px]">
          <div
            id="BADGE"
            className={badgeClass}
            style={{ backgroundColor: companyColor }}
          >
            {text}
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="bg-[#F2F2F7] rounded-md card w-[250px] border bottom-1">
      {/* テキスト */}
      <div className="card-body max-h-[250px]">
        <h3 className="text-xl font-bold">{comedian.name}</h3>
        <div className="grid grid-cols-2  mt-2 gap-2">
          {badge(comedian.manzai, "漫才")}
          {badge(comedian.conte, "コント")}
          {badge(comedian.pin, "ピン")}
          {badge(comedian.ogiri, "大喜利")}
          {badge(comedian.rhythm, "リズム")}
          {badge(comedian.talk, "トーク")}
          {badge(comedian.sns, "SNS")}
          {badge(comedian.mimic, "ものまね")}
          {badge(comedian.gag, "ギャグ")}
        </div>
      </div>
      {/* 画像 */}

      <div
        className={
          "flex flex-col items-start justify-between h-[50px] rounded-b-lg" +
          companyColor
        }
        style={{
          backgroundColor: companyColor,
          borderRadius: "0px 0px 8px 8px",
        }}
      >
        {/* 画像
        {comedian.imageSRC && comedian.imageSRC !== "undefined" && (
          <Image
            src={comedian.imageSRC || dummyImageSRC} // comedian.imageSRCが存在しない場合にダミー画像を表示
            alt={comedian.name}
            layout="responsive"
            width={300}
            height={300}
            className=""
          />
        )}
        {comedian.imageSRC == "undefined" && (
          <Image
            src={dummyImageSRC} // comedian.imageSRCが存在しない場合にダミー画像を表示
            alt={comedian.name}
            layout="responsive"
            width={300}
            height={300}
            className=""
          />
        )}
         */}
        <h4 className="text-sm text-[#fff] pl-3 py-3">
          {convertComedianCompanyToString(comedian)}
        </h4>
      </div>
    </div>
  );
}

export default ComedianCard;
