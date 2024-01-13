"use client";

import { motion, useScroll, useInView } from "framer-motion"
import Image from "next/image";
import Link from "next/link";

export const RecommendFor = () => {
  return (
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
      <div className="flex justify-center md:mt-64 mt-12">
        <div className=" md:block hidden">
          <Image
            src={"/icons/tendonIcon.svg"}
            alt="tendon"
            width={200}
            height={200}
          ></Image>
        </div>
      </div>

      <div className="flex justify-center flex-wrap ">
        <h1 className="md:text-5xl text-3xl font-bold text-yellow-500 mt-4 ">こんな方におすすめ！</h1>
      </div>
      <div className="flex justify-center">
        <p className="px-5 md:text-xl text-black md:mt-8 mt-4 ">Tendonは、最近芸人を推しはじめた人、たくさんを芸人を知りたい人など<br className="md:block hidden"></br>お笑いが好きな人はもちろん、お笑いに少しでも興味がある人にもおすすめです。</p>
      </div>
      <div className="flex justify-center">
        <p className="md:text-5xl text-xl font-bold text-yellow-500 md:mt-8 mt-4 ">自分の知らない好みの芸人を見つけよう！</p>
      </div>
    </motion.div>

  );
};