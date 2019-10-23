import React, { useState, useEffect, useContext } from "react";
import FFbox from "./FFbox";
// import GameBoard from "./BlockLine";
import BlockLine from "./BlockLine";
import Toolbox from "./Toolbox";
import DropDelete from "./DropDelete";
import uuid from "uuid/v4";
import styled from "styled-components";
import uifx from "uifx";
import { DragDropContext } from "react-beautiful-dnd";
import StartBlock from "../../images/gameIcons/StartBlock.svg";
import BlueBlockLeftSideEndState from "../../images/gameIcons/BlueBlockLeftSideEndState.svg";
import GreenBlockRightSideEndState from "../../images/gameIcons/GreenBlockRightSideEndState.svg";
import RepeatIconNew from "../../images/gameIcons/RepeatIconNew.svg";
import LightbulbIcon from "../../images/gameIcons/LightbulbIcon.svg";
import ClockIcon from "../../images/gameIcons/ClockIcon.svg";
import PlayCircleIcon from "../../images/gameIcons/PlayCircleIcon.svg";
import PaletteIcon from "../../images/gameIcons/PaletteIcon.svg";
import ToggleOffIcon from "../../images/gameIcons/ToggleOffIcon.svg";
import LockIcon from "../../images/gameIcons/LockIcon.svg";
import CheckCircleIcon from "./../../images/gameIcons/CheckCircleIcon.svg";
import QuestionMarkBookDark from "./../../images/gameIcons/QuestionMarkBookDark.svg";

import GridIcon from "../../images/gridBackground.png";
import { gameContext } from "../../context/Game/GameStore";
import { childContext } from "../../context/ChildProfiles/ChildProfileStore";

