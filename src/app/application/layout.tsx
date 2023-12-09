/* import "./globals.css";*/

import { Metadata } from "next";
import { Inter } from "next/font/google";

import Header3 from "../../components/shared/Header3";
import Sidebar from "../../components/shared/Sidebar";
import Fotter from "../../components/shared/Fotter";

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
    <div>
      <Header3 />
      <div className="lg:flex block content-start">
        <Sidebar />
        <div className="lg:pl-56 pl-0 min-h-screen  flex  justify-top flex-col  ">
          <div className="lg:min-w-[1200px] w-full flex flex-col content-start items-center justify-center md:mx-5 my-24 ">
            {children}
          </div>
        </div>
        {/* <Fotter /> */}
      </div>
    </div>
  );
}
