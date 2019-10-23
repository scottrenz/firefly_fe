import React, { useState } from "react";

import Firefly from "./../../images/Logo.png";

import addChildStyles from "./addChildStyles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-ui/core";

library.add(faTimes);

const RegistrationAddChild = ({
  clickedClose,
  idx,
  profile,
  profiles,
  handleChanges,
}) => {
  const [touched, setTouched] = useState({
    first_name: false,
    last_name: false,
  });

  const toggleTouched = e => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  const handleChange = e => {
    handleChanges(e, idx);
  };

  const classes = addChildStyles();

  return (
    <div className={classes.paper}>
      <FontAwesomeIcon
        icon="times"
        className={profiles.length === 1 ? classes.hidden : classes.close}
        onClick={() => clickedClose(idx)}
      />
      <div className={classes.container}>
          <img
            className={classes.firefly}
            src={Firefly}
            alt="firefly"
          />
        <div className={classes.form}>
          <div className={classes.name}>
            <Typography variant="h3">First Name</Typography>
            <input
              type="text"
              name="first_name"
              className={classes.input}
              value={profile.first_name}
              onChange={e => handleChange(e)}
              onBlur={toggleTouched}
            />
            <Typography
                variant="subtitle2"
                className={
                  profile.first_name === "" && touched.first_name === true
                    ? classes.error
                    : classes.hiddenError
                }
              >
              *Required
            </Typography>
          </div>
          <div className={classes.name}>
            <Typography variant="h3">Last Name</Typography>
            <input
              type="text"
              name="last_name"
              value={profile.last_name}
              onChange={e => handleChange(e)}
              onBlur={toggleTouched}
              className={classes.input}
            />
            <Typography
                variant="subtitle2"
                className={
                  profile.last_name === "" && touched.last_name === true
                    ? classes.error
                    : classes.hiddenError
                }
              >
              *Required
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationAddChild;
