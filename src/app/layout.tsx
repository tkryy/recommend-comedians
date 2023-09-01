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
      <div className="flex">
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
      <Fotter />
      </body>
    </html>
  );
}
