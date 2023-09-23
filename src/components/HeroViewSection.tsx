import React, { ReactNode } from "react";
import Link from "next/link";

interface FeatureCardProps {
  icon: ReactNode;
  subTitle: string;
  title: string;
  content: string;
  href: string;
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
  href,
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
          href={href}
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
  href,
}: FeatureCardProps) => {
  return (
    <div className="bg-info rounded-lg p-8 md:p-12 mb-8 flex flex-col justify-between">
      <div id="MAIN">
        <div
          className="bg-[#f6ddcd] text-[#732424] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
        >
          {icon}
          {subTitle}
        </div>
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
          href={href}
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
