import React, { useState, useContext, useEffect } from "react";
import firebase from "firebase";
import {
  addWorld,
  removeWorld,
  getWorld,
} from "../../../utils/firebaseInteractions";

import chooseWorldStyles from "./ChooseWorldStyles";
import WorldCard from "./WorldCard";
import fireflyWorld1 from "./fireflyWorld1.png";
import lockedWorld from "./lockedWorld.png";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

//importing the stores
import { gameContext, UPDATE_SELECTED } from "../../../context/Game/GameStore";
import { childContext } from "../../../context/ChildProfiles/ChildProfileStore";

const ChooseWorld = (props) => {
  //making the states from the stores
  const [worldContext, worldDispatch] = useContext(gameContext);
  const [childProfileState, childDispatch] = useContext(childContext);

  useEffect(() => {
    if (!worldContext.loaded) {
      props.history.push("/choose-profile")
    }
  }, [])

  useEffect(() => {
    if (worldContext.loaded && childProfileState.loaded) {
      if (!worldContext.worlds[0]) {
        const defaultWorld = { worldName: "Firefly World" };
        addWorld(childProfileState.selected.id, defaultWorld, worldDispatch)
      }
    }
  }, [worldContext.loaded]);

  //gets the world id when clicked
  const GameState = world => {
    worldDispatch({ type: UPDATE_SELECTED, payload: world.id });
  };

  //this is the style
  const classes = chooseWorldStyles();
  // const defaultWorld = { worldName: "Main World" };
  return (
    <div className={classes.rootContainer}>
      <hl className={classes.title}> CHOOSE YOUR WORLD </hl>
      <div className={classes.worldContainer}>
        {worldContext !== undefined && worldContext.worlds
          ? worldContext.worlds.map(world => {
              return (
                <Link
                  to="fireflyworld"
                  className={classes.links}
                  onClick={() => GameState(world)}
                >
                  <WorldCard title={`${world.worldName}`} img={fireflyWorld1} />
                </Link>
              );
            })
            :
            null
          }
        <WorldCard title={"Coming Soon"} img={lockedWorld} />

        <WorldCard title={"Coming Soon"} img={lockedWorld} />

        <WorldCard title={"Coming Soon"} img={lockedWorld} />

        <div className={classes.buttonContainer}>
          <Link to="/myfirefly" className={classes.backButton}>
            <Typography variant="button">Back</Typography>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseWorld;
