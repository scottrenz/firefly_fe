import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import stepOneStyles from "./StepOneStyles";

const RegistrationStepOne = ({
  handleStepOneChange,
  step,
  updateStep,
  info
}) => {
  const classes = stepOneStyles();

  const [touched, setTouched] = useState({
    first_name: false,
    last_name: false,
    address: false,
    city: false,
    state: false,
    zipCode: false
  });

  const toggleTouched = e => {
    setTouched({
      ...touched,
      [e.target.name]: true
    });
  };

  return (
    <div className={classes.container}>
      <div className={classes.sizingContainer}>
        <div className={classes.formsContainer}>
          <div className={classes.smallInputContainer}>
            <div className={classes.smallInputSizer}>
              <Typography variant="h3">First Name</Typography>
              <input
                type="text"
                name="first_name"
                className={classes.smallInput}
                onChange={handleStepOneChange}
                value={info.first_name}
                onBlur={toggleTouched}
              />
              <Typography
                variant="subtitle2"
                className={
                  info.first_name === "" && touched.first_name === true
                    ? classes.error
                    : classes.hidden
                }
              >
                *Required
              </Typography>
            </div>
            <div className={classes.smallInputSizer}>
              <Typography variant="h3">Last Name</Typography>
              <input
                name="last_name"
                type="text"
                className={classes.smallInput}
                onChange={handleStepOneChange}
                value={info.last_name}
                onBlur={toggleTouched}
              />
              <Typography
                variant="subtitle2"
                className={
                  info.last_name === "" && touched.last_name === true
                    ? classes.error
                    : classes.hidden
                }
              >
                *Required
              </Typography>
            </div>
          </div>
          <div className={classes.bigInputContainer}>
            <div className={classes.bigInputSizer}>
              <Typography variant="h3">Address</Typography>
              <input
                name="address"
                className={classes.bigInput}
                type="text"
                value={info.address}
                onChange={handleStepOneChange}
                onBlur={toggleTouched}
              />
              <Typography
                variant="subtitle2"
                className={
                  info.address === "" && touched.address === true
                    ? classes.error
                    : classes.hidden
                }
              >
                *Required
              </Typography>
            </div>
          </div>
          <div className={classes.bigInputContainer}>
            <div className={classes.bigInputSizer}>
              <Typography variant="h3">City</Typography>
              <input
                name="city"
                className={classes.bigInput}
                type="text"
                value={info.city}
                onChange={handleStepOneChange}
                onBlur={toggleTouched}
              />
              <Typography
                variant="subtitle2"
                className={
                  info.city === "" && touched.city === true
                    ? classes.error
                    : classes.hidden
                }
              >
                *Required
              </Typography>
            </div>
          </div>
          <div className={classes.smallInputContainer}>
            <div className={classes.smallInputSizer}>
              <Typography variant="h3">State</Typography>
              <input
                name="state"
                className={classes.smallInput}
                onChange={handleStepOneChange}
                type="text"
                value={info.state}
                onBlur={toggleTouched}
              />
              <Typography
                variant="subtitle2"
                className={
                  info.state === "" && touched.state === true
                    ? classes.error
                    : classes.hidden
                }
              >
                *Required
              </Typography>
            </div>
            <div className={classes.smallInputSizer}>
              <Typography variant="h3">Zip Code</Typography>
              <input
                name="zipCode"
                className={classes.smallInput}
                onChange={handleStepOneChange}
                type="text"
                value={info.zipCode}
                onBlur={toggleTouched}
              />
              <Typography
                variant="subtitle2"
                className={
                  info.zipCode === "" && touched.zipCode === true
                    ? classes.error
                    : classes.hidden
                }
              >
                *Required
              </Typography>
            </div>
          </div>
          <div className={classes.buttonContainer}>
            <button
              className={
                info.first_name !== "" &&
                info.last_name !== "" &&
                info.address !== "" &&
                info.city !== "" &&
                info.state !== "" &&
                info.zipCode !== ""
                  ? classes.nextButton
                  : classes.nextButtonDisabled
              }
              onClick={
                info.first_name !== "" &&
                info.last_name !== "" &&
                info.address !== "" &&
                info.city !== "" &&
                info.state !== "" &&
                info.zipCode !== ""
                  ? () => {
                      updateStep("add");
                    }
                  : null
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

export default RegistrationStepOne;
