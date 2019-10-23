import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import uifx from "uifx";

import BlueArrowUp from "./../../../images/gameIcons/BlueArrowUp.svg";
import BlueArrowDown from "./../../../images/gameIcons/BlueArrowDown.svg";

//importing the sounds
import buttonMP3 from "../../../assets/sounds/Button.mp3";
//making the sound variable
const button = new uifx({ asset: buttonMP3 });

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: "Nunito"
  },

  timeDisplay: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90%"
  },

  time: { fontSize: "8rem", margin: "20px 0px", color: "#5B4EFF" },

  arrows: { width: "40px" },

  secondDisplay: {
    display: "flex",
    alignItems: "center",
    fontSize: "4.5rem",
    color: "#5B4EFF",
    marginTop: "15px"
  }
}));

const TimerPopper = ({ time, setTime }) => {
  const classes = useStyles();

  const changeNumber = operator => {
    if (operator === "up" && time < 5) {
      setTime(time + 1);
    } else if (operator === "up" && time === 5) {
      setTime(1);
    } else if (operator === "down" && time > 1) {
      setTime(time - 1);
    } else {
      setTime(5);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.timeDisplay}>
        <div
          onClick={() => {
            changeNumber("up");
            button.play();
          }}
        >
          <img src={BlueArrowUp} alt="up arrow" className={classes.arrows} />
        </div>
        <div className={classes.time}>{time}</div>
        <div
          onClick={() => {
            changeNumber("down");
            button.play();
          }}
        >
          <img
            src={BlueArrowDown}
            alt="down arrow"
            className={classes.arrows}
          />
        </div>
      </div>
      <div className={classes.secondDisplay}>sec</div>
    </div>
  );
};

export default TimerPopper;
