import React, { ReactNode } from "react";
import Link from "next/link";

interface FeatureCardProps {
  icon: ReactNode;
  subTitle: string;
  title: string;
  content: string;
}

const renderContentWithLineBreaks = (text: string) => {
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

export const FeatureCard = ({
  icon,
  title,
  subTitle,
  content,
}: FeatureCardProps) => {


  return (
    <div className="flex flex-col justify-between bg-info rounded-lg p-8 md:p-12">
      <div id="MAIN">
        <div className="bg-[#f6ddcd] text-[#732424] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md  mb-2">
          {icon}
          {subTitle}
        </div>
        <h2 className="text-black text-3xl font-extrabold mb-2">{title}</h2>
        <p className="text-base font-normal  text-[#262526] mb-4">
          {" "}
          {renderContentWithLineBreaks(content)}
        </p>
      </div>
      <div id="LINK">
        <Link
          href="#"
          className="btn  text-base font-medium text-center text-white rounded-lg btn-primary  btn-outline"
        >
          Start!
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export const FeatureLargeCard = ({
  icon,
  subTitle,
  title,
  content,
}: FeatureCardProps) => {
  return (
    <div className="bg-info rounded-lg p-8 md:p-12 mb-8 flex flex-col justify-between">
      <div id="MAIN">
        <Link
          href="#"
          className="bg-[#f6ddcd] text-[#732424] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
        >
          <svg
            className="w-2.5 h-2.5 mr-1.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
          </svg>
          {subTitle}
        </Link>
        <h1 className="text-black text-3xl md:text-5xl font-extrabold mb-2">
          {title}
        </h1>
        <p className="text-lg font-normal text-[#262526d9] mb-6">
          {" "}
          {renderContentWithLineBreaks(content)}
        </p>
      </div>
      <div id="LINK">
        <Link
          href="/recommend_comedians"
          className="btn  text-base font-medium text-center text-white rounded-lg btn-primary "
        >
          Start!
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
