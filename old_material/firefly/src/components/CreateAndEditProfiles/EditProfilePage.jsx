import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import {
  UPDATE_PROFILE,
  REMOVE_PROFILE
} from "../../context/ChildProfiles/ChildProfileStore";

import { updateProfile, removeProfile } from "../../utils/firebaseInteractions";

//Font Awesome & Material UI & Styling
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography
} from "@material-ui/core";

import Icon from "../../assets/icons";
import createProfileStyles from "./CreateAndEditProfileStyles";

//components
import { SecondaryButton } from "../../utils/buttons/SecondaryButton";
import { PrimaryButton } from "../../utils/buttons/PrimaryButton";

library.add(faTrashAlt);

const EditProfilePage = props => {
  const classes = createProfileStyles();

  const [childProfileState, dispatch] = useContext(childContext);

  const [finishedLoading, setFinishedLoading] = useState(false);

  const [updatedProfile, setUpdatedProfile] = useState({
    first_name: "",
    last_name: "",
    id: "",
    avatar: {
      color: -1,
      accessory: -1,
      nickname: "asdf"
    }
  });

  useEffect(() => {
    if (
      childProfileState.loaded &&
      childProfileState.hasProfiles &&
      !finishedLoading
    ) {
      const [currentProfile] = childProfileState.user.profiles.filter(
        profile => {
          if (childProfileState.selected.id === profile.id) {
            return true;
          } else {
            return false;
          }
        }
      );
      setUpdatedProfile(currentProfile);
      setFinishedLoading(true);
    }
  }, [childProfileState]);

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
    updateProfile(UPDATE_PROFILE, updatedProfile, dispatch);
    props.history.push("/account");
  };

  const [open, setOpen] = useState(false);

  const confirmRemove = () => {
    removeProfile(REMOVE_PROFILE, updatedProfile, dispatch).then(() => {
      props.history.push("/account");
    });
  };

  if (
    childProfileState.loaded &&
    childProfileState.hasProfiles &&
    finishedLoading
  ) {
    return (
      <div className={classes.container}>
          <div className={classes.header}>
            <Typography variant="h1">EDIT PROFILE</Typography>
          </div>
        <div className={classes.sizingContainer}>
          <div className={classes.cardContainer}>
            <div className={classes.deleteButtonContainer}>
              <button className={classes.delete} onClick={() => setOpen(true)}>
                <FontAwesomeIcon icon="trash-alt" />
              </button>
            </div>
            <div className={classes.card}>
              <div className={classes.firefly}>
                <Icon
                  name="Firefly"
                  accessory={updatedProfile.avatar.accessory}
                  lighttopFill={`hsl(${updatedProfile.avatar.color},100%,35%)`}
                  lightmidFill={`hsl(${updatedProfile.avatar.color},100%,45%)`}
                  lightbottomFill={`hsl(${
                    updatedProfile.avatar.color
                  },100%,55%)`}
                  shineStroke={`hsl(${updatedProfile.avatar.color},100%,55%)`}
                />
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
                <Typography variant="button">Back</Typography>
              </Link>
              <Link onClick={saveProfile} className={classes.save}>
                <Typography variant="button">Save</Typography>
              </Link>
            </div>
          </div>
        </div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          are-labelledby="remove-profile-dialog"
          classes={{
            paper: classes.dialogPaper
          }}
        >
          <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
            <span className={classes.dialogTitle}>
              Are you sure you want to remove {updatedProfile.first_name}'s
              profile?
            </span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              All data and progress associated with this profile will be
              removed. This action is permanent and can not be undone. Are you
              absolutely certain you want to remove this profile?
            </DialogContentText>
            <DialogActions>
              <div className={classes.dialogButtonContainer}>
                <button
                  onClick={() => setOpen(false)}
                  className={classes.dialogButtons + " cancel"}
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRemove}
                  className={classes.dialogButtons + " remove"}
                >
                  Remove
                </button>
              </div>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  } else if (childProfileState.loaded && !childProfileState.hasProfiles) {
    return <div>You have no profiles... Please add one...</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default EditProfilePage;
