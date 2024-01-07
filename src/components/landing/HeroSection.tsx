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
    <div className={`md:min-h-screen min-h-[450px] 
                    w-screen 
                    bg-cover 
                    bg-center 
                    bg-no-repeat 
                    relative `} 
          style={{backgroundImage: 'url(/images/landing_bg.webp)'}}
    >
      <div>
        <div className={`rounded-2xl 
                        md:p-20 p-2 
                        backdrop-blur-sm  
                        bg-gray-400 
                        bg-opacity-30 
                        shadow-md 
                        shadow-black/40 
                        absolute 
                        md:left-1/4 
                        md:top-1/4 top-1/2 
                        -mt-32 
                        md:ml-0 ml-16`}
        > 
          <h1 className="md:text-9xl text-7xl font-bold text-[#F25C05]">
            {title}
          </h1>
        </div>
        <div className={`absolute 
                        md:left-1/4 
                        top-1/2 
                        md:-ml-48 ml-8 
                        md:mt-12 `}
        >
          <h2 className="md:text-6xl text-xl font-bold text-white">
            {subtitle}
          </h2>
          <div className="md:pt-12 pt-8">
            <Link
            href={href}
            className={`btn btn-lg btn-block btn-primary
                        text-base 
                        font-bold 
                        text-center 
                        text-white 
                        rounded-lg 
                        hover:translate-y-0.5 
                        transform 
                        transition`}
          >
            <p className="md:text-5xl text-2xl">
            おすすめの芸人を診断する
            </p>
          </Link>
          </div>        
        </div>
      </div>
    </div>
  );
};