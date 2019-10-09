import React from "react";
import "./../../styles/RegistrationStepTwo.scss";
import RegistrationAddChild from "./RegistrationAddChild";
import stepOneStyles from "./StepOneStyles";
import { Typography } from "@material-ui/core";

const AddChild = ({
  step,
  updateStep,
  handleChanges,
  profiles,
  setProfiles
}) => {
  const clickedClose = idx => {
    const current = profiles.filter((_, index) =>
      index === idx ? false : true
    );
    setProfiles(current);
  };

  const classes = stepOneStyles();

  return (
    <div className={classes.container}>
      <div className={classes.sizingContainer}>
        <div className={classes.stepTwoContainer}>
          <div className={classes.childrenContainer}>
            {profiles.map((profile, idx) => {
              return (
                <RegistrationAddChild
                  clickedClose={clickedClose}
                  idx={idx}
                  profile={profile}
                  profiles={profiles}
                  setProfiles={setProfiles}
                  handleChanges={handleChanges}
                />
              );
            })}
          </div>

          <div
            className={classes.addChild}
            onClick={() =>
              setProfiles([...profiles, { first_name: "", last_name: "" }])
            }
          >
            <p className={classes.stepTwoButton} variant="button">
              + Add another child profile
            </p>
          </div>

          <div className={classes.buttonContainer2}>
            <button
              className={step === 0 ? classes.hidden : classes.backButton}
              onClick={() => updateStep("subtract")}
            >
              <Typography variant="button">Back</Typography>
            </button>
            <span className={classes.buttonSpace}> </span>
            <button
              className={
                profiles
                  .map(
                    profile =>
                      profile.first_name !== "" && profile.last_name !== ""
                  )
                  .includes(false)
                  ? classes.nextButtonDisabled
                  : classes.nextButton
              }
              onClick={
                profiles[0].first_name === "" || profiles[0].last_name === ""
                  ? null
                  : () => updateStep("add")
              }
            >
              <Typography variant="button">Next</Typography>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddChild;
