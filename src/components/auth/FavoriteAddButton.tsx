"use client";
import { useState, useEffect } from "react";
import { useUserDataStore } from "@/lib/zustand/Stores";
import { useAuth } from "@/lib/firebase/context";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Comedian } from "@/models/Comedian";

interface FavoriteAddButtonProps {
  comedian: Comedian;
}

/**
 * Renders a favorite add button component.
 *
 * @param {FavoriteAddButtonProps} props - The props object containing the comedian.
 * @return {JSX.Element} The rendered favorite add button component.
 */
export default function FavoriteAddButton({
  comedian,
}: FavoriteAddButtonProps) {
  const [comedians, setComedians] = useState<Comedian[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const { user } = useAuth();
  const userData = useUserDataStore((state) => state.userData);
  //console.log(userData.uid)

  /* Googleでログインしていない場合にお気に入りボタンを押すとログイン画面へ */
  if (userData.uid === '') {
    return (
      <div className="w-full">
        <label htmlFor="modal_recommend" className="btn btn-ghost">
        <Image
            src={"/icons/BookMark.svg"}
            alt={comedian.name}
            width={30}
            height={30}
          />
        </label>
        <input type="checkbox" id="modal_recommend" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box bg-white mb-8 flex flex-col justify-center items-center">
            <p className="p-4">お気に入り機能を使う場合はGoogleアカウントでのログインが必要です。</p>
            <Link href={'/application/login'} className={`btn btn-lg btn-block btn-primary
                                                  text-base text-black text-center font-bold  
                                                  rounded-lg 
                                                  hover:translate-y-0.5 
                                                  transform 
                                                  transition
                                                  border-none
                                                  bg-gray-100
                                                  w-[210px]`}
            >
              <p>ログインページへ</p>
            </Link>
          </div>
          <label className="modal-backdrop" htmlFor="modal_recommend">Close</label>
        </div>
      </div>
    );
  }

  async function handleSave() {
    await axios.post(`/api/favorite?userid=${userData.uid}`, comedian);
    setIsFavorite(true);
  }

  async function handleDelete() {
    await axios.patch(
      `/api/favorite?userid=${userData.uid}&comedianId=${comedian.id}`,
      comedian
    );
    setIsFavorite(false);
  }

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/favorite?userid=${userData.uid}`);
      const comedians = data;
      //console.log(comedian.id);
      //console.log(comedians);
      setComedians(data);

      setIsFavorite(
        comedians.some(
          (comedian_data: Comedian) => comedian_data.id === comedian.id
        )
      );
      console.log(isFavorite);
    })();
  }, []);

  return (
    <div className="flex">
      {isFavorite ? (
        <button className="btn btn-ghost" onClick={handleDelete}>
          <Image
            src="/icons/BookMark_fill.svg"
            alt={comedian.name}
            width={30}
            height={30}
          />
        </button>
      ) : (
        <button className="btn btn-ghost" onClick={handleSave}>
          <Image
            src={"/icons/BookMark.svg"}
            alt={comedian.name}
            width={30}
            height={30}
          />
        </button>
      )}
    </div>
  );
}
