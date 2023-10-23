"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/firebase/context";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { Comedian } from "@/models/Comedian";

import { v4 as uuidv4 } from "uuid";

interface FavoriteAddButtonProps {
  comedian: Comedian;
}

export default function FavoriteAddButton({
  comedian,
}: FavoriteAddButtonProps) {
  const [comedians, setComedians] = useState<Comedian[]>([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const { user } = useAuth();

  async function handleSave() {
    comedian.id = uuidv4();
    await axios.post(`/api/favorite?userid=${user?.uid}`, comedian);
    setIsFavorite(true);
  }

  async function handleDelete() {
    await axios.delete(`/api/favorite?userid=${user?.uid}`);
    setIsFavorite(true);
  }



 useEffect(() => {
    (async () => {
      if (user?.uid) {
        const { data } = await axios.get(`/api/favorite?userid=${user.uid}`);
        console.log(data);
        setComedians(data);
        comedians.some((comedian_data) => comedian_data.id === comedian.id)
          ? setIsFavorite(true)
          : setIsFavorite(false);
      }
    })();
  }, [user?.uid]);


  return (
    <div className="">
      <p>お気に入り追加</p>
      <button onClick={handleSave}>{isFavorite ? "削除" : "追加"}</button>
    </div>
  );
}
