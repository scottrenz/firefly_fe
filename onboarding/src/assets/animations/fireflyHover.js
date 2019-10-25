import React from "react";
import Lottie from "react-lottie";
import animationData from "./fireflyHover.json";

const fireflyHover = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    isClickToPauseDisabled: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default fireflyHover;
