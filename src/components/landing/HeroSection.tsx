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
    <div className="min-h-screen min-w-[1500px] bg-cover bg-center bg-no-repeat relative" style={{backgroundImage: 'url(/images/landing_bg.webp)'}}>
      <div>
        <div className="rounded-2xl p-20 backdrop-blur-sm  bg-gray-400 bg-opacity-30 shadow-md shadow-black/40 absolute left-1/4 top-1/4 -mt-32"> {/* bg-white/50 */} {/* left-1/4 top-1/4 translate-y-1/2 -mt-24 */}
          <h1 className="text-9xl font-bold text-[#F25C05]">
            {title}
          </h1>
        </div>
        <div className="absolute left-1/4 top-1/2 -ml-48 mt-12">
          <h2 className="text-6xl font-bold text-white">
            {subtitle}
          </h2>
          <div className="pt-12">
            <Link
            href={href}
            className="btn btn-lg btn-block text-base font-bold text-center text-white rounded-lg btn-primary hover:translate-y-0.5 transform transition">
            <p className="text-5xl">
            おすすめの芸人を診断する
            </p>
          </Link>
          </div>
          
        </div>
      



      </div>



    </div>
  );


};


{/* bg-[url('/images/laughing_people.jpg')] */ }