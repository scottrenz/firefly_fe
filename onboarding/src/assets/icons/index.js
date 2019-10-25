import React from "react";
import Firefly from "./firefly/Firefly";
import ProfileFly from "./ProfileFly";
import LambdaHat from "./accessories/LambdaHat";
import LambdaHatSM from "./accessories/LambdaHatSM";
import NerdGlasses from "./accessories/NerdGlasses";
import NerdGlassesSM from "./accessories/NerdGlassesSM";
import PinkHeadphone from "./accessories/PinkHeadphone";
import PinkHeadphoneSM from "./accessories/PinkHeadphoneSM";
import SunGlasses from "./accessories/SunGlasses";
import SunGlassesSM from "./accessories/SunGlassesSM";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import NoAccessory from "./accessories/NoAccessory";

const Icon = props => {
  switch (props.name) {
    case "Firefly":
      return <Firefly {...props} />;
    case "LambdaHat":
      return <LambdaHat {...props} />;
    case "LambdaHatSM":
      return <LambdaHatSM {...props} />;
    case "NerdGlasses":
      return <NerdGlasses {...props} />;
    case "NerdGlassesSM":
      return <NerdGlassesSM {...props} />;
    case "PinkHeadphone":
      return <PinkHeadphone {...props} />;
    case "PinkHeadphoneSM":
      return <PinkHeadphoneSM {...props} />;
    case "SunGlasses":
      return <SunGlasses {...props} />;
    case "SunGlassesSM":
      return <SunGlassesSM {...props} />;
    case "ProfileFly":
      return <ProfileFly {...props} />;
    case "LeftArrow":
      return <LeftArrow {...props} />;
    case "RightArrow":
      return <RightArrow {...props} />;
    case "NoAccessory":
      return <NoAccessory {...props} />;
    default:
      return <div />;
  }
};
export default Icon;
