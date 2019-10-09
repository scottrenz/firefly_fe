import React from "react";
// import AnimationTest from "../part2/AnimationTest";
import FFanim from "../../assets/animations/FFanim";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  fireFlyBox: {
    width: "40%",
    padding: "20px 0",
    margin: "20px auto",
    borderRadius: "20px",
    boxShadow: "0px 2px 4px #000000",
    backgroundImage: "linear-gradient(#382eb8, #7068ff)"
  },

  fireFlyBoxSleep: {
    width: "40%",
    padding: "20px 0",
    margin: "20px auto",
    borderRadius: "20px",
    boxShadow: "0px 1px 4px #000000",
    backgroundImage: "linear-gradient(#555, #fff)"
  }
});

const FFbox = ({ tools, animationList, playing }) => {
  const classes = useStyles();
  return (
    <div
      className={tools[1].used ? classes.fireFlyBox : classes.fireFlyBoxSleep}
      //Conditionally render the FF box depending on play AND led blocks are on. We don't need it anymore.
      // style={!tools[0].used || !tools[1].used ? { visibility: "hidden" } : null}
    >
      <FFanim
        height={250}
        width={250}
        color={58}
        awake={tools[1].used ? true : false}
        animationList={animationList}
        playing={playing}
      />
    </div>
  );
};

export default FFbox;
