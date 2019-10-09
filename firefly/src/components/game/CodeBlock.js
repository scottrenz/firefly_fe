import React, { useState, useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Poppers } from "./Poppers.js";
import PaletteIcon from "./Poppers/PaletteIcon.js";
import CheckCircleIcon from "./../../images/gameIcons/CheckCircleIcon.svg";
import ToggleOnIcon from "./../../images/gameIcons/ToggleOnIcon.svg";
import ToggleOffIcon from "./../../images/gameIcons/ToggleOffIcon.svg";
import RepeatIconNew from "./../../images/gameIcons/RepeatIconNew.svg";
import GreenBlockRightSideSvg from "./reactSvg/GreenBlockRightSideSvg.js";
import OrangeStartBlock from "./reactSvg/OrangeStartBlock.js";
import BlueBlock from "./reactSvg/BlueBlock.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  checkmark: {
    position: "absolute",
    top: "25%",
    left: "30%",
    width: "40px"
  },

  container: {
    display: "flex",
    flexDirection: "column"
  },

  tool: {
    display: "flex",
    position: "relative",
    width: "100px",
    "& svg": {
      width: "100%",
      height: "100%"
    },
    "&.blockError svg.greenBoxRightSide path": {
      stroke: "#dc143c",
      strokeWidth: "2"
    },
    "&.blockError svg.orangeStartBlock path": {
      stroke: "#dc143c",
      strokeWidth: "2"
    },
    "&.blockError svg.blueBlock path": {
      stroke: "#dc143c",
      strokeWidth: "2"
    }
  },

  item: {
    display: "flex",
    userSelect: "none",
    margin: "0 -10px 0 0",
    alignItems: "flex-start",
    alignContent: "flex-start",
    borderRadius: "3px"
  },

  toggleOn: {
    position: "absolute",
    top: "32%",
    left: "30%"
  },

  toggleOff: {
    position: "absolute",
    top: "32%",
    left: "30%"
  },

  number: {
    position: "absolute",
    left: "28%",
    top: "25%",
    width: "40px"
  },

  count: {
    position: "absolute",
    fontSize: "4.5rem",
    fontFamily: "Nunito",
    left: "25%",
    color: "white",
    top: "25%"
  },

  countTen: {
    position: "absolute",
    fontSize: "2.5rem",
    fontFamily: "Nunito",
    left: "18%",
    color: "white",
    top: "25%"
  },

  palette: {
    position: "absolute",
    left: "28%",
    top: "25%",
    width: "40px",

    "& svg": {
      width: "40px",
      height: "40px"
    }
  },

  repeatIcon: {
    top: "19%",
    left: "17%",
    width: "60%",
    position: "absolute"
  },

  repeatNumber: {
    position: "absolute",
    left: "44%",
    top: "32%",
    fontSize: "2.8rem",
    color: "white"
  }
});

