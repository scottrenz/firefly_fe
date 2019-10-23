import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { addFirefly } from "../../../utils/firebaseInteractions";

//Styling
import WorldNavStyles from "./WorldNavStyles";
import { FaTimes, FaPlus, FaRegPlayCircle } from "react-icons/fa";
import { Typography } from "@material-ui/core";
import FireflyOutline from "./ffOutline.svg";

//Context
import { gameContext, ADD_FIREFLY } from "../../../context/Game/GameStore";
import { childContext } from "../../../context/ChildProfiles/ChildProfileStore";

export const WorldNav = props => {
  const classes = WorldNavStyles();

  const [worldContext, worldDispatch] = useContext(gameContext);
  const [context, contextDispatch] = useContext(childContext);

  const newFF = props => {
    addFirefly(context.selected.id, worldContext.selected.id, worldDispatch);
  };

  return (
    <div className={classes.navContainer}>
      <Link className={classes.iconButton} to="/chooseworld">
        <Typography variant="button" className={classes.x}>
          <FaTimes />
        </Typography>
      </Link>

      <div className={classes.bigButtonContainer}>
        <div className={classes.addButton} onClick={newFF}>
          <Typography variant="button" className={classes.plus}>
            <FaPlus />
          </Typography>
          <img src={FireflyOutline} className={classes.ffOutline} />
        </div>

        <div className={classes.addButton} onClick={props.play}>
          <Typography variant="button" className={classes.plus}>
            <FaRegPlayCircle />
          </Typography>
          <img src={FireflyOutline} className={classes.ffOutline} />
        </div>
      </div>
    </div>
  );
};
