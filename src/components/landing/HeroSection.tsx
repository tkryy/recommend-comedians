import Image from "next/image";
import Link from "next/link";
/* import {
  ScrollFadeIn 
} from "@/components/landing/ScrollFadein"; */

interface BackgroundImageProps {
  title: string;
  subtitle: string;
  href: string;
}

export const BackgroundImage = ({
  title,
  subtitle,
  href,
}: BackgroundImageProps) => {

  return (
    <div className={` min-h-[450px] 
                    w-screen 
                    bg-cover 
                    bg-center 
                    bg-no-repeat 
                    py-20`} 
          style={{backgroundImage: 'url(/images/landing_bg.webp)'}}
    >
      <div className="flex flex-col justify-center">
        <div className=" flex justify-center">
        <div className={`rounded-2xl 
                        md:p-20 p-2 
                        w-[300px] md:w-[500px]
                        backdrop-blur-sm  
                        bg-gray-400 
                        bg-opacity-30 
                        shadow-md 
                        shadow-black/40 
                        flex justify-center items-center`}
        > 
          <h1 className="md:text-9xl text-7xl font-bold text-[#F25C05]">
            {title}
          </h1>
          </div>
        </div>
        <div className={`pt-20 flex flex-col justify-center items-center`}
        >
          <h2 className="text-xl md:text-2xl lg:text-5xl  font-bold text-white">
            {subtitle}
          </h2>
          <div className="md:pt-12 pt-8">
            <Link
            href={href}
            className={`btn btn-lg btn-block btn-primary
                        text-base text-white text-center font-bold  
                        rounded-lg 
                        hover:translate-y-0.5 
                        transform 
                        transition`}
          >
            <p className="lg:text-4xl text-2xl">
            おすすめの芸人を診断する
            </p>
          </Link>
          </div>        
        </div>
      </div>
    </div>
  );
};