const CodeBlock = ({
  item,
  index,
  togglePopper,
  openPopper,
  setOpenPopper,
  list,
  setList,
  id,
  blocks,
  playAnimation,
  clickedPlay,
  playClicked,
  errorChecking,
  anchorEl,
  setAnchorEl
}) => {
  const classes = useStyles();
  const [error, setError] = useState(false);

  const [togglePalette, setTogglePalette] = useState(false);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [toggleRepeat, setToggleRepeat] = useState(false);
  const [toggleOnOff, setToggleOnOff] = useState(false);

  const [openId, setOpenId] = useState();
  const open = Boolean(anchorEl);

  const popperId = open ? "simple-popper" : undefined;

  //state that's used in lower levels. These are passed in props to different poppers
  //Switch State
  const [onOff, setOnOff] = useState(false);

  //Repeat State
  const [repeat, setRepeat] = useState(1);

  //Timer State
  const [time, setTime] = useState(1);

  //Palette State
  const [color, setColor] = useState(1, 0, 100);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const setPalette = () => {
    setTogglePalette(!togglePalette);
  };

  const setTimer = () => {
    setToggleTimer(!toggleTimer);
  };

  const toggleSetRepeat = () => {
    setToggleRepeat(!toggleRepeat);
  };

  const setOnOffSwitch = () => {
    setToggleOnOff(!toggleOnOff);
  };

  const checkForErrors = () => {
    setError(errorChecking(index));
  };

  const handleClick = event => {
    if (!openPopper) {
      setOpenId(item.id);
      setAnchorEl(anchorEl ? null : event.currentTarget);
    } else if (openPopper) {
      if (item.id === openId) {
        setAnchorEl(null);
        setOpenPopper(!openPopper);
      }
    }
  };

  const toggleAllPoppers = (id, blocks, type, value) => {
    if (type === "color") {
      togglePopper(id, blocks, "color", value);
    } else if (type === "repeat") {
      togglePopper(id, blocks, "repeat", value);
    } else if (type === "timer") {
      togglePopper(id, blocks, "timer", value);
    } else if (type === "onOff") {
      togglePopper(id, blocks, "onOff", value);
    }

    // this is list id: console.log(blocks);
    // this is item id: console.log(id);
  };

  useEffect(() => {
    if (item.color || item.onOff || item.timer || item.repeat) {
      setHasBeenClicked(true);
      if (item.color) {
        setColor(item.color);
      } else if (item.timer) {
        setTime(item.timer);
      } else if (item.repeat) {
        setRepeat(item.repeat);
      } else if (item.onOff) {
        setOnOff(item.onOff);
      }
    }
  }, [item]);

  useEffect(() => {
    checkForErrors();
    if (anchorEl === null) {
      setToggleRepeat(false);
      setTogglePalette(false);
      setToggleOnOff(false);
      setToggleTimer(false);
    }
  }, [list, anchorEl]);

  return (
    <Draggable
      key={item.id}
      draggableId={item.id}
      index={index}
      isDragDisabled={openPopper}
    >
      {(provided, snapshot) => (
        <div className={classes.container}>
          <div
            className={classes.item}
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            isDragging={snapshot.isDragging}
            style={provided.draggableProps.style}
          >
            {//Play/Start Orange Block
            item.rsi === 0 ? (
              <div
                className={
                  error && playClicked
                    ? classes.tool + " blockError"
                    : classes.tool
                }
                onClick={clickedPlay}
              >
                <OrangeStartBlock />
                {item.functionality}
              </div>
            ) : //BlueBlock
            item.rsi === 1 ? (
              <div
                className={
                  error && playClicked
                    ? classes.tool + " blockError"
                    : classes.tool
                }
              >
                <BlueBlock />
                {item.functionality}
              </div>
            ) : //Repeat
            item.rsi === 2 ? (
              <Poppers
                onClick={event => {
                  handleClick(event);
                  if (!openPopper || toggleRepeat) {
                    toggleAllPoppers(id, blocks, "repeat", repeat);
                    toggleSetRepeat();
                  } else {
                    return null;
                  }
                }}
                openPopper={openPopper}
                anchorEl={anchorEl}
                popperId={popperId}
                open={open}
                toggleRepeat={toggleRepeat}
                repeat={repeat}
                setRepeat={setRepeat}
              >
                {toggleRepeat ? (
                  <div className={classes.tool}>
                    <GreenBlockRightSideSvg />
                    <img
                      src={CheckCircleIcon}
                      alt="check circle"
                      className={classes.checkmark}
                    />
                  </div>
                ) : (
                  <div
                    className={
                      error && playClicked
                        ? classes.tool + " blockError"
                        : classes.tool
                    }
                  >
                    <GreenBlockRightSideSvg />
                    {repeat === 1 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat one"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>1</p>
                      </div>
                    ) : repeat === 2 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat two"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>2</p>
                      </div>
                    ) : repeat === 3 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat three"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>3</p>
                      </div>
                    ) : repeat === 4 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat four"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>4</p>
                      </div>
                    ) : repeat === 5 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat five"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>5</p>
                      </div>
                    ) : repeat === 6 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat six"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>6</p>
                      </div>
                    ) : repeat === 7 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat seven"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>7</p>
                      </div>
                    ) : repeat === 8 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat eight"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>8</p>
                      </div>
                    ) : repeat === 9 ? (
                      <div>
                        <img
                          src={RepeatIconNew}
                          alt="repeat nine"
                          className={classes.repeatIcon}
                        />
                        <p className={classes.repeatNumber}>9</p>
                      </div>
                    ) : null}
                  </div>
                )}
              </Poppers>
            ) : //Palette
            item.rsi === 3 ? (
              <Poppers
                onClick={event => {
                  handleClick(event);
                  if (!openPopper || togglePalette) {
                    toggleAllPoppers(id, blocks, "color", color);
                    setPalette();
                    setHasBeenClicked(true);
                  } else {
                    return null;
                  }
                }}
                openPopper={openPopper}
                anchorEl={anchorEl}
                popperId={popperId}
                open={open}
                togglePalette={togglePalette}
                color={color}
                setColor={setColor}
                hasBeenClicked={hasBeenClicked}
                setHasBeenClicked={setHasBeenClicked}
              >
                {togglePalette ? (
                  <div className={classes.tool}>
                    <GreenBlockRightSideSvg />
                    <img
                      src={CheckCircleIcon}
                      alt="check circle"
                      className={classes.checkmark}
                    />
                  </div>
                ) : (
                  <div
                    className={
                      error && playClicked
                        ? classes.tool + " blockError"
                        : classes.tool
                    }
                  >
                    <GreenBlockRightSideSvg />
                    {
                      <div className={classes.palette}>
                        <PaletteIcon
                          fill={color}
                          hasBeenClicked={hasBeenClicked}
                        />
                      </div>
                    }
                  </div>
                )}
              </Poppers>
            ) : //Timer
            item.rsi === 4 ? (
              <Poppers
                onClick={event => {
                  handleClick(event);
                  if (!openPopper || toggleTimer) {
                    toggleAllPoppers(id, blocks, "timer", time);
                    setTimer();
                  } else {
                    return null;
                  }
                }}
                openPopper={openPopper}
                anchorEl={anchorEl}
                popperId={popperId}
                open={open}
                toggleTimer={toggleTimer}
                time={time}
                setTime={setTime}
              >
                {toggleTimer ? (
                  <div className={classes.tool}>
                    <GreenBlockRightSideSvg />
                    <img
                      src={CheckCircleIcon}
                      alt="check circle"
                      className={classes.checkmark}
                    />
                  </div>
                ) : (
                  <div className={classes.tool}>
                    <GreenBlockRightSideSvg />
                    {time === 1 ? (
                      <p className={classes.count}>1s</p>
                    ) : time === 2 ? (
                      <p className={classes.count}>2s</p>
                    ) : time === 3 ? (
                      <p className={classes.count}>3s</p>
                    ) : time === 4 ? (
                      <p className={classes.count}>4s</p>
                    ) : time === 5 ? (
                      <p className={classes.count}>5s</p>
                    ) : time === 6 ? (
                      <p className={classes.count}>6s</p>
                    ) : time === 7 ? (
                      <p className={classes.count}>7s</p>
                    ) : time === 8 ? (
                      <p className={classes.count}>8s</p>
                    ) : time === 9 ? (
                      <p className={classes.count}>9s</p>
                    ) : time === 10 ? (
                      <p className={classes.countTen}>10s</p>
                    ) : (
                      item.functionality
                    )}
                  </div>
                )}
              </Poppers>
            ) : // ) : //Count
            // item.rsi === 5 ? (
            //   <Poppers
            //onClick={event => {
            //      handleClick(event);
            //     if (!openPopper || toggleCount) {
            //       toggleAllPoppers(id, blocks, "number", number);
            //     setCount();
            //           } else {
            //             return null;
            //   }
            // }}

            //     openPopper={openPopper}
            //     anchorEl={anchorEl}
            //                popperId={popperId}
            // open={open}
            //     toggleCount={toggleCount}
            //     number={number}
            //     setNumber={setNumber}
            //   >
            //     {toggleCount ? (
            //       <div className={classes.tool}>
            //         <GreenBlockRightSideSvgclassName={classes.svgBlock}/>
            //         <img
            //           src={CheckCircleIcon}
            //           alt="check circle"
            //           className={classes.checkmark}
            //         />
            //       </div>
            //     ) : (
            //       <div className={classes.tool}>
            //         <GreenBlockRightSideSvgclassName={classes.svgBlock}/>
            //         {number === 1 ? (
            //           <img
            //             src={NumberIcon1}
            //             alt="number one"
            //             className={classes.number}
            //           />
            //         ) : number === 2 ? (
            //           <img
            //             src={NumberIcon2}
            //             alt="number two"
            //             className={classes.number}
            //           />
            //         ) : number === 3 ? (
            //           <img
            //             src={NumberIcon3}
            //             alt="number three"
            //             className={classes.number}
            //           />
            //         ) : number === 4 ? (
            //           <img
            //             src={NumberIcon4}
            //             alt="number four"
            //             className={classes.number}
            //           />
            //         ) : number === 5 ? (
            //           <img
            //             src={NumberIcon5}
            //             alt="number five"
            //             className={classes.number}
            //           />
            //         ) : number === 6 ? (
            //           <img
            //             src={NumberIcon6}
            //             alt="number six"
            //             className={classes.number}
            //           />
            //         ) : number === 7 ? (
            //           <img
            //             src={NumberIcon7}
            //             alt="number seven"
            //             className={classes.number}
            //           />
            //         ) : number === 8 ? (
            //           <img
            //             src={NumberIcon8}
            //             alt="number eight"
            //             className={classes.number}
            //           />
            //         ) : number === 9 ? (
            //           <img
            //             src={NumberIcon9}
            //             alt="number nine"
            //             className={classes.number}
            //           />
            //         ) : null}
            //       </div>
            //     )}
            //   </Poppers>

            //Switch
            item.rsi === 6 ? (
              <Poppers
                onClick={event => {
                  handleClick(event);
                  if (!openPopper || toggleOnOff) {
                    toggleAllPoppers(id, blocks, "onOff", onOff);
                    setOnOffSwitch();
                  } else {
                    return null;
                  }
                }}
                onOff={onOff}
                setOnOff={setOnOff}
                openPopper={openPopper}
                anchorEl={anchorEl}
                popperId={popperId}
                open={open}
                toggleOnOff={toggleOnOff}
              >
                {toggleOnOff ? (
                  <div className={classes.tool}>
                    <GreenBlockRightSideSvg />
                    <img
                      src={CheckCircleIcon}
                      alt="check circle"
                      className={classes.checkmark}
                    />
                  </div>
                ) : (
                  <div className={classes.tool}>
                    <GreenBlockRightSideSvg />
                    {onOff ? (
                      <img
                        src={ToggleOnIcon}
                        alt="toggle on"
                        className={classes.toggleOn}
                      />
                    ) : (
                      <img
                        src={ToggleOffIcon}
                        alt="toggle off"
                        className={classes.toggleOff}
                      />
                    )}
                  </div>
                )}
              </Poppers>
            ) : (
              //These are for the start, led, because they dont have poppers
              <div className={classes.tool}>
                {item.content}
                {item.functionality}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default CodeBlock;
