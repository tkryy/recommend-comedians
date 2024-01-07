import {
    Comedian,
    convertComedianCompanyToString,
    convertComedianCompanyToColor,
} from "@/models/Comedian";
import SkillBadges from "./ComedianSkillBadge";
import Image from "next/image";
import FavoriteAddButton from "../auth/FavoriteAddButton";
import { SNSIconList } from "./SNSIconList";
import Link from "next/link";

interface ComedianCardProps {
    comedian: Comedian;
}

function ComedianCardwithInfo({ comedian }: ComedianCardProps) {
    const companyColor = convertComedianCompanyToColor(comedian);
    //console.log(comedian);

    if (comedian.name == "undefined") {
        return null;
    }

    return (
        <div className="bg-[#F2F2F7] rounded-md card border bottom-1 mx:20">
            <div className="card-body">
                <Link href={"/application/favorite/" + comedian.id}>
                    <button className="btn btn-ghost">
                        <h3 className="text-xl font-bold">{comedian.name}</h3>
                    </button>
                </Link>
                <SkillBadges comedian={comedian} />
                <FavoriteAddButton comedian={comedian} />
                <SNSIconList comedian={comedian} />
            </div>
            <div>
                {comedian.movie_link === 'no_link' ? (
                    <div className="md:w-[560px] h-[315px] items-center justify-center">
                        <Image
                            src={"/icons/tendonIcon.svg"}
                            width={"320"}
                            height={"320"}
                            alt={comedian.name}
                        //className="rounded-2xl md:w-[320px] w-[320px]"
                        ></Image>
                        <p>動画が存在しません...</p>
                    </div>
                ) : (
                    <iframe
                        width="560"
                        height="315"
                        src={comedian.movie_link}
                        title={"YouTube video player" + comedian.id}

                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                )}
            </div>
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

export default ComedianCardwithInfo;