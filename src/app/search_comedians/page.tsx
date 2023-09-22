"use client";

import { getComedianNamePredict } from "@/lib/gradio";
import { useState } from "react";
import PageTitle from "@/components/PageTitle";
import { Comedian, dummyData } from "@/models/Comedian";
import ComedianCard from "@/components/ComedianCard";
import GenreIcon from "@/components/GenreIcon";






export default function Search_comedians() {
 

  return (
    <div>
      <PageTitle title="芸人を探す" />
      {/*　検索ページ */}
      <div className="space-y-4">
       
        {/* キーワード検索 */}
        <div className="space-y-4 items-center justify-between">
          <h2 className="text-2xl font-bold">キーワード検索</h2>
          <div className="flex items-center justify-center">
            <input
              type="text"
              placeholder="「ものまね」「歌ネタ」などキーワードを入力！"
              className="input input-bordered md:w-96 w-full text-black bg-gray-300"
            />
            <button className="btn text-white bg-[#732C02] hover:opacity-75 ml-2">
              検索
            </button>
          </div>
        </div>
        {/* 芸風検索 */}
        {/* ボタンにして絞り込みができるようにする */}
        <div className="space-y-4 items-center justify-center">
          <h2 className="text-2xl font-bold text-start">芸風から探す</h2>
          <div className="grid md:grid-cols-6 grid-cols-3 md:gap-0 gap-3 px-12">
            <GenreIcon
              genre="漫才"
              imageSRC="/icons/mic_FILL0_wght400_GRAD0_opsz24_white.svg"
            />

            <GenreIcon
              genre="コント"
              imageSRC="/icons/sports_kabaddi_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="大喜利"
              imageSRC="/icons/edit_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="歌ネタ"
              imageSRC="/icons/music_note_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="ものまね"
              imageSRC="/icons/group_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
            <GenreIcon
              genre="ピン芸人"
              imageSRC="/icons/emoji_people_FILL0_wght400_GRAD0_opsz24_white.svg"
            />
          </div>
        </div>

        {/* トレンド */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-2xl font-bold">トレンド</h2>
          <div className="grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-5 md:px-0 px-12">
            {dummyData.map((comedian: Comedian) => (
              <ComedianCard comedian={comedian} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
