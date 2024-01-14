"use client";

import { motion, useScroll, useInView } from "framer-motion"
import Image from "next/image";
import Link from "next/link";

export const FavoriteIntroduction = () => {
  return (
    <div className="flex justify-center px-1">
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
        <div className="md:flex md:pt-24 md:mt-64 mt-12">
          <Image
            src={"/images/favorite_table.png"}
            alt="お気に入りページの図"
            width="500"
            height="320"
            className="p-2 mockup-window border border-base-300 md:block hidden"
          ></Image>

          <div className=" flex flex-col justify-center items-center mx-8">
            <h1 className="md:text-5xl text-xl font-bold text-yellow-500 mt-4">お気に入り機能</h1>
            {/* <p className="md:text-xl text-black md:mt-8">Tendonでは、新たに発見したお気に入りの芸人を<br></br>記録できます。</p> */}
            <p className="md:text-xl text-black md:mt-8">Tendonでは、新たに発見したお気に入りの芸人を記録できます。</p>
            <p className="md:text-xl text-black">あなただけのお気に入りの芸人リストを作りましょう。</p>
          </div>
          <div className="flex justify-center">
          <Image
            src={"/images/favorite_table.png"}
            alt="お気に入りページの図"
            width="320"
            height="320"
            className="p-1 mt-2 mockup-window border border-base-300 md:hidden block"
          ></Image>
          </div>
        </div>
      </motion.div>
    </div>
  );
};