//importing the sound
import clickMP3 from "../../assets/sounds/click.mp3";
import clickTogetherMP3 from "../../assets/sounds/clickTogether.mp3";
import poofMP3 from "../../assets/sounds/poof.mp3";
import { nextTick } from "q";
import { Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { updateBlocks } from "../../utils/firebaseInteractions";
//making the sounds variable
const click = new uifx({ asset: clickMP3 });
const clickTogether = new uifx({ asset: clickTogetherMP3 });
const poof = new uifx({ asset: poofMP3 });

//styling
const Background = styled.div`
    position: absolute;
    width: 1024px;
    height: 768px;
    background-image: url(${GridIcon});
    background-repeat: repeat;
    z-index: -10;
    top: 0;
    left: auto;
`;

const Board = styled.div`
  /* min-height: 100vh; */
  width: 100%;
  position: relative;
  height: 768px;
  overflow: hidden;
  /* background-image: url(${GridIcon}); */
  /* margin: -10% 0; */
  /* padding-bottom: 30%; */
`;

const ToolboxGreenIcon = styled.img`
    position: absolute;
    width: 40%;
    top: 25%;
    left: 29%;
`;

const ToolboxBlueLedIcon = styled.img`
    position: absolute;
    width: 45%;
    top: 18%;
    left: 26%;
`;

const ToolboxBlueRepeatIcon = styled.img`
    position: absolute;
    width: 50%;
    top: 24%;
    left: 23%;
`;

const ToolboxToggleIcon = styled.img`
    position: absolute;
    top: 30%;
    left: 29%;
`;

const ToolboxLockIcon = styled.img`
    position: absolute;
    top: 26%;
    left: 33%;
`;

const ToolboxBox = styled.img`
    width: 100%;
`;
// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    // if (list) {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
    // }
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const ITEMS = [
    {
        id: uuid(),
        functionality: (
            <ToolboxGreenIcon src={PlayCircleIcon} alt="playCircleIcon" />
        ),
        content: <ToolboxBox src={StartBlock} alt="startblock" />,
        used: false,
        rsi: 0,
    },
    {
        id: uuid(),
        functionality: (
            <ToolboxBlueLedIcon src={LightbulbIcon} alt="lightbulbIcon" />
        ),
        content: <ToolboxBox src={BlueBlockLeftSideEndState} alt="blueblock" />,
        used: false,
        rsi: 1,
    },
    {
        id: uuid(),
        functionality: (
            <ToolboxBlueRepeatIcon src={RepeatIconNew} alt="repeatIcon" />
        ),
        content: (
            <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />
        ),
        used: false,
        rsi: 2,
        repeat: 1,
    },

    {
        id: uuid(),
        functionality: <ToolboxGreenIcon src={PaletteIcon} alt="paletteIcon" />,
        content: (
            <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />
        ),
        used: false,
        rsi: 3,
    },
    {
        id: uuid(),
        functionality: <ToolboxGreenIcon src={ClockIcon} alt="clockIcon" />,
        content: (
            <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />
        ),
        used: false,
        rsi: 4,
        timer: 1,
    },
    // {
    //   id: uuid(),
    //   functionality: <ToolboxGreenIcon src={NumberIcon1} alt="numberIcon" />,
    //   content: <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />,
    //   used: false,
    //   rsi: 5
    // },
    {
        id: uuid(),
        functionality: (
            <ToolboxToggleIcon src={ToggleOffIcon} alt="toggleIcon" />
        ),
        content: (
            <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />
        ),
        used: false,
        rsi: 6,
        onOff: false,
    },
    {
        id: uuid(),
        functionality: <ToolboxLockIcon src={LockIcon} alt="lockIcon" />,
        content: (
            <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />
        ),
        used: true,
        rsi: 7,
    },
    {
        id: uuid(),
        functionality: <ToolboxLockIcon src={LockIcon} alt="lockIcon" />,
        content: (
            <ToolboxBox src={GreenBlockRightSideEndState} alt="greenblock" />
        ),
        used: true,
        rsi: 8,
    },
];

const Game = props => {
    const classes = makeStyles(theme => ({
        save: {
            ...theme.smallIconButton,
            width: "45px",
            backgroundColor: "#4AA810",
        },
        buttonContainer: {
            position: "absolute",
            right: "5%",
            top: "4.2%",
            display: "flex",
            width: "12%",
            justifyContent: "space-between",
            alignItems: "center",
        },
        tutorial: {
            width: "37px",
        },
        game: {
            width: "100vw",
            position: "relative",
            height: "100vh",
            overflow: "hidden",
            [theme.breakpoints.up("lg")]: {
                width: "100%",
                position: "relative",
                height: "768px",
                overflow: "hidden",
            },
        },
        background: {
            position: "absolute",
            width: "100vw",
            overflow: "hidden",
            height: "100vh",
            backgroundImage: `url(${GridIcon})`,
            backgroundRepeat: "repeat",
            zIndex: "-20",
            top: "0",
            left: "auto",
            [theme.breakpoints.up("lg")]: {
                position: "absolute",
                width: "1024px",
                height: "768px",
                backgroundImage: `url(${GridIcon})`,
                backgroundRepeat: "repeat",
                zIndex: "-20",
                top: "0",
                left: "auto",
            },
        },
    }))();
    //Set list to firefly out of context/firestore
    //display loader while loading
    //on cancel setList to list out of context/firestore
    //on save, send list to context/firestore

    //worldContext.selected (selected world), props.firefly (firefly), profileContext.selected (child ID)

    const [childProfileState, childDispatch] = useContext(childContext);
    const [worldContext, worldDispatch] = useContext(gameContext);

    const listId = uuid();
    const [list, setList] = useState({ [listId]: [] });

    const [tools, setTools] = useState(ITEMS);
    const [hasStart, setHasStart] = useState(false);
    const [draggingBlock, isDraggingBlock] = useState(false);
    const [animationList, setAnimationList] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [trashing, setTrashing] = useState(false);

    const createBlocksFromBackend = blockList => {
        const newList = blockList.map(block => {
            switch (block.type) {
                case "repeat":
                    return {
                        ...ITEMS[2],
                        repeat: block.value,
                        id: uuid(),
                    };
                case "color":
                    return {
                        ...ITEMS[3],
                        color: block.value,
                        id: uuid(),
                    };
                case "timer":
                    return {
                        ...ITEMS[4],
                        timer: block.value,
                        id: uuid(),
                    };
                case "onOff":
                    return {
                        ...ITEMS[5],
                        onOff: block.value,
                        id: uuid(),
                    };
            }
        });

        setTools(
            [...tools].map((tool, index) => {
                if (index === 0 || index === 1) {
                    return {
                        ...tool,
                        used: true,
                    };
                } else {
                    return { ...tool };
                }
            })
        );

        setHasStart(true);

        setList({
            [listId]: [
                {
                    ...ITEMS[0],
                    id: uuid(),
                },
                {
                    ...ITEMS[1],
                    id: uuid(),
                },
                ...newList,
            ],
        });
    };

    //Load fireflies from backend
    useEffect(() => {
        if (!worldContext.loaded) {
            props.history.push("/choose-profile");
        }
        if (
            props.location.firefly &&
            props.location.firefly.codeBlocks.length !== 0
        ) {
            if (list[listId].length === 0) {
                console.log(list[listId].length);
                createBlocksFromBackend([...props.location.firefly.codeBlocks]);
            }
        }
    }, []);

    const updateFirefly = () => {
        const updatedFirefly = {
            ...props.location.firefly,
            codeBlocks: [...animationList],
        };

        updateBlocks(
            childProfileState.selected.id,
            props.location.firefly.firefly_id,
            props.location.selectedWorldId,
            updatedFirefly,
            worldDispatch
        ).then(() => {
            props.history.push("/fireflyworld");
        });
    };

    useEffect(() => {
        if (list.length !== 0) {
            Object.values(list).map(blockArray => {
                const newBlockArray = blockArray
                    .map(block => {
                        if (block.color) {
                            return { type: "color", value: block.color };
                        } else if (block.onOff !== undefined) {
                            return { type: "onOff", value: block.onOff };
                        } else if (block.timer) {
                            return { type: "timer", value: block.timer };
                        } else if (block.repeat) {
                            return { type: "repeat", value: block.repeat };
                        }
                    })
                    .filter(block => {
                        if (block === undefined) {
                            return false;
                        } else {
                            return true;
                        }
                    });
                setAnimationList([...newBlockArray]);
            });
        }
    }, [list]);

    const onDragStart = () => {
        isDraggingBlock(true);
        click.play();
    };

    const onDragEnd = result => {
        const { source, destination } = result;

        isDraggingBlock(false);
        // clickTogether.play();
        // console.log("tools:", tools);
        // console.log("list:", list);
        // console.log("result:", result);

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (destination.droppableId === "TRASH") {
            //check to see if we are trying to throw away a tool from the toolbox (we don't want to do that)
            if (source.droppableId === "ITEMS") {
                poof.play();
                return;
            }
        }

        if (
            result.draggableId === tools[0].id ||
            result.draggableId === tools[1].id
        ) {
            if (destination.droppableId !== "ITEMS") {
                if (result.draggableId === tools[0].id) {
                    setHasStart(true);
                }
                setTools(
                    [...tools].map(tool => {
                        return tool.id === result.draggableId
                            ? { ...tool, used: true }
                            : { ...tool };
                    })
                );
            }
        }

        if (destination.droppableId === "TRASH") {
            //Filters out the block that got put into trash
            const realList = list[`${source.droppableId}`].filter(item => {
                if (item.id === result.draggableId && item.rsi <= 1) {
                    if (item.id === result.draggableId && item.rsi === 0) {
                        setHasStart(false);
                    }

                    setTools(
                        [...tools].map(tool => {
                            return tool.rsi === item.rsi
                                ? { ...tool, used: false }
                                : { ...tool };
                        })
                    );
                }
                return item.id !== result.draggableId;
            });
            //Filters all tools to used:false so they become usable again
            setList({
                [source.droppableId]: realList,
            });
            setTrashing(true);
            setTimeout(() => {
                setTrashing(false);
            }, 630);
            poof.play();
            return;
        }

        switch (source.droppableId) {
            case destination.droppableId:
                if (destination.droppableId !== "ITEMS") {
                    setList({
                        ...list,
                        [destination.droppableId]: reorder(
                            list[source.droppableId],
                            source.index,
                            destination.index
                        ),
                    });
                }
                break;

            case "ITEMS":
                //On Drop of the code list, this renders
                // console.log("source:", source);
                // console.log("tools:", tools);
                // console.log("list:", list);

                setList({
                    ...list,
                    [destination.droppableId]: copy(
                        tools,
                        list[destination.droppableId],
                        source,
                        destination
                    ),
                });
                // to play default drop sound 'clickTogether' when dropping the block
                clickTogether.play();
                break;

            default:
                setList(
                    move(
                        list[source.droppableId],
                        list[destination.droppableId],
                        source,
                        destination
                    )
                );
                break;
        }
    };

    const playAnimation = () => {
        setPlaying(!playing);
    };

    const tutorialRedirect = () => {
        const updatedFirefly = {
            ...props.location.firefly,
            codeBlocks: [...animationList],
        };

        updateBlocks(
            childProfileState.selected.id,
            props.location.firefly.firefly_id,
            props.location.selectedWorldId,
            updatedFirefly,
            worldDispatch
        ).then(() => {
            props.history.push({
                pathname: "/tutorial",
                firefly: updatedFirefly,
                selectedWorldId: props.location.selectedWorldId,
            });
        });
    };

    return (
        <div className={classes.game}>
            <div className={classes.background}/>
            <DragDropContext
                onDragEnd={onDragEnd}
                onDragStart={onDragStart}
                style={{ maxHeight: "100%" }}
            >
                <div style={{ height: "100%", position: "absolute" }}>
                    <Toolbox tools={tools} />
                </div>
                <FFbox
                    tools={tools}
                    animationList={animationList}
                    playing={playing}
                />
                <BlockLine
                    list={list}
                    hasStart={hasStart}
                    draggingBlock={draggingBlock}
                    setList={setList}
                    animationList={animationList}
                    setAnimationList={setAnimationList}
                    playAnimation={playAnimation}
                    playing={playing}
                />
                <DropDelete trashing={trashing} />
            </DragDropContext>
            <div className={classes.buttonContainer}>
                <div onClick={tutorialRedirect}>
                    <img
                        src={QuestionMarkBookDark}
                        alt="tutorial"
                        className={classes.tutorial}
                    />
                </div>
                <div onClick={updateFirefly}>
                    <img
                        src={CheckCircleIcon}
                        alt="save check"
                        className={classes.save}
                    />
                </div>
            </div>
        </div>
    );
};

export default Game;
