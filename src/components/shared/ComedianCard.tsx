import {
  Comedian,
  convertComedianCompanyToString,
  convertComedianCompanyToColor,
} from "@/models/Comedian";
import Link from "next/link";
import SkillBadges from "./ComedianSkillBadge";
import FavoriteAddButton from "../auth/FavoriteAddButton";

interface ComedianCardProps {
  comedian: Comedian;
}

function ComedianCard({ comedian }: ComedianCardProps) {
  const companyColor = convertComedianCompanyToColor(comedian);

  if (comedian.name == "undefined") {
    return null;
  }
  let nameCSS;
  if (comedian.name.length > 17) {
    nameCSS = 'text-[9px]';
  } else if (comedian.name.length > 12) {
    nameCSS = 'text-[10px]';
  } else if (comedian.name.length > 8) {
    nameCSS = 'text-xs';
  } else if (comedian.name.length > 6) {
    nameCSS = 'text-sm';
  } else {
    nameCSS = 'text-xl';
  }
  return (
    <div key={comedian.id} className="bg-[#F2F2F7] rounded-md card w-[300px] border bottom-1">
      {/* テキスト */}
      <div className="card-body max-h-[250px]">
        <Link href={"/application/favorite/" + comedian.id}>
          <button className="btn btn-ghost">
            <h3 className={nameCSS + " font-bold"}>{comedian.name}</h3>
          </button>
        </Link>
        <div className="flex flex-col">
          <SkillBadges comedian={comedian} />
          <FavoriteAddButton comedian={comedian} />
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
        <h4 className="text-sm text-[#fff] pl-3 py-3">
          {convertComedianCompanyToString(comedian)}
        </h4>
      </div>
    </div>
  );
}

export default ComedianCard;
