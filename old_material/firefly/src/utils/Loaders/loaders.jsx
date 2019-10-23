import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

import Icon from "../../assets/icons";
import "../../styles/AnimatedBackground.scss";

export const Loader = props => {
    const classes = makeStyles(theme => ({
        container: {
            marginTop: "13%",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            alignItems: "center",
            width: "100%",
            [theme.breakpoints.up("lg")]: {
                width: "1024px",
                margin: "100px auto",
            }
        },
        sizer: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        },
        image: {
            [theme.breakpoints.up("lg")]: {
                width: "40%"
            }
        },
        loaderContainer: {
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem"
        }
    }))();

    return (
        <div className={classes.container}>
            <div className={classes.sizer}>
                {/* <img src={Welcome} className={classes.image}/> */}
                <div className={classes.image}>
                    <Icon name="Firefly" width={"100%"} viewBox={"0 0 1024 1024"} />
                </div>
                <div className={classes.loaderContainer}>
                    <Typography variant="h1">Loading</Typography>
                    <CircleLoader />
                </div>
            </div>
        </div>
    );
};

const CircleLoader = () => {
    const classes = makeStyles({
        ldsRoller: {
            display: "inline-block",
            position: "relative",
            width: "64px",
            height: "64px",
            "& div": {
                animation: "$lds-roller 1.5s cubic-bezier(0.5, 0, 0.5, 1) infinite",
                transformOrigin: "32px 32px"
            },
            "& div:after": {
                content: "' '",
                display: "block",
                position: "absolute",
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#5b4eff",
                margin: "-3px 0 0 -3px"
            },
            "& div:nth-child(1)": {
                animationDelay: ".364s"
                // animationDelay: "-0.036s",
            },
            "& div:nth-child(1):after": {
                top: "50px",
                left: "50px"
            },
            "& div:nth-child(2)": {
                animationDelay: ".328s"
                // animationDelay: "-0.072s",
            },
            "& div:nth-child(2):after": {
                top: "54px",
                left: "45px"
            },
            "& div:nth-child(3)": {
                animationDelay: ".292s"
                // animationDelay: "-0.108s",
            },
            "& div:nth-child(3):after": {
                top: "57px",
                left: "39px"
            },
            "& div:nth-child(4)": {
                animationDelay: ".256s"
                // animationDelay: "-0.144s",
            },
            "& div:nth-child(4):after": {
                top: "58px",
                left: "32px"
            },
            "& div:nth-child(5)": {
                animationDelay: ".220s"
                // animationDelay: "-0.18s",
            },
            "& div:nth-child(5):after": {
                top: "57px",
                left: "25px"
            },
            "& div:nth-child(6)": {
                animationDelay: ".184s"
                // animationDelay: "-0.216s",
            },
            "& div:nth-child(6):after": {
                top: "54px",
                left: "19px"
            },
            "& div:nth-child(7)": {
                animationDelay: ".148s"
                // animationDelay: "-0.252s",
            },
            "& div:nth-child(7):after": {
                top: "50px",
                left: "14px"
            }
        },
        "@keyframes lds-roller": {
            "0%": {
                transform: "rotate(0deg)"
            },
            "100%": {
                transform: "rotate(360deg)"
            }
        }
    })();

    return (
        <div>
            <div className={classes.ldsRoller}>
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    );
};
