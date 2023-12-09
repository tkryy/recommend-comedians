import "./globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header_landing from "../components/shared/Header_landing";
/*
import Sidebar from "../components/shared/Sidebar";*/
import Footer_landing from "../components/shared/Footer_landing";

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
        <Header_landing />
        <div className="lg:flex block mb-9">
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
        </div>
        <Footer_landing />
      </body>
    </html>
  );
}
