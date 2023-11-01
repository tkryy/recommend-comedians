"use client";
import { Player } from "@lottiefiles/react-lottie-player";

export const LottiePlayer = (props: any) => {
  const options = {
    loop: true,
    autoplay: true,
    animationData: props,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Player // set the ref to your class instance
      autoplay={true}
      loop={true}
      controls={true}
      src="/animations/SmartSearch.json"
      style={{ height: "300px", width: "300px" }}
    ></Player>
  );
};
