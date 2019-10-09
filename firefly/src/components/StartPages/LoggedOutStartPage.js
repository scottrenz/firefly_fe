import React from "react";
import WelcomeToFirefly from "./../../assets/images/WelcomeToFireflyWithoutFirefly.svg";
import ChillingFlyNoAcc from "./../../assets/animations/ChillingFlyNoAcc";
import startPageStyles from "./StartPageStyles";

import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

import "../../styles/AnimatedBackground.scss";

const LoggedOutStartPage = () => {
  const classes = startPageStyles();

  return (
    <div className="root">
      <div className={classes.logoBox}>
        <ChillingFlyNoAcc
          height={200}
          width={200}
          className={classes.animation}
        />
        <img
          src={WelcomeToFirefly}
          alt="WelcomeToFirefly"
          className={classes.staticImage}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Link className={classes.startButton} to="/signup">
          <Typography variant="button">Get Started</Typography>
        </Link>
        <Link className={classes.secondaryButton} to="/signin">
          <Typography variant="button">I Already Have An Account</Typography>
        </Link>
      </div>
    </div>
  );
};

export default LoggedOutStartPage;
