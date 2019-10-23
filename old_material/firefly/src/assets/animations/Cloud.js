import React from "react";
import Lottie from "react-lottie";
import animationData from "./cloud.json";

const Cloud = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    isClickToPauseDisabled: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return <Lottie options={defaultOptions} height={400} width={400} />;
};

export default Cloud;
