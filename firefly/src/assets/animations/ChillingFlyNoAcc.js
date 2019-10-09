import React from "react";
import Lottie from "react-lottie";
import animationData from "./chillingFlyNoAcc.json";

const ChillingFlyNoAcc = ({ height = 160, width = 160 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    // isClickToPauseDisabled: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <Lottie
      options={defaultOptions}
      height={height}
      width={width}
      isClickToPauseDisabled={true}
    />
  );
};

export default ChillingFlyNoAcc;
