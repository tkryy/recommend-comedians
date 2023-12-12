"use client";

import { motion, useScroll, useInView } from "framer-motion"
import Image from "next/image";
import Link from "next/link";

export const HowToUse = () => {
  return (
    <div className="flex justify-center flex-wrap ml-4">
      <motion.div
      variants ={{
        offscreen: {
          opacity: 0,
        },
        onscreen: {
          y:0,
          opacity: 1,
          transition: {
            duration: 1.5,
          },
        },
      }}
      className="md:-ml-40"
      initial = "offscreen"
      whileInView = "onscreen"
      viewport = {{once: false, amount: 0}}
      
      >
        <h1 className="md:text-5xl text-2xl font-bold md:ml-24 ml-4 md:pt-8 pt-4 text-yellow-500">芸人名を入力、おすすめを提案！</h1>
        <p className="md:text-xl text-base w-full md:ml-0 md:p-8 p-2 ">あなたの好みの芸人名を入力すると、入力した芸人と<br className="md:hidden"></br>似ている芸人をAIが判断して、おすすめを提案します！</p>
      </motion.div>
      
      <motion.div
      variants ={{
        offscreen: {
          opacity: 0,
        },
        onscreen: {
          y:0,
          opacity: 1,
          transition: {
            duration: 1.5,
          },
        },
      }}
      className=""
      initial = "offscreen"
      whileInView = "onscreen"
      viewport = {{once: false, amount: 0}}
      
      >
        <div className="md:flex justify-center md:space-x-5 md:-ml-44 -ml-4 md:p-0 p-16 md:mt-0 -mt-12">
        <Image
          src={"/images/recommend_exam03.png"}
          alt="診断ページの図1"
          width="500"
          height="320"
          className="mockup-window border border-base-300 md:mb-0 mb-4 md:block hidden"
        ></Image>
        <Image
          src={"/images/recommend_exam04.png"}
          alt="診断ページの図2"
          width="500"
          height="320"
          className="mockup-window border border-base-300 md:block hidden"
        ></Image>
        <Image
          src={"/images/recommend_exam03.png"}
          alt="診断ページの図1"
          width="320"
          height="320"
          className="mockup-window border border-base-300 md:mb-0 mb-4 block md:hidden"
        ></Image>
        <Image
          src={"/images/recommend_exam04.png"}
          alt="診断ページの図2"
          width="320"
          height="320"
          className="mockup-window border border-base-300 block md:hidden"
        ></Image>
      </div>


      </motion.div>
      
    </div>
  );
};