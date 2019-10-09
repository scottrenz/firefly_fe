import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Cloud from "../../assets/animations/Cloud";
import styled from "styled-components";

const Trash = styled.div`
  height: 150px;
  width: 150px;
  font-size: 60px;
  &:hover {
    /* background: #dc143c; */
    font-size: 68px;
    transition: 0.3s;
    translate: (50px 50px);
    color: #e3e5e8;
  }
  /* border-top-left-radius: 100%; */
  position: absolute;
  right: 0;
  bottom: 0;
  color: #abb0ba;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  z-index: 5;
`;

const Destruction = styled.div`
  height: 350px;
  width: 350px;

  /* border-top-left-radius: 100%; */
  position: absolute;
  z-index: -5;
  right: 0px;
  bottom: 0px;
`;

const DropDelete = ({ trashing }) => {
  return (
    <Droppable
      droppableId="TRASH"
      isDropDisabled={false}
      direction="horizontal"
    >
      {(provided, snapshot) => (
        <div style={{position: "absolute", right: 0, bottom: 0}}>
          {!trashing ? (
            <Trash
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <FontAwesomeIcon icon="trash-alt" />
            </Trash>
          ) : (
            <Destruction
              ref={provided.innerRef}
              innerRef={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
            >
              <Cloud />
            </Destruction>
          )}
        </div>
      )}
    </Droppable>
  );
};

export default DropDelete;
