import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { addProfile } from "../../utils/firebaseInteractions";

import { childContext, ADD_PROFILE } from "../../context/ChildProfiles/ChildProfileStore";


//Styling
import Icon from "../../assets/icons";
import createProfileStyles from "./CreateAndEditProfileStyles";

//Button Components
import { Typography } from "@material-ui/core";

const AddANewProfilePage = props => {
  const classes = createProfileStyles();

  const [context, dispatch] = useContext(childContext);

  const [updatedProfile, setUpdatedProfile] = useState({
    first_name: "",
    last_name: ""
  });

  const firstNameChanges = e => {
    setUpdatedProfile({
      ...updatedProfile,
      first_name: e.target.value
    });
  };

  const lastNameChanges = e => {
    setUpdatedProfile({
      ...updatedProfile,
      last_name: e.target.value
    });
  };

  const saveProfile = () => {
    addProfile(ADD_PROFILE, updatedProfile, dispatch).then(() => {
      props.history.push("/account");
    });
  };

  return (
    <div className={classes.container}>
        <div className={classes.header}>
          <Typography variant="h1">ADD A NEW PROFILE</Typography>
        </div>
      <div className={classes.sizingContainer}>
        <div className={classes.card}>
          <div className={classes.firefly}>
            <Icon name="Firefly" />
          </div>
          <div className={classes.inputContainer}>
            <div className={classes.firstName}>
              <Typography variant="h2" className={classes.nameHeader}>
                First Name
              </Typography>
              <input
                type="text"
                name="firstName"
                value={updatedProfile.first_name}
                onChange={firstNameChanges}
                className={classes.field}
              />
            </div>
            <div className={classes.lastName}>
              <Typography variant="h2" className={classes.nameHeader}>
                Last Name
              </Typography>
              <input
                type="text"
                name="lastName"
                className={classes.field}
                value={updatedProfile.last_name}
                onChange={lastNameChanges}
              />
            </div>
          </div>
        </div>
        <div className={classes.buttonContainer}>
          <Link to="/account" className={classes.cancel}>
            <Typography variant="button">back</Typography>
          </Link>
          <Link onClick={saveProfile} className={classes.save}>
            <Typography variant="button">Save</Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddANewProfilePage;
