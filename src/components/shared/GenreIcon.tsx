import Image from "next/image";
import React from "react";

interface GenreIconProps {
  genre: string;
  imageSRC: string;
}

const GenreIcon = ({ genre, imageSRC }: GenreIconProps) => {
  return (
    <div>
      <div className={`bg-black 
                      hover:bg-slate-600 
                      p-2 
                      rounded-lg 
                      w-[50px] 
                      hover:w-[55px]`}
      >
        <Image src={imageSRC} alt={genre} width="40" height="40" />
      </div>
      <p className="text-sm">{genre}</p>
    </div>
  );
};

export default GenreIcon;