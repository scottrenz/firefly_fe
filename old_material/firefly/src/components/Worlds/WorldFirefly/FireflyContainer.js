import React, { useState, useContext, useEffect } from "react";
import { useDrop } from "react-dnd";
import { Link } from "react-router-dom";
import itemType from "./itemType";
import FireflyItem from "./FireflyItem";

//importing the firebase stuff needed
import {
  removeFirefly,
  updateBlocks
} from "../../../utils/firebaseInteractions.jsx";
import FFanim from "../../../assets/animations/FFanim";
import FFicon from "../../../assets/icons/firefly/Firefly";
import {
  gameContext,
  SELECTED_WORLD,
  REMOVE_FIREFLY
} from "../../../context/Game/GameStore";
import { childContext } from "../../../context/ChildProfiles/ChildProfileStore";
import {
  FaPen,
  FaTrashAlt,
  FaArrowsAlt,
  FaTimes,
  FaCheck
} from "react-icons/fa";
import {
  Dialog,
  // DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
  // Typography
} from "@material-ui/core";

//styles
import WorldFireflyStyles from "./WorldFireflyStyles";
import fireflyStyles from "../FireflyWorld/FireflyWorldStyles";

const FireflyContainer = (props, { hideSourceOnDrag }) => {
  const classes = fireflyStyles();
  const classed = WorldFireflyStyles();

  const [context, contextDispatch] = useContext(childContext);
  const [worldContext, worldDispatch] = useContext(gameContext);
  const [menuActive, setMenuState] = useState(false);
  const [ffId, setFFId] = useState();
  const [trashOpen, setTrashOpen] = useState(false);
  const [canDrag, setCanDrag] = useState(false);

  // useEffect(() => {
  //   console.log(worldContext.selected.id);
  //   console.log(context.selected.id);
  // }, []);

  const [fireflies, setFireflies] = useState([]);

  // console.log("RERENDER")

  useEffect(() => {
    if (worldContext.worlds.length != 0) {
      // console.log(worldContext);
      const [currentWorld] = worldContext.worlds.filter(world => {
        if (world.id === worldContext.selected.id) {
          return true;
        } else {
          return false;
        }
      });
      // console.log(currentWorld);
      if (currentWorld.fireflies) {
        // console.log("Setting fireflies");
        // console.log(currentWorld.fireflies);
        setFireflies([...currentWorld.fireflies]);
      }
    }
  }, [worldContext]);

  const [, drop] = useDrop({
    accept: itemType.Firefly,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset();
      const left = Math.round(item.left + delta.x);
      const top = Math.round(item.top + delta.y);
      moveFirefly(item.id, left, top);
      setCanDrag(false);
      return undefined;
    }
  });
  const moveFirefly = (id, left, top) => {
    var updatedFirefly;
    const updatedFireflies = fireflies.map(firefly => {
      if (firefly.firefly_id === id) {
        updatedFirefly = {
          ...firefly,
          x: left,
          y: top
        };
        return {
          ...firefly,
          x: left,
          y: top
        };
      } else {
        return firefly;
      }
    });
    updateBlocks(
      context.selected.id,
      id,
      worldContext.selected.id,
      updatedFirefly,
      worldDispatch
    );
    setFireflies([...updatedFireflies]);
  };

  const confirmRemove = () => {
    removeFirefly(
      context.selected.id,
      ffId,
      worldContext.selected.id,
      worldDispatch
    ).then(() => {
      setTrashOpen(!trashOpen);
    });
  };

  return (
    <div ref={drop} className={classes.fireflyContainer}>
      {fireflies
        ? fireflies.map(firefly => {
            // const left =  Math.floor((Math.random() * 100) + 1)
            // const right =  Math.floor((Math.random() * 100) + 1)
            return (
              <FireflyItem
                key={firefly.firefly_id}
                id={firefly.firefly_id}
                left={firefly.x}
                top={firefly.y}
                hideSourceOnDrag={hideSourceOnDrag}
                canDrag={ffId === firefly.firefly_id && canDrag}
              >
                <div
                  className={
                    ffId === firefly.firefly_id && menuActive
                      ? classed.draggableFirefly + " open"
                      : classed.draggableFirefly
                  }
                >
                  <div
                    className={`${
                      menuActive && ffId === firefly.firefly_id
                        ? classed.menu
                        : classed.hidden
                    }`}
                  >
                    <div
                      onClick={() => (setCanDrag(true), setMenuState(false))}
                      style={{ zIndex: "100" }}
                    >
                      <FaArrowsAlt className={classed.move} />
                    </div>
                    <Link
                      to={{
                        pathname: "/game",
                        firefly: firefly,
                        selectedWorldId: worldContext.selected.id
                      }}
                    >
                      <FaPen className={classed.pen} />
                    </Link>
                    <div onClick={() => setTrashOpen(true)}>
                      <FaTrashAlt className={classed.trash} />
                    </div>
                  </div>

                  <div
                    onClick={() => (
                      setFFId(firefly.firefly_id), setMenuState(!menuActive)
                    )}
                    className={
                      ffId === firefly.firefly_id && canDrag ?
                      classed.fireflyWrapper + " move" :
                      classed.fireflyWrapper
                    }
                  >
                    <FFanim
                      height={129}
                      width={132}
                      accessory="none"
                      color={642}
                      awake={true}
                      animationList={firefly.codeBlocks}
                      playing={props.playing}
                    />
                  </div>
                  <Dialog
                    open={ffId === firefly.firefly_id && trashOpen}
                    onClose={() => setTrashOpen(false)}
                    are-labelledby="remove-profile-dialog"
                    classed={{
                      paper: classed.dialogPaper
                    }}
                  >
                    <DialogContent className={classed.dialogContainer}>
                      <div className={classed.dialogTop}>
                        <FFicon
                          height={257}
                          width={264}
                          accessory="none"
                          color={642}
                        />
                        <DialogContentText className={classed.dialogText}>
                          BYE BYE!
                        </DialogContentText>
                      </div>

                      <DialogActions>
                        <div className={classed.dialogButtonContainer}>
                          <button
                            className={classed.dialogButtons + " cancel"}
                            onClick={() => setTrashOpen(false)}
                          >
                            <FaTimes />
                          </button>

                          <button
                            onClick={() => confirmRemove()}
                            className={classed.dialogButtons + " remove"}
                          >
                            <FaCheck />
                          </button>
                        </div>
                      </DialogActions>
                    </DialogContent>
                  </Dialog>
                </div>
              </FireflyItem>
            );
          })
        : null}
    </div>
  );
};

export default FireflyContainer;
