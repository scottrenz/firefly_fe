import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import uifx from "uifx";

//importing the sound for the toggle
import switchMP3 from "../../../assets/sounds/switch.mp3";
//making the sound variable
const toggle = new uifx({ asset: switchMP3 });

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    fontFamily: "Nunito",
    fontSize: "2.7rem",
    textTransform: "uppercase",
    color: "#6459FF",
    fontWeight: "700"
  }
}));

const CustomSwitch = withStyles({
  switchBase: {
    color: "#fff",
    border: "2px solid #6C60FF",
    padding: "0",
    top: "20%",

    "&$checked": {
      color: "#D0CCFF",
      padding: "0",
      top: "20%"
    },

    "&$checked + $track": {
      backgroundColor: "blue"
    }
  },
  checked: {},
  track: { backgroundColor: "#D0CCFF" }
})(Switch);

const SwitchPopper = ({ onOff, setOnOff }) => {
  const handleChange = () => {
    setOnOff(!onOff);
    toggle.play();
  };

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <span className={classes.text}>Off</span>
      <CustomSwitch
        checked={onOff}
        onChange={() => handleChange()}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      <span className={classes.text}>On</span>
    </div>
  );
};

export default SwitchPopper;
