import React, { Component } from "react";
import fireflyHover from "../../assets/animations/fireflyHover";
import uuid from "uuid/v4";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
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

const Content = styled.div`
  margin-right: 200px;
`;

const Item = styled.div`
  display: flex;
  user-select: none;
  padding: 0.5rem;
  margin: 0 0 0.5rem 0;
  align-items: flex-start;
  align-content: flex-start;
  line-height: 1.5;
  border-radius: 3px;
  background: #fff;
  border: 1px ${props => (props.isDragging ? "dashed #000" : "solid #ddd")};
`;

const Clone = styled(Item)`
  ~ div {
    transform: none !important;
  }
`;

const List = styled.div`
  min-height: 100px;
  border: 1px ${props => (props.isDraggingOver ? "dashed #000" : "solid #ddd")};
  background: #fff;
  padding: 0.5rem 0.5rem 0;
  border-radius: 3px;
  flex: 0 0 150px;
  font-family: sans-serif;
`;

const Kiosk = styled(List)`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  height: 64px;
`;

const Container = styled(List)`
  display: flex;
  margin: 0.5rem 0.5rem 1.5rem;
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

const ITEMS = [
  {
    id: uuid(),
    content: "START"
  },
  {
    id: uuid(),
    content: "COLOR"
  },
  {
    id: uuid(),
    content: "DELAY"
  },
  {
    id: uuid(),
    content: "TOGGLE"
  },
  {
    id: uuid(),
    content: "REPEAT"
  }
];

export default class CodeView extends Component {
  state = {
    [uuid()]: []
  };
  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    switch (source.droppableId) {
      case destination.droppableId:
        this.setState({
          [destination.droppableId]: reorder(
            this.state[source.droppableId],
            source.index,
            destination.index
          )
        });
        break;
      case "ITEMS":
        this.setState({
          [destination.droppableId]: copy(
            ITEMS,
            this.state[destination.droppableId],
            source,
            destination
          )
        });
        break;
      default:
        this.setState(
          move(
            this.state[source.droppableId],
            this.state[destination.droppableId],
            source,
            destination
          )
        );
        break;
    }
  };

  addList = e => {
    this.setState({ [uuid()]: [] });
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Content>
          {Object.keys(this.state).map((list, i) => (
            <Droppable key={list} droppableId={list} direction="horizontal">
              {(provided, snapshot) => (
                <Container
                  ref={provided.innerRef}
                  innerRef={provided.innerRef}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.state[list].length
                    ? this.state[list].map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided, snapshot) => (
                            <Item
                              ref={provided.innerRef}
                              innerRef={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              isDragging={snapshot.isDragging}
                              style={provided.draggableProps.style}
                            >
                              {item.content}
                            </Item>
                          )}
                        </Draggable>
                      ))
                    : !provided.placeholder && <Notice>Drop items here</Notice>}
                  {provided.placeholder}
                </Container>
              )}
            </Droppable>
          ))}
        </Content>
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
              {ITEMS.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
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
                        {item.content}
                      </Item>
                      {snapshot.isDragging && <Clone>{item.content}</Clone>}
                    </React.Fragment>
                  )}
                </Draggable>
              ))}
            </Kiosk>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}
