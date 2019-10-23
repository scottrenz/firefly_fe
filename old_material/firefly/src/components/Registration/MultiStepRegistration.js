import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import RegistrationStepOne from "./RegistrationStepOne";
import RegistrationStepTwo from "./RegistrationStepTwo";
import RegistrationStepThree from "./RegistrationStepThree";
import CustomStepper from "../Steppers/CustomStepper";
import { Typography } from "@material-ui/core";

const MultiStepRegistration = () => {
  const classes = makeStyles(theme => ({
    app: {
      width: "100%"
    },
    header: {
      ...theme.headerMargin,
      marginBottom: "2rem",
      // For mobiles and smaller
      ["@media (max-width:500px)"]: {
        fontSize: "19px",
        marginTop: "5%"
      }
    },
    h1: {
      // For mobiles and smaller
      ["@media (max-width:500px)"]: {
        fontSize: "19px",
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        width: "375px"
      }
    },
    span: {
      // For mobiles and smaller
      ["@media (max-width:500px)"]: {
        display: "none"
      }
    },
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f6f5ff",
    //   height: "100vh",
      // width:"98%",
      margin: "0 auto",
      ["@media (max-width:500px)"]: {
        height: "100%"
      }
    },
    second: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f6f5ff",
    //   height: "100vh"
    },
    third: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#f6f5ff",
    //   height: "100vh",
      // For mobiles and smaller
      ["@media (max-width:500px)"]: {
        height: "100%"
      }
    },
    wrapper: {
      width: "98%"
    }
  }))();

  const [step, setStep] = useState(0);
  const [info, setInfo] = useState({
    first_name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zipCode: ""
  });
  const [profiles, setProfiles] = useState([
    {
      first_name: "",
      last_name: ""
    }
  ]);

  const updateStep = operation => {
    operation === "add" ? setStep(step + 1) : setStep(step - 1);
  };

  const handleStepOneChange = e => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleChanges = (e, i) => {
    setProfiles(
      profiles.map((profile, idx) => {
        if (idx === i) {
          return { ...profile, [e.target.name]: e.target.value };
        } else {
          return profile;
        }
      })
    );
  };

  return step === 0 ? (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant="h1" className={classes.h1}>
          {" "}
          <span className={classes.span}>Step 1:</span> Account Information
        </Typography>
      </div>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <RegistrationStepOne
          step={step}
          updateStep={updateStep}
          info={info}
          handleStepOneChange={handleStepOneChange}
        />
      </div>
    </div>
  ) : step === 1 ? (
    <div className={classes.second}>
      <Typography variant="h1" className={classes.header}>
        <span className={classes.span}>Step 2:</span> Add a{" "}
        <span className={classes.span}>Child</span> Profile
      </Typography>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <RegistrationStepTwo
          step={step}
          updateStep={updateStep}
          profiles={profiles}
          setProfiles={setProfiles}
          handleChanges={handleChanges}
        />
      </div>
    </div>
  ) : (
    <div className={classes.third}>
      <Typography variant="h1" className={classes.header}>
        <span className={classes.span}>Step 3:</span> How it Works
      </Typography>
      <CustomStepper activeStep={step} />
      <div className={classes.wrapper}>
        <RegistrationStepThree
          step={step}
          updateStep={updateStep}
          profiles={profiles}
          info={info}
        />
      </div>
    </div>
  );
};

export default MultiStepRegistration;
