import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";

//material ui, styling
import Container from "@material-ui/core/Container";
import { FaPen } from "react-icons/fa";
import ProfileFly from "../../assets/icons/ProfileFly";

import myFireflyStyles from "./myFireflyStyles";
import { Typography } from "@material-ui/core";

export default function MyFireflyPage() {
  const classes = myFireflyStyles();

  const [childProfileState] = useContext(childContext);

  const [currentProfile, setCurrentProfile] = useState();

  useEffect(() => {
    // console.log(childProfileState);
    if (childProfileState.loaded && childProfileState.hasProfiles) {
      const [destructuredProfile] = childProfileState.user.profiles.filter(
        profile => {
          if (childProfileState.selected.id === profile.id) {
            return true;
          } else {
            return false;
          }
        }
      );
      // console.log(destructuredProfile);
      setCurrentProfile(destructuredProfile);
    }
  }, [childProfileState]);

  //Return nothing for a microsecond while currentProfile populates
  if (currentProfile) {
    return (
      <Container className={classes.root} component="div">
        <h1 className={classes.header}>My Firefly</h1>

        <div className={classes.mainBody}>
          <div className={classes.leftParent}>
            <div className={classes.leftContainer}>
              <div className={classes.pushRight}>
                <div className={classes.usernameContainer}>
                  <h3 className={classes.username}>
                    {currentProfile.avatar.nickname}
                  </h3>
                </div>
                <Link className={classes.editContainer} to="/customize">
                  <div>
                    <div className={classes.edit}>
                      <FaPen
                        style={{
                          marginRight: "5px",
                          height: "14px",
                          width: "14px"
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </div>

              <div className={classes.fireflyContainer}>
                <ProfileFly
                  color={currentProfile.avatar.color}
                  accessory={currentProfile.avatar.accessory}
                />
              </div>
            </div>

            <div className={classes.buttonContainer}>
              <Link
                className={classes.chooseFirefly}
                style={{
                  color: "#4AA810",
                  textDecoration: "none",
                  width: "47%"
                }}
                to="/choose-profile"
              >
                <Typography
                  variant="button"
                  style={{
                    fontSize: "18px",
                    fontWeight: "800",
                    letterSpacing: "1.5px"
                  }}
                >
                  BACK
                </Typography>
              </Link>

              <Link
                className={classes.rightCards}
                style={{
                  textDecoration: "none",
                  width: "47%",
                  backgroundColor: "#5B4EFF",
                  padding: "1rem 0rem"
                }}
                to="/chooseworld"
              >
                <div>
                  <div className={classes.rightCardContent}>
                    <h4 className={classes.rightCardsText}>Start Playing</h4>{" "}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    );
  } else {
    return <></>;
  }
}
