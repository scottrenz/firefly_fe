import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import WelcomeToFirefly from "../../assets/WelcomeToFireflyWithoutFirefly.svg";
import ChillingFlyNoAcc from "../../assets/animations/chillingFlyNoAcc.json";
import startPageStyles from "./StartPageStyles";
import "../../styles/AnimatedBackground.scss";

const classes = startPageStyles();





export default function StartPage() {
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
                        <Button variant="button">Start</Button>
                    </Link>
                ) : (
                        <div>Loading...</div>
                    )}
            </div>
        </div>
    );
};

export default StartPage;


