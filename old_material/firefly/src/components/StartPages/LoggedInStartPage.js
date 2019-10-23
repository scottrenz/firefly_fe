import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeToFirefly from "./../../assets/images/WelcomeToFireflyWithoutFirefly.svg";
import ChillingFlyNoAcc from "./../../assets/animations/ChillingFlyNoAcc";

import { Link } from "react-router-dom";
import firebase from "firebase";
import {
  childContext,
  SIGN_OUT
} from "../../context/ChildProfiles/ChildProfileStore";
import startPageStyles from "./StartPageStyles";
import { Typography } from "@material-ui/core";
import "../../styles/AnimatedBackground.scss";

import "../../styles/AnimatedBackground.scss";

const LoggedInStartPage = props => {
  const [childProfileState, dispatch] = useContext(childContext);

  const classes = startPageStyles();

  const signout = () => {
    firebase.auth().signOut();
    dispatch({ type: SIGN_OUT });
  };

  useEffect(() => {
    if (childProfileState && childProfileState.user && !childProfileState.user.information) {
      props.history.push("/");
    } else if (childProfileState.loaded && childProfileState.user && !childProfileState.user.information.city) {
      props.history.push("/registration");
    }
  }, []);

  return (
    <div className="root">
      <div className={classes.topBar}>
        <Link to="/signin" className={classes.topBarButton} onClick={signout}>
          <i className="fas fa-sign-out-alt" />
        </Link>

        <Link to="/account" className={classes.topBarButton}>
          <i className="fas fa-user-alt" />
        </Link>
      </div>

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
        {childProfileState.loaded ? (
          <Link
            className={classes.startButton}
            to={
              childProfileState.hasProfiles ? "/choose-profile" : "/addprofile"
            }
          >
            <Typography variant="button">Start</Typography>
          </Link>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default LoggedInStartPage;
