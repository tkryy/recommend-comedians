import { Comedian, convertComedianCompanyToColor } from "@/models/Comedian";

export default function TypeBadges({ comedian }: { comedian: Comedian }) {
  const badgeClass =
    "md:text-sm text-[10px] font-medium  md:px-2.5 md:py-0.5 rounded text-white items-center max-w-[100px] text-center bg-transparent";
  const companyColor = convertComedianCompanyToColor(comedian);

  return (
    <div className="grid md:grid-cols-2 md:gap-2 gap-1">
      {comedian.manzai !== 0 && (
        <div
          id="BADGE"
          className={badgeClass}
          style={{ backgroundColor: companyColor }}
        >
          漫才
        </div>
      )}
      {comedian.conte !== 0 && (
        <div
          id="BADGE"
          className={badgeClass}
          style={{ backgroundColor: companyColor }}
        >
          コント
        </div>
      )}
      {comedian.mimic !== 0 && (
        <div
          id="BADGE"
          className={badgeClass}
          style={{ backgroundColor: companyColor }}
        >
          ものまね
        </div>
      )}
      {comedian.rhythm !== 0 && (
        <div
          id="BADGE"
          className={badgeClass}
          style={{ backgroundColor: companyColor }}
        >
          歌ネタ
        </div>
      )}
      {comedian.ogiri !== 0 && (
        <div
          id="BADGE"
          className={badgeClass}
          style={{ backgroundColor: companyColor }}
        >
          大喜利
        </div>
      )}
    </div>
  );
}
