import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import uifx from "uifx";

//importing the sounds
import oneMP3 from "../../../assets/sounds/number1.mp3";
import twoMP3 from "../../../assets/sounds/number2.mp3";
import threeMP3 from "../../../assets/sounds/number3.mp3";
import fourMP3 from "../../../assets/sounds/number4.mp3";
import fiveMP3 from "../../../assets/sounds/number5.mp3";
import sixMP3 from "../../../assets/sounds/number6.mp3";
import sevenMP3 from "../../../assets/sounds/number7.mp3";
import eightMP3 from "../../../assets/sounds/number8.mp3";
import nineMP3 from "../../../assets/sounds/number9.mp3";

//making the sound variables for numpad
const one = new uifx({ asset: oneMP3, volume: 0.1 });
const two = new uifx({ asset: twoMP3, volume: 0.1 });
const three = new uifx({ asset: threeMP3, volume: 0.1 });
const four = new uifx({ asset: fourMP3, volume: 0.1 });
const five = new uifx({ asset: fiveMP3, volume: 0.1 });
const six = new uifx({ asset: sixMP3, volume: 0.1 });
const seven = new uifx({ asset: sevenMP3, volume: 0.1 });
const eight = new uifx({ asset: eightMP3, volume: 0.1 });
const nine = new uifx({ asset: nineMP3, volume: 0.1 });

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },

  none: {
    visibility: "hidden",
    position: "absolute"
  },

  numberIconContainer: {
    width: "50px",
    margin: "5px 0px",
    cursor: "pointer",
    fontFamily: "Nunito",
    fontSize: "4rem",
    border: "2px solid #AFB4BE",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    color: "#AFB4BE"
  },

  numberActiveIconContainer: {
    width: "50px",
    margin: "5px 0px",
    cursor: "pointer",
    fontFamily: "Nunito",
    fontSize: "4rem",
    border: "2px solid #6459FF",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50px",
    color: "#6053FF",
    backgroundColor: "#D0CCFF"
  }
}));

const RepeatPopper = ({ repeat, setRepeat }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div
        className={
          repeat === 1
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(1);
          one.play();
        }}
      >
        1
      </div>

      <div
        className={
          repeat === 2
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(2);
          two.play();
        }}
      >
        2
      </div>
      <div
        className={
          repeat === 3
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(3);
          three.play();
        }}
      >
        3
      </div>
      <div
        className={
          repeat === 4
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(4);
          four.play();
        }}
      >
        4
      </div>
      <div
        className={
          repeat === 5
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(5);
          five.play();
        }}
      >
        5
      </div>
      <div
        className={
          repeat === 6
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(6);
          six.play();
        }}
      >
        6
      </div>
      <div
        className={
          repeat === 7
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(7);
          seven.play();
        }}
      >
        7
      </div>
      <div
        className={
          repeat === 8
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(8);
          eight.play();
        }}
      >
        8
      </div>
      <div
        className={
          repeat === 9
            ? classes.numberActiveIconContainer
            : classes.numberIconContainer
        }
        onClick={() => {
          setRepeat(9);
          nine.play();
        }}
      >
        9
      </div>
    </div>
  );
};

export default RepeatPopper;
