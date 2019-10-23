import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

import TutorialOne from "./../../images/Step3Tutorial-1.png";
import TutorialTwo from "./../../images/Step3Tutorial-2.png";

//Context
import {
  UPDATE_USER,
  ADD_PROFILE,
  childContext
} from "../../context/ChildProfiles/ChildProfileStore";
import { updateUser, addProfile } from "../../utils/firebaseInteractions";

import stepOneStyles from "./StepOneStyles";
import { Typography } from "@material-ui/core";

library.add(faArrowUp, faArrowDown);

const RegistrationStepThree = ({ step, updateStep, info, profiles }) => {
  const [childProfileState, dispatch] = useContext(childContext);
  const [finishedLoading, setFinishedLoading] = useState(false);

  const [updatedUser, setUpdatedUser] = useState({
    first_name: "",
    last_name: "",
    information: {
      city: "",
      address: "",
      state: "",
      zip: ""
    }
  });

  const classes = stepOneStyles();

  useEffect(() => {
    if (childProfileState.loaded && !finishedLoading) {
      setUpdatedUser(childProfileState.user);
      setFinishedLoading(true);
    }
  }, [childProfileState, finishedLoading]);

  const sendUserInfo = info => {
    const newUpdatedUser = {
      ...updatedUser,
      first_name: info.first_name,
      last_name: info.last_name,
      information: {
        ...updatedUser.information,
        address: info.address,
        city: info.city,
        state: info.state,
        zip: info.zipCode
      }
    };
    updateUser(UPDATE_USER, newUpdatedUser, dispatch);
  };

  const addProfiles = profiles => {
    // console.log("profiles:", profiles);
    profiles.map(profile => {
      if (profile.first_name !== "" || profile.last_name !== "") {
        addProfile(ADD_PROFILE, profile, dispatch);
      }
    });
  };

  return (
    <div className={classes.stepThreeContainer}>
      <div>
        <div className={classes.boxes}>
          <div className={classes.box}>
            <Typography variant="h2" className={classes.tutorialH}>
              Access My Account
            </Typography>
            <i
              className="fas fa-arrow-alt-down"
              style={{
                color: "#5B4EFF",
                alignSelf: "flex-end",
                marginRight: "5%",
                fontSize: "1.4rem",
                marginBottom: "-5%"
              }}
            />

            <img
              className={classes.image}
              src={TutorialOne}
              alt="tutorial-one"
            />
          </div>

          <div className={classes.box + " middle"}>
            <Typography variant="h2" className={classes.tutorialH}>
              Manage Account
            </Typography>
            <img
              className={classes.image}
              src={TutorialTwo}
              alt="tutorial-two"
            />
            <ul className={classes.tutorialSteps}>
              <li>Manage Profiles</li>
              <li>Update Account Information</li>
              <li>Manage Payment Information</li>
            </ul>
          </div>

          <div className={classes.box}>
            <Typography variant="h2" className={classes.tutorialH}>
              Start Our Adventure
            </Typography>
            <img
              className={classes.image}
              src={TutorialTwo}
              alt="tutorial-two"
            />
            <i
              className="fas fa-arrow-alt-up"
              style={{
                color: "#5B4EFF",
                alignSelf: "flex-end",
                marginRight: "22%",
                marginTop: "-4%",
                fontSize: "1.4rem"
              }}
            />
          </div>
        </div>

        <div className={classes.tutorialSize}>
          <div className={classes.buttonContainer}>
            <button
              className={step === 0 ? classes.hidden : classes.backButton3}
              onClick={() => updateStep("subtract")}
            >
              <Typography variant="button">Back</Typography>
            </button>

            <button
              className={classes.nextButton3}
              onClick={() => {
                sendUserInfo(info);
                addProfiles(profiles);
              }}
            >
              <Link to="/account" className={classes.link3}>
                <Typography variant="button">Get Started</Typography>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationStepThree;
