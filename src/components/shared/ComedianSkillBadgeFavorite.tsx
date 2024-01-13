import {
  Comedian,
  convertComedianCompanyToString,
  convertComedianCompanyToColor,
} from "@/models/Comedian";

interface SkillBadgeProps {
  comedian: Comedian;
  number: number | undefined;
  text: string;
}

function ComedianSkillBadge({
  comedian,
  number,
  text,
}: SkillBadgeProps) {
  const badgeClass =
    "text-xs font-medium mr-2 text-center px-2.5 py-0.5 rounded text-white bg-transparent";

  const companyColor = convertComedianCompanyToColor(comedian);

  if (number == undefined) {
    return null;
  }

  if (number !== undefined && number > 0) {
    return (
      <div className="w-[80px] mx-1">
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
}

export default function SkillBadges({comedian} : {comedian: Comedian}) {
    return(
        <div className={`grid 
                        grid-cols-1
                        gap-1`}
        >
          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.manzai}
            text="漫才"
          />
          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.conte}
            text="コント"
          />
          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.pin}
            text="ピン"
          />
          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.ogiri}
            text="大喜利"
          />
          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.rhythm}
            text="リズム"
          />
          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.talk}
            text="トーク"
          />
          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.sns}
            text="SNS"
          />

          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.mimic}
            text="ものまね"
          />
          <ComedianSkillBadge
            comedian={comedian}
            number={comedian.gag}
            text="ギャグ"
          />
        </div>
    )
}