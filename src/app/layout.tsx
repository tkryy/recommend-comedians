import "./globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header3 from "../components/shared/Header3";
/*
import Sidebar from "../components/shared/Sidebar";*/
import Fotter_landing from "../components/shared/Fotter_landing"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tendon-芸人おすすめサイト",
  description: "好きな芸人を探そう！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header3 />
        <div className="lg:flex block">
          {/* <Sidebar /> */}
          <div className="bg-white mt-16">
            {" "}
            {/* lg:pl-56 pl-0 min-h-screen w-screen flex items-center flex-col */}
            <div className=" ">
              {" "}
              {/* lg:min-w-[1200px]  md:mx-5 my-24 */}
              {children}
            </div>
          </div>
          <Fotter_landing />
        </div>
      </body>
    </html>
  );
}
