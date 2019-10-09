import React from "react";
import ColorSlider from "./../../ColorSlider/ColorSlider";
import uifx from "uifx";

//importing the sounds
import sliderMP3 from "../../../assets/sounds/slide.mp3";
//making the sound variable
const slide = new uifx({
  asset: sliderMP3,
  volume: 0.5, // <== value must be between 0.0 & 1.0
  throttleMs: 50
});

const PalettePopper = ({ color, setColor }) => {
  // slide.play()
  return <ColorSlider value={color} updateColor={setColor} />;
};

export default PalettePopper;
