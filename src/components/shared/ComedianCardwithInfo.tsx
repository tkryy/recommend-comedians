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

    let nameCSS = 'text-xl';
    if (comedian.name.length > 14) {
        nameCSS = 'sm:text-lg md:text-xl';
    }

    return (
        <div className="bg-[#F2F2F7] rounded-md card border bottom-1 mx:20">
            <div className="card-body">
                <Link href={"/application/favorite/" + comedian.id}>
                    <button className="btn btn-ghost">
                        <h3 className={nameCSS+" font-bold"}>{comedian.name}</h3>
                    </button>
                </Link>
                <div className="flex flex-col">
                    <SkillBadges comedian={comedian} />
                    <FavoriteAddButton comedian={comedian} />
                </div>
                <SNSIconList comedian={comedian} />
            </div>
            <div className="md:hidden">
                {comedian.movie_link === 'no_link' ? (
                    <div className="md:w-[560px] md:h-[315px]">
                        <div className="flex items-center justify-center">
                            <Image
                                src={"/icons/tendonIcon.svg"}
                                width={"80"}
                                height={"80"}
                                alt={comedian.name}
                            //className="rounded-2xl md:w-[320px] w-[320px]"
                            ></Image>
                        </div>
                        <p className="flex justify-center">動画が存在しません...</p>
                    </div>
                ) : (
                    <div className="flex justify-center items-center ">
                        <iframe
                            width="320"
                            height="180"
                            src={comedian.movie_link}
                            title={"YouTube video player" + comedian.id}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
                )}
            </div>
            <div className="hidden md:block">
                {comedian.movie_link === 'no_link' ? (
                    <div className="md:w-[560px] h-[315px]">
                        <div className="flex justify-center">
                            <Image
                                src={"/icons/tendonIcon.svg"}
                                width={"250"}
                                height={"250"}
                                alt={comedian.name}
                            ></Image>
                        </div>
                        <p className="flex justify-center">動画が存在しません...</p>
                    </div>
                ) : (
                    <div className="flex justify-center items-center">
                        <iframe
                            width="560"
                            height="315"
                            src={comedian.movie_link}
                            title={"YouTube video player" + comedian.id}

                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        ></iframe>
                    </div>
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