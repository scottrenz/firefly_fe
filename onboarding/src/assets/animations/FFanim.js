import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import awakeanimationData from "./ffAnim2.json";
import sleepingAnimation from "./sleeping.json";
import styled from "styled-components";
import { makeStyles } from "@material-ui/styles";
import anime from "animejs";

const FFanim = ({
  height,
  width,
  accessory,
  awake,
  animationList,
  playing,
  autoplay = false,
  loop = false
}) => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const classes = makeStyles(theme => ({
    wrapper: {
      "& .lambdahat": {
        display: `${accessorySwitch("lambdahat")}`
      },
      "& .sunglasses": {
        display: `${accessorySwitch("sunglasses")}`
      },
      "& .headphones": {
        display: `${accessorySwitch("headphones")}`
      },
      "& .nerdglasses": {
        display: `${accessorySwitch("nerdglasses")}`
      }
    }
  }))();

  //set these only when awake

  let t1 = anime.timeline({
    autoplay: autoplay
  });
  let t2 = anime.timeline({
    autoplay: autoplay
  });
  let t3 = anime.timeline({
    autoplay: autoplay
  });
  let t4 = anime.timeline({
    autoplay: autoplay
  });

  const animationParameters = {
    easing: "easeInOutQuad",
    duration: 500,
    loop: loop,
  };

  function parseColorCode(blocks) {

    let currentColor = 52;

    function addToAnime(array, repeat, onState) {

      // console.log(onState);
      let isOn = onState;

      var animationRepeatCount = 0;
      if (repeat) {
        animationRepeatCount = repeat;
      }

      for (let i = 0; i <= animationRepeatCount; i++) {
        array.map((element, index) => {
          let keyframe = {};

          if (element.onOff) {
            isOn = true;
          }

          if (element.onOff === false) {
            isOn = false;
          }

          //no color, switch true
          if (
            !element.color &&
            (element.onOff === true || element.onOff === undefined)
          ) {
            keyframe = {
              ...keyframe,
              fill: currentColor
            };
          }

          //has a color
          if (element.color && isOn) {
            keyframe = {
              ...keyframe,
              fill: element.color
            };
            currentColor = element.color;
          }

          //duration
          if (element.timer) {
            keyframe = {
              ...keyframe,
              duration: element.timer * 1000
            };
          }

          if (element.onOff === false || !isOn) {
            t1.add({
              ...keyframe,
              fill: "hsl(220, 12%, 90%)"
            });

            t2.add({
              ...keyframe,
              fill: "hsl(218, 11%, 80%)"
            });

            t3.add({
              ...keyframe,
              fill: "hsl(223, 9%, 70%)"
            });

            t4.add({
              ...keyframe,
              stroke: "hsl(220, 12%, 90%)"
            });
          } else if (element.onOff === true || element.onOff === undefined) {
            t1.add({
              ...keyframe,
              fill: `hsl(${keyframe.fill}, 100%, 55%)`
            });

            t2.add({
              ...keyframe,
              fill: `hsl(${keyframe.fill}, 100%, 40%)`
            });

            t3.add({
              ...keyframe,
              fill: `hsl(${keyframe.fill}, 100%, 30%)`
            });

            t4.add({
              ...keyframe,
              stroke: `hsl(${keyframe.fill}, 100%, 55%)`
            });
          }
        });
      }
    }

    function addFinal() {
      t1.add({
        // fill: `hsl(52, 100%, 55%)`
        fill: `hsl(216, 2%, 91%)`
      });

      t2.add({
        // fill: `hsl(52, 100%, 40%)`
        fill: `hsl(216, 5%, 82%)`
      });

      t3.add({
        // fill: `hsl(52, 100%, 30%)`
        fill: `hsl(220, 8%, 73%)`
      });

      t4.add({
        // stroke: `hsl(52, 100%, 55%)`
        stroke: `hsl(216, 2%, 91%)`
      });
    }

    let codeArray = [];

    let currentCode = {};

    let currentOnOffState = false;

    let passedOnOffState = false;

    //timers are breakpoints for creating currentCode object

    blocks.map((block, index) => {
      if (block.type === "color") {
        //Maybe Done
        if (index === blocks.length - 1) {
          currentCode = {
            ...currentCode,
            color: block.value
          };
          codeArray.push(currentCode);
          addToAnime(codeArray, undefined, passedOnOffState);
          passedOnOffState = currentOnOffState;
        } else if (
          currentCode.onOff != undefined &&
          currentCode.onOff === false
        ) {
          codeArray.push(currentCode);
          currentCode = {};
          currentCode = {
            ...currentCode,
            color: block.value
          };
        } else if (currentCode["color"]) {
          codeArray.push(currentCode);
          currentCode = {};
          currentCode = {
            ...currentCode,
            color: block.value
          };
        } else {
          currentCode = {
            ...currentCode,
            color: block.value
          };
        }
      } else if (block.type === "onOff") {
        //Maybe done
        if (block.value === true) {
          // console.log("turning on")
          currentOnOffState = true;
        } else {
          // console.log("turning off")
          currentOnOffState = false;
        }
        if (index === blocks.length - 1) {
          currentCode = {
            ...currentCode,
            onOff: block.value
          };
          codeArray.push(currentCode);
          addToAnime(codeArray, undefined, passedOnOffState);
          passedOnOffState = currentOnOffState;
        } else if (currentCode.color && block.value === false) {
          codeArray.push(currentCode);
          currentCode = {};
          currentCode = {
            ...currentCode,
            onOff: block.value
          };
        } else if (currentCode["onOff"]) {
          codeArray.push(currentCode);
          currentCode = {};
          currentCode = {
            ...currentCode,
            onOff: block.value
          };
        } else {
          currentCode = {
            ...currentCode,
            onOff: block.value
          };
        }
      } else if (block.type === "timer") {
        //Done I think
        if (JSON.stringify(currentCode) !== "{}") {
          codeArray.push(currentCode);
        }
        currentCode = {};
        currentCode = {
          ...currentCode,
          timer: block.value
        };
        if (index === blocks.length - 1) {
          addToAnime(codeArray, undefined, passedOnOffState);
          passedOnOffState = currentOnOffState;
        }
      } else if (block.type === "repeat") {
        codeArray.push(currentCode);
        currentCode = {};
        addToAnime(codeArray, block.value, passedOnOffState);
        passedOnOffState = currentOnOffState;
        codeArray = [];
      }
      if (index === blocks.length - 1) {
        addFinal();
      }
    });
  }

  useEffect(() => {
    if (awake) {
      t1 = anime.timeline({
        targets: `.${classes.wrapper} svg .bodyLightBottomGrey path`,
        autoplay: autoplay,
        ...animationParameters
      });
      t2 = anime.timeline({
        targets: `.${classes.wrapper} svg .bodyLightMidGrey path`,
        autoplay: autoplay,
        ...animationParameters
      });
      t3 = anime.timeline({
        targets: `.${classes.wrapper} svg .bodyLightTopGrey path`,
        autoplay: autoplay,
        ...animationParameters
      });
      t4 = anime.timeline({
        targets: `.${classes.wrapper} svg .lightLGrey path, .${classes.wrapper} svg .lightMGrey path, .${classes.wrapper} svg .lightRGrey path`,
        autoplay: autoplay,
        ...animationParameters
      });
      if (animationList) {
        parseColorCode(animationList);
      }
    }
  }, [classes.wrapper, awake, animationList, playing]);

  useEffect(() => {
    if (hasLoaded) {
    t1.play();
    t2.play();
    t3.play();
    t4.play();
    }
    setHasLoaded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing]);

  function accessorySwitch(selector) {
    if (accessory === selector) {
      return "block !important";
    } else {
      return "none !important";
    }
  }

  let animationData2 = {};
  if (awake) {
    animationData2 = awakeanimationData;
  } else {
    animationData2 = sleepingAnimation;
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className={classes.wrapper}>
      <Lottie
        options={defaultOptions}
        height={height}
        width={width}
        isClickToPauseDisabled={true}
      />
    </div>
  );
};

export default FFanim;
