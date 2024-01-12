"use client";
import { useComediansStore } from "@/lib/zustand/Stores";
import { useRouter } from "next/navigation";
import {
  convertComedianCompanyToString,
  convertComedianCompanyToColor,
} from "@/models/Comedian";
import RatingDataView from "@/components/shared/RatingDataView";
import TypeBadges from "@/components/shared/TypeBadges";
import FavoriteAddButton from "@/components/auth/FavoriteAddButton";
import Image from "next/image";
import { SNSIconList } from "@/components/shared/SNSIconList";
import SkillBadges from "@/components/shared/ComedianSkillBadge";
export default function Page({ params }: { params: { slug: string } }) {
  const comedians = useComediansStore((state) => state.comedians);
  const comedian = comedians.find((comedian) => comedian.id === params.slug);

  const labelClassName = "md:text-2xl text-[#F25C05] font-bold";
  const dataClassName = "md:text-xl";
  const tdTextClasses = "md:text-base text-[10px] text-[#8E8E93]";
  const badgeClass =
    "md:text-sm text-[10px] font-medium  md:px-2.5 md:py-0.5 rounded text-white items-center text-center bg-transparent";
  const router = useRouter();

  if (!comedian) {
    router.push("/application/favorite");
    return <div>404</div>;
  }

  const companyColor = convertComedianCompanyToColor(comedian);
  
  let nameCSS = 'md:text-6xl';
  if (comedian.name.length > 8) {
    nameCSS = 'md:text-xl lg:text-4xl';
  }

  return (
    <div className={`flex flex-col items-center justify-center
                    space-y-9 
                    md:max-w-6xl max-w-sm 
                    p-1 
                    w-full`}
    >
      <div
        id="HEADER"
        className={`bg-[#D9D9D9] 
                    md:flex items-center justify-start
                    block 
                    md:space-x-9 space-x-3  
                    rounded-3xl 
                    p-5 
                    w-full`}
      >
        <div id="LEFT" className="">
          <a
            href={comedian.homePageURL}
            className="flex items-center justify-center"
          >
            {comedian.imageSRC === 'no_image' ? (
              <Image
                src="/icons/tendonIcon.svg"
                alt="tendonIcon"
                width={320}
                height={320}
                className="w-320 h-320"
              ></Image>
            ) : (
              <Image
                src={comedian.imageSRC || "/icons/tendonIcon.svg"}
                alt={comedian.name}
                width="320"
                height="320"
                className="w-320 h-320"
              ></Image>
            )}
          </a>
        </div>
        <div
          id="RIGHT"
          className="flex flex-col md:max-w-96 text-black py-5 max-h-[380px] "
        >
          <h2 className={nameCSS+" text-lg font-bold mb-3"}>
            {comedian.name}
          </h2>
          <div>
            <p className="md:text-base text-xs">最終更新日: {comedian.updated_at}</p>
          </div>
          <div className="lg:flex">
            <div className={`flex`}
            >
              <SkillBadges comedian={comedian} />
              <div className="lg:flex justify-center mt-3 p-1">
                <FavoriteAddButton comedian={comedian} />
              </div>
            </div>
            <div className="md:mt-3 mt-5 ml-2 md:ml-0 flex lg:justify-center items-center">
              <SNSIconList comedian={comedian} />
            </div>
          </div>
        </div>
      </div>

      <div className={`my-9 block 
                      md:flex 
                      md:flex-col 
                      w-full
                      items-center justify-center `}
      >
        <div className={`flex flex-col lg:flex-row justify-center items-center 
                        lg:space-x-5 `}
        >
          {/* プロフィール */}
          <div className={`min-w-[352px] md:min-w-[560px] lg:min-w-[414px] 
                          md:min-h-[315px]
                          space-y-3
                          border-2 border-gray-300 
                          md:p-9 p-3`}
          >
            <div className="flex items-center">
              <h3 className={labelClassName}>結成年：</h3>
              <h3 className={dataClassName}>{comedian.birthYear}</h3>
            </div>
            <div className="flex">
              <p className={labelClassName}>所属事務所：</p>
              <p className={dataClassName}>
                {convertComedianCompanyToString(comedian)}
              </p>
            </div>

            <div className="flex">
              <p className={labelClassName}>どんな芸人？</p>
            </div>

            <p className="mt-3 md:text-base text-xs">
              {comedian.info}
            </p>
          </div>
          {/* 動画 sm */}
          <div className={`flex flex-col items-center justify-center space-y-5
                          md:mt-0 mt-4
                          md:hidden`}>
            {comedian.movie_link === 'no_link' ? (
              <div className="flex justify-center items-center">
                <Image
                  src={"/icons/tendonIcon.svg"}
                  width={"80"}
                  height={"80"}
                  alt={comedian.name}
                  className="rounded-2xl md:w-[560px] w-[315px]"
                ></Image>
              </div>
            ) : (
              <iframe
                width="352"
                height="198"
                src={comedian.movie_link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            )}
          </div>
          {/* 動画 md */}
          <div className={`flex flex-col items-center justify-center
                          md:mt-0 mt-4 
                          lg:p-0 p-2 
                          space-y-5 
                          hidden md:table-cell`}
          >
            {comedian.movie_link === 'no_link' ? (
              <Image
                src={"/icons/tendonIcon.svg"}
                width={"315"}
                height={"315"}
                alt={comedian.name}
                className=""
              ></Image>
            ) : (
              <iframe
                width="560"
                height="315"
                src={comedian.movie_link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
