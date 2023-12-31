import {
  FeatureCard,
  FeatureLargeCard,
} from "@/components/home/HeroViewSection";
import { GoogleLogInButton } from "@/components/auth/LoginButtons";

export default function Home() {
  return (
    <div>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-7">
          <FeatureLargeCard
            icon={
              <svg
                className="w-2.5 h-2.5 mr-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
              </svg>
            }
            subTitle="Artificial Intelligence"
            title="AIがおすすめのお笑い芸人を診断！"
            content={
              "好きな芸人やネタの傾向を入力すると、それに似た芸人をAIが判断し、おすすめを提案します！\nあなた好みの笑いが必ず見つかります！自分ではわからない、思わぬ笑いのツボが見つかるかも・・・"
            }
            href="/application/recommend_comedians"
          />
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              icon={
                <svg
                  className="w-2.5 h-2.5 mr-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                </svg>
              }
              subTitle="Data"
              title="お笑いデータベース"
              content="ネタの形式はもちろん、芸風やテンポまで独自に分析！詳細なデータから自分好みの笑いを見つけ出すお手伝いをします。"
              href="/application/search_comedians"
            />
            <FeatureCard
              icon={
                <svg
                  className="w-2.5 h-2.5 mr-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                  />
                </svg>
              }
              subTitle="Customize"
              title="あなたのデータを追加"
              content="「好きな芸人さんが登録されてない・・」そんな時は力を貸してください！あなたのデータでアプリが改善されます！"
              href="/application/add_data"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
