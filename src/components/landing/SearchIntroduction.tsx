"use client";
import { motion, useScroll, useInView } from "framer-motion"
import Image from "next/image";
//import Link from "next/link";

export const SearchIntroduction = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        variants={{
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.5,
            },
          },
        }}
        className=""
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0 }}

      >
        <div className="md:flex md:pt-24 md:mt-64">
          <div>
            <h1 className={`md:text-5xl text-xl 
                            font-bold 
                            text-yellow-500 
                            md:mt-8`}
            >
              キーワード、<br className="md:block hidden"></br>芸風から検索！
            </h1>
            <p className={`md:text-xl text-black 
                          md:mt-8`}
            >
              Tendonでは、キーワードや芸風からの<br className="md:block hidden"></br>検索機能を<br className="md:hidden block"></br>用意しています。
            </p>
          </div>
          <div className={`md:px-4
                          md:mt-0 mt-4`}
          >
            <Image
              src={"/images/search_start.png"}
              alt="検索ページの図"
              width="650"
              height="320"
              className="p-4 mockup-window border border-base-300 md:block hidden"
            ></Image>
            <Image
              src={"/images/search_start.png"}
              alt="検索ページの図"
              width="320"
              height="320"
              className="p-2 mockup-window border border-base-300 md:hidden block"
            ></Image>
          </div>
        </div>
      </motion.div>
    </div>
  );
};