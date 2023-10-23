"use client";
import { ComediansState, useComediansStore } from "@/lib/zustand/Stores";
import { create } from 'zustand'
import Image from "next/image";
import {
  Comedian,
  dummyData,
  convertComedianCompanyToString,
  convertComedianCompanyToColor,
} from "@/models/Comedian";
import { useEffect } from "react";
import Link from "next/link";
import PageTitle from "@/components/shared/PageTitle";
export default function Favorite() {
  const renderFavoriteRow = (comedian: Comedian) => {
    const dummyImageSRC = "https://via.placeholder.com/200x200";
    const tdClassName = "mx-0 my-0 ";
    const tdTextClasses = "md:text-base text-[10px] text-[#8E8E93]";
    const companyColor = convertComedianCompanyToColor(comedian);
    const badgeClass =
      "md:text-sm text-[10px] font-medium  md:px-2.5 md:py-0.5 rounded text-white items-center text-center bg-transparent";

    return (
      <tr className="bg-white border-gray-200 hover:bg-info">
        <td className={tdClassName}>
          {/* 画像と名前 */}
          <div className="flex items-center md:space-x-5 space-x-3 md:min-w-[250px] min-w-[110px]">
            <div className="avatar">
              <div className="mask mask-squircle w-10 h-10">
                <Link href="/team_info">
                  <Image
                    src={comedian.imageSRC || dummyImageSRC}
                    alt={comedian.name}
                    width="320"
                    height="320"
                    className="w-10 h-10"
                  ></Image>
                </Link>
              </div>
            </div>
            <div>
              <Link href={`/application/favorite/${comedian.id}`}>
                <div className="font-bold md:text-lg text-[10px] ">
                  {comedian.name}
                </div>
              </Link>
            </div>
          </div>
        </td>
        <td className={tdClassName}>
          {/* 所属事務所 */}
          <div className="md:flex items-center">
            <div
              className="h-2.5 w-2.5 rounded-full mr-2"
              style={{
                backgroundColor: convertComedianCompanyToColor(comedian),
              }}
            ></div>
            <p className={tdTextClasses}>
              {convertComedianCompanyToString(comedian)}
            </p>
          </div>
        </td>
        <td className={tdClassName}>
          {/* 結成年 */}
          <p className={tdTextClasses}>{comedian.birthYear}</p>
        </td>
        <th className={tdClassName}>
          {/* ジャンル */}
          <div className="grid md:grid-cols-2 md:gap-2 gap-1">
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
        </th>
      </tr>
    );
  };


useEffect(() => {
  useComediansStore.setState({
    comedians: dummyData
  })
})
  
  return (
    <div>
      <PageTitle title="お気に入り" />
      <div className="flex flex-col items-center">
        <div className=" relative  shadow-md md:mx-8 ">
          <table className="table md:w-full text-left bg-[#F2F2F7]">
            {/* head */}
            <thead className="md:text-sm text-xs  text-gray-700 uppercase bg-info">
              <tr>
                <th className="text-black">名前</th>
                <th className="text-black">所属事務所</th>
                <th className="text-black">結成年</th>
                <th className="text-black">ジャンル</th>
              </tr>
            </thead>
            <tbody>{dummyData.map(renderFavoriteRow)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
