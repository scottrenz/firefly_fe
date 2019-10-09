import React from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";

const List = styled.div`
  height: 100vh;
  padding: 0 5px;
`;

const Kiosk = styled(List)`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  border-radius: 0px 20px 20px 0px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  max-height: 100%;
  background: #fff;
`;

const Block = styled.span`
  width: 100%;
  height: 100%;
  position: relative;

  ~ div {
    transform: none !important;
  }
`;

const BlockUsed = styled.span`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0.6;

  ~ div {
    transform: none !important;
  }
`;

const Tool = styled.div`
  display: flex;
  margin: 10px 0 33px 0;
`;

const ToolUsed = styled.div`
  display: flex;
  opacity: 0.6;
  margin: 10px 0 33px 0;
`;

const Item = styled.div`
  display: flex;
  user-select: none;
  position: relative;
`;

const Clone = styled.span`
  width: 100%;
  height: 100%;
  position: relative;

  ~ div {
    transform: none !important;
  }
`;

const Toolbox = ({ tools }) => {
  return (
    <div>
      <Droppable
        droppableId="ITEMS"
        isDropDisabled={true}
        direction="horizontal"
      >
        {(provided, snapshot) => (
          <Kiosk
            ref={provided.innerRef}
            innerRef={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {tools.map((item, index) => {
              return (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                  isDragDisabled={item.used}
                >
                  {(provided, snapshot) => (
                    <React.Fragment>
                      <Item
                        ref={provided.innerRef}
                        innerRef={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        style={provided.draggableProps.style}
                      >
                        {item.used ? (
                          <BlockUsed>
                            <ToolUsed>
                              {item.content}
                              {item.functionality}
                            </ToolUsed>
                          </BlockUsed>
                        ) : (
                          <Block>
                            <Tool>
                              {item.content}
                              {item.functionality}
                            </Tool>
                          </Block>
                        )}
                      </Item>
                      {snapshot.isDragging && (
                        <Clone>
                          <Tool>
                            {item.content}
                            {item.functionality}
                          </Tool>
                        </Clone>
                      )}
                    </React.Fragment>
                  )}
                </Draggable>
              );
            })}
          </Kiosk>
        )}
      </Droppable>
    </div>
  );
};

export default Toolbox;
