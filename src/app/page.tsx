/* ランディングページ */
import Image from "next/image";
import Link from "next/link";
import { BackgroundImage } from "@/components/landing/HeroSection";

import {
  ScrollFadeIn,
} from "@/components/landing/ScrollFadein";

import {
  HowToUse,
} from "@/components/landing/HowToUse";

import {
  SearchIntroduction,
} from "@/components/landing/SearchIntroduction";

import {
  FavoriteIntroduction,
} from "@/components/landing/FavoriteIntroduction";

import {
  RecommendFor,
} from "@/components/landing/RecommendFor";

import {
  ContactForm,
} from "@/components/landing/ContactForm";

export default function Home() {
  return (
    <div className="">
      <BackgroundImage
        title="Tendon"
        subtitle="あなたの好みの芸人がきっと見つかる！！"
        href="/application/recommend_comedians"
      ></BackgroundImage>

      {/* <ScrollFadeIn></ScrollFadeIn> */}

      <HowToUse></HowToUse>

      <SearchIntroduction></SearchIntroduction>

      <FavoriteIntroduction></FavoriteIntroduction>

      <RecommendFor></RecommendFor>

      <ContactForm></ContactForm>

    </div>
  );
}

