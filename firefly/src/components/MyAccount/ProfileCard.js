import React, { useContext } from "react";

import { makeStyles, Typography } from "@material-ui/core";

import Icon from "../../assets/icons";
import { FaPen } from "react-icons/fa";

//context
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { UPDATE_SELECTED } from "../../context/ChildProfiles/ChildProfileStore";

const ProfileCard = props => {
  const classes = makeStyles(theme => ({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      // borderBottom: "1px solid #b6e699",
      marginBottom: "1rem",
      paddingBottom: "1rem"
    },
    nameAndEdit: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      "&::before": {
        content: "''",
        padding: "1rem 2rem",
        fontSize: "1.4rem",
        visibility: "hidden"
      }
    },
    editButton: {
      ...theme.smallIconButton,
      padding: "1rem",
      fontSize: "1.4rem"
    },
    firefly: {}
  }))();

  const [, dispatch] = useContext(childContext);

  const editButton = async () => {
    console.log(props.id);
    await dispatch({ type: UPDATE_SELECTED, payload: props.id });
    props.history.push("/editprofile");
  };

  return (
    <div className={classes.container}>
      <div className={classes.nameAndEdit}>
        <Typography variant="h6">{props.name}</Typography>
        <div onClick={editButton} className={classes.editButton}>
          <FaPen />
        </div>
      </div>

      <div className={classes.firefly}>
        <Icon
          name="Firefly"
          style={{
            width: "40%"
          }}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
