import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { childContext } from "../../context/ChildProfiles/ChildProfileStore";
import { gameContext } from "../../context/Game/GameStore.jsx";
import { addWorld, getWorld } from "../../utils/firebaseInteractions";
import chooseProfileStyles from "./chooseProfileStyles";

//Material-UI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import { Typography } from "@material-ui/core";

//Components
import ProfileFly from "../../assets/icons/ProfileFly";

const ChooseProfilePage = props => {
  const [childProfileState, dispatch] = useContext(childContext);
  const [worldContext, worldDispatch] = useContext(gameContext);

  const gettingWorld = async profile => {
    getWorld(profile.id, worldDispatch);
  };

  const classes = chooseProfileStyles();

  if (childProfileState.user && childProfileState.user.profiles) {
    return (
      <div className={classes.root}>
        <Typography variant="h1" className={classes.header}>
          CHOOSE YOUR FIREFLY{" "}
        </Typography>
        <div className={classes.sizingContainer}>
          <div className={classes.cardContainer}>
            {childProfileState.user.profiles.map(profile => (
              <div
                className={classes.card}
                onClick={() => {
                  dispatch({
                    type: "UPDATE_SELECTED",
                    payload: profile.id
                  });
                  gettingWorld(profile).then(() => {
                    props.history.push("/myfirefly");
                  });
                }}
              >
                <div className={classes.flysize}>
                  <div className={classes.text}>
                    <Typography variant="h4" className={classes.name}>
                      {profile.first_name}
                    </Typography>
                  </div>
                  <ProfileFly
                    color={profile.avatar.color}
                    accessory={profile.avatar.accessory}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className={classes.backButtonContainer}>
            <Link to="/startgame" className={classes.backButtonStyle}>
              <Typography variant="button">Back</Typography>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <div />;
  }
};

export default ChooseProfilePage;
