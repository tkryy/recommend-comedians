import React, { useState, useEffect } from "react";

const TypingAnimation: React.FC<{
  text: string;
  onAnimationComplete?: () => void;
}> = ({ text, onAnimationComplete }) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
        // アニメーションが終了したことを親コンポーネントに通知
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
    }, 40); // タイピング速度（ミリ秒）

    return () => {
      clearInterval(typingInterval);
    };
  }, [currentIndex, text, onAnimationComplete]);

  return <code >{displayText}</code>;
};

export default TypingAnimation;
