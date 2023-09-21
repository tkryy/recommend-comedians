import Image from "next/image";

interface GenreIconProps {
  genre: string;
  imageSRC: string;
}

const GenreIcon = ({ genre, imageSRC }: GenreIconProps) => {
  return (
    <div className="flex justify-center">
    <div className="flex flex-col items-center justify-center h-[70px] w-[60px]">
      <div className="bg-black hover:bg-slate-600 p-2 rounded-lg w-[50px] hover:w-[55px]">
        <Image src={imageSRC} alt={genre} width="40" height="40" />
      </div>
      <p className="text-sm">{genre}</p>
    </div>
    </div>
  );
};

export default GenreIcon;
