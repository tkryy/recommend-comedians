import {
  Comedian,
  convertComedianCompanyToString,
  convertComedianCompanyToColor,
} from "@/models/Comedian";
import SkillBadges from "./ComedianSkillBadge";

// ダミー画像のURL
const dummyImageSRC = "https://via.placeholder.com/200x200";

interface ComedianCardProps {
  comedian: Comedian;
}

function ComedianCard({ comedian }: ComedianCardProps) {
  const companyColor = convertComedianCompanyToColor(comedian);

  if (comedian.name == "undefined") {
    return null;
  }

  return (
    <div className="bg-[#F2F2F7] rounded-md card w-[250px] border bottom-1">
      {/* テキスト */}
      <div className="card-body max-h-[250px]">
        <h3 className="text-xl font-bold">{comedian.name}</h3>
        <SkillBadges comedian={comedian} />
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
