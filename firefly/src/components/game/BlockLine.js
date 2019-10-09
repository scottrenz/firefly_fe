import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import StartBlockTarget from "./../../images/gameIcons/StartBlockTarget.svg";
import EmptyBlockTarget from "./../../images/gameIcons/EmptyBlockTarget.svg";
import CodeBlock from "./CodeBlock";

const List = styled.div`
  height: 100%;
  min-height: 135px;
  background: none;
  border-radius: 16px;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  padding-bottom: 20px;
`;

const ListContainer = styled.div`
  height: 30%;
  padding-top: 6%;
  min-height: 90px;
  background: none;
  border-radius: 16px;
  width: 89%;
  overflow-x: auto;
  overflow-y: hidden;
  margin-left: 11%;
  display: -webkit-box;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  user-select: none;
  margin: 0 -10px 0 0;
  align-items: flex-start;
  align-content: flex-start;
  border-radius: 3px;
`;

const Notice = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 0.5rem;
  margin: 0 0.5rem 0.5rem;
  border: 1px solid transparent;
  line-height: 1.5;
  color: #aaa;
`;

const GrayedOutBlock = styled.div`
  display: flex;
  opacity: 0.7;
  position: relative;
  width: 97px;
  flex-direction: column;
`;

const ButtonBox = styled.img`
  width: 100%;
`;

const BlockLine = ({
  list,
  setList,
  hasStart,
  draggingBlock,
  animationList,
  setAnimationList,
  playAnimation,
  playing
}) => {
  const [playClicked, setPlayClicked] = useState(false);
  const [openPopper, setOpenPopper] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const togglePopper = (id, blocks, type, value) => {
    if (openPopper) {
      setList({
        ...list,
        [blocks]: list[blocks].map(block => {
          if (block.id === id) {
            return { ...block, [type]: value };
          }
          return block;
        })
      });
    }
    setOpenPopper(!openPopper);
  };

  const errorChecking = i => {
    const [restructuredList] = Object.values(list);

    if (restructuredList.length > 1) {
      if (restructuredList[i].rsi === 3 && !restructuredList[i].color) {
        return true;
      }
      //start block error check
      if (i !== 0 && restructuredList[i].rsi === 0) {
        return true;
      }
      //blue block error check
      if (i !== 1 && restructuredList[i].rsi === 1) {
        return true;
      }
      if (restructuredList.length > i + 1 && i !== 0) {
        if (
          restructuredList[i].repeat &&
          (restructuredList[i + 1].repeat || restructuredList[i - 1].repeat)
        ) {
          return true;
        } else {
          return false;
        }
      } else if (i === 0) {
        if (restructuredList[i].repeat && restructuredList[i + 1].repeat) {
          return true;
        } else {
          return false;
        }
      } else {
        if (restructuredList[i].repeat && restructuredList[i - 1].repeat) {
          return true;
        } else {
          return false;
        }
      }
    }
  };

  useEffect(() => {
    setPlayClicked(false);
  }, [list]);

  const clickedPlay = () => {
    const [listArray] = Object.values(list);
    let lineError = false;
    setPlayClicked(true);

    for (let i = 0; i < listArray.length; i++) {
      if (lineError) {
        break;
      }
      lineError = errorChecking(i);
    }

    if (!lineError) {
      playAnimation();
    }
  };

  return (
    <ListContainer>
      {Object.keys(list).map((blocks, i) => (
        <Droppable key={blocks} droppableId={blocks} direction="horizontal">
          {(provided, snapshot) => (
            <List
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {/* Conditional rendering of first start block in code line */}

              <GrayedOutBlock style={hasStart ? { display: "none" } : null}>
                <ButtonBox src={StartBlockTarget} alt="startblock" />
              </GrayedOutBlock>

              {/* Mapping through list[blocks] to create each code block */}
              {list[blocks].length
                ? list[blocks].map((item, index) => (
                    <CodeBlock
                      key={item.id}
                      item={item}
                      index={index}
                      id={item.id}
                      openPopper={openPopper}
                      togglePopper={togglePopper}
                      list={list}
                      setList={setList}
                      blocks={blocks}
                      animationList={animationList}
                      setAnimationList={setAnimationList}
                      playAnimation={playAnimation}
                      clickedPlay={clickedPlay}
                      playClicked={playClicked}
                      errorChecking={errorChecking}
                      anchorEl={anchorEl}
                      setAnchorEl={setAnchorEl}
                      setOpenPopper={setOpenPopper}
                    />
                  ))
                : !provided.placeholder && <Notice>Drop items here</Notice>}
              <Item>
                <GrayedOutBlock
                  style={
                    draggingBlock && list[blocks].length > 0
                      ? {
                          marginLeft: "10px",
                          position: "relative",
                          zIndex: "-1"
                        }
                      : {
                          display: "none"
                        }
                  }
                >
                  <ButtonBox src={EmptyBlockTarget} alt="emptyblock" />
                </GrayedOutBlock>
              </Item>
              {provided.placeholder}
            </List>
          )}
        </Droppable>
      ))}
    </ListContainer>
  );
};

export default BlockLine;
