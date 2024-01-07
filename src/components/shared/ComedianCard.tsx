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

  return (
    <div className="bg-[#F2F2F7] rounded-md card w-[300px] border bottom-1">
      {/* テキスト */}
      <div className="card-body max-h-[250px]">
        <Link href={"/application/favorite/" + comedian.id}>
          <button className="btn btn-ghost">
            <h3 className="sm:text-xs md:text-xl font-bold">{comedian.name}</h3>
          </button>
        </Link>
        <SkillBadges comedian={comedian} />
        <FavoriteAddButton comedian={comedian} />
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
