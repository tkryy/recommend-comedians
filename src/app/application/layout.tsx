/* import "./globals.css";*/

import { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../../components/shared/Header";
import Sidebar from "../../components/shared/Sidebar";

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
      <Header />
      <div className={`lg:flex lg:flex-col
                      block content-start`}
      >
        <Sidebar />
        <div className={`xl:pl-56 md:pl-5 
                        min-h-screen  
                        flex  justify-top flex-col `}
        >
          <div className={`w-full 
                          flex flex-col content-start items-center justify-center 
                          my-24 `}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
