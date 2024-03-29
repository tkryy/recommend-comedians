"use client";
import {
  Comedian,
  convertComedianCompanyToColor,
  convertComedianCompanyToString,
} from "@/models/Comedian";
import { useAuth } from "@/lib/firebase/context";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useComediansStore, useUserDataStore } from "@/lib/zustand/Stores";
import { StateManager, ViewState } from "@/models/StateManager";
import SkillBadges from "../shared/ComedianSkillBadgeFavorite";
import { SNSIconList } from "../shared/SNSIconList";

export default function FavoritesTable() {
  const { user } = useAuth();
  const [comedians, setComedians] = useState<Comedian[]>([]);
  //const [isLoading, setIsLoading] = useState(false);
  const [manager, setManager] = useState<StateManager>(new StateManager());

  useEffect(() => {
    manager.setState(ViewState.Loading);

    if (!user?.uid) return;

    (async () => {
      const data = await fetch(`/api/favorite?userid=${user?.uid}`);
      const favorites: Comedian[] = await data.json();
      useComediansStore.setState({
        comedians: favorites,
      });
      //console.log(favorites);
      setComedians(favorites);
      const newManager = new StateManager();
      newManager.setState(ViewState.Success);
      setManager(newManager);
      if (favorites.length === 0) {
        newManager.setState(ViewState.Success);
        setManager(newManager);
      }
    })();
  }, [user?.uid]);

  const renderFavoriteRow = (comedian: Comedian) => {
    const dummyImageSRC = "https://via.placeholder.com/200x200";
    const tdClassName = "mx-0 my-0 ";
    const tdTextClasses = "md:text-base text-[10px] text-[#8E8E93]";
    const companyColor = convertComedianCompanyToColor(comedian);
    const badgeClass =
      "md:text-sm text-[10px] font-medium  md:px-2.5 md:py-0.5 rounded text-white items-center text-center bg-transparent";
    let nameCSS = 'font-bold md:text-lg text-[10px] ';
    if (comedian.name.length>11) {
      nameCSS = 'font-bold text-[8px] md:text-[12px]';
    }

    let companyCSS = 'md:text-base text-[10px] text-[#8E8E93]';
    if (convertComedianCompanyToString(comedian).length>9) {
      companyCSS = 'text-[8px] md:text-[10px] text-[#8E8E93]';
    }

    return (
      <tr key={comedian.id} className="bg-white border-gray-200 hover:bg-info">
        <td className={tdClassName}>
          {/* 画像と名前 */}
          <div className={`flex items-center 
                          md:space-x-5 space-x-3 
                          md:min-w-[250px] min-w-[110px]`}
          >
            <div className="avatar">
              <div className="mask mask-squircle w-10 h-10">
                <Link href="/team_info">
                  {comedian.imageSRC === 'no_image' ? (
                    <Image
                      src="/icons/tendonIcon.svg"
                      alt="tendonIcon"
                      width="320"
                      height="320"
                      className="w-10 h-10"
                    ></Image>
                  ) : (
                    <Image
                      src={comedian.imageSRC || dummyImageSRC}
                      alt={comedian.name}
                      width="320"
                      height="320"
                      className="w-10 h-10"
                    ></Image>
                  )}
                </Link>
              </div>
            </div>
            <div>
              <Link href={`/application/favorite/${comedian.id}`}>
                <div className={nameCSS}>
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
            <p className={companyCSS}>
              {convertComedianCompanyToString(comedian)}
            </p>
          </div>
        </td>
        <td className={tdClassName+` hidden md:table-cell`}>
          {/* 結成年 */}
          <p className={tdTextClasses}>{comedian.birthYear}</p>
        </td>
        <td className={tdClassName}>
          {/* ジャンル */}
          <SkillBadges comedian={comedian} />
        </td>
        {/* <td className="hidden lg:table-cell">
          <SNSIconList comedian={comedian} />
        </td> */}

      </tr>
    );
  };

  if (manager.state == ViewState.Loading) {
    return <p>読み込み中</p>;
  }

  if (manager.state == ViewState.NoData) {
    return (
      <div className="text-center justify-center space-y-4">
        <Image
          src="/animations/BookMark.svg"
          alt="empty"
          width="400"
          height="400"
        />
        <p>まだ何も登録されていません</p>
        <p>お気に入りを探してみよう！</p>
        <div className="flex items-center justify-center space-x-5 ">
          <Link href="/application/recommend_comedians">
            <button className="btn btn-primary">AI診断を行う</button>
          </Link>
          <Link href="/application/search_comedians">
            <button className="btn btn-primary">検索する</button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className=" relative  shadow-md md:mx-8 ">
      <table className="table md:w-full text-left bg-[#F2F2F7]">
        {/* head */}
        <thead className={`md:text-sm text-xs  
                          text-gray-700 
                          uppercase 
                          bg-info`}
        >
          <tr>
            <th className="text-black">名前</th>
            <th className="text-black">所属事務所</th>
            <th className={`text-black
                            hidden md:table-cell`}
            >結成年</th>
            <th className="text-black">ジャンル</th>
            {/* <th className={`text-black hidden lg:table-cell`}>SNS</th> */}
          </tr>
        </thead>
        <tbody>{comedians.map(renderFavoriteRow)}</tbody>
      </table>
    </div>
  );
}
