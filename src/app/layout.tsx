import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

/* import Header from "../components/Header";  */
/* import Header2 from "../components/Header2";  */
import Header3 from "../components/Header3";
import Sidebar from "../components/Sidebar";
import Fotter from "../components/Fotter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "芸人おすすめサイト",
  description: "好きな芸人を探そう！",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header3 />
        <div className="lg:flex block">
          <Sidebar />
          <div className="lg:pl-56 pl-0 min-h-screen w-screen flex items-center flex-col bg-white ">
            <div className="lg:min-w-[1200px] md:px-9 md:mx-5 my-24 ">
              {children}
            </div>
          </div>
          <Fotter />
        </div>
      </body>
    </html>
  );
}
