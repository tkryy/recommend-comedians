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

/*export const Page = () => {
  useEffect(() => {
    ScrollFadeIn();
  }, []);
  return (
    <div className="js-show-on-scroll>
      ...
    </div>
  );
};  */

export default function Home() {
  return (
    <div className="">
      <BackgroundImage
        title="Tendon"
        subtitle="あなたの好みの芸人がきっと見つかる！！"
        href="/application/recommend_comedians"
      ></BackgroundImage>

      <ScrollFadeIn></ScrollFadeIn>

      <HowToUse></HowToUse>

      <SearchIntroduction></SearchIntroduction>

      <FavoriteIntroduction></FavoriteIntroduction>

      <RecommendFor></RecommendFor>

      <ContactForm></ContactForm>

      {/* <h1>ランディングページ</h1>
        <h2>まだ知らない芸人との出会いが！？</h2>
        <h3>あなたの好みの芸人がきっと見つかる！！</h3>
        <h4>あなたの好みの傾向がわかるかも！</h4> */}

      {/* 下に行くほど細かい情報
          二段目 診断ページのスクリーンショット、軽い使い方

          三段目 検索機能、診断機能、お気に入り
          四段目 こんなかたにおすすめ！
       */}
    </div>
  );
}

