import React, { useState, useContext, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./ProjectDetailMain.scss";
import { Button, Form } from "react-bootstrap";
import ProjectDetail from "../ProjectDetail";
import tasksContext from "../../../../Context/tasksItemsContext";
import Modal from "../../../Modal/Modal";
import CompleteSprint from "../../../CompleteSprint/CompleteSprint";
import { v4 as uuid } from "uuid";
import ProjectDetailHeader from "../ProjectDetailHeader/ProjectDetailHeader";
import EditTask from "../../../Task/EditTask/EditTask";

const onDrag = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  // If it is dragged into different column
  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const sourceItems = [...sourceColumn.items];

    const destinationColumn = columns[destination.droppableId];
    const destinationItems = [...destinationColumn.items];

    const [removedItems] = sourceItems.splice(source.index, 1);
    destinationItems.splice(destination.index, 0, removedItems);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destinationColumn,
        items: destinationItems,
      },
    });
  }
  // If it is dragged into same column
  else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removedItems] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removedItems);

    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function ProjectDetailMain() {
  const [columns, setColumns] = useState([]);
  const { tasks } = useContext(tasksContext);
  const itemsData = tasks;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  // const handleModalOpen = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  const dismissable = () => {
    setIsModalOpen(false);
  };

  const handleModalOpenEdit = () => {
    setIsModalOpenEdit(!isModalOpenEdit);
  };
  const dismissableEdit = () => {
    setIsModalOpenEdit(false);
  };

  const columnsData = {
    [uuid()]: {
      name: "To do",
      items: itemsData,
    },
    [uuid()]: {
      name: "In Progress",
      items: [],
    },
    [uuid()]: {
      name: "In Review",
      items: [],
    },
    [uuid()]: {
      name: "In Testing",
      items: [],
    },
    [uuid()]: {
      name: "Done",
      items: [],
    },
  };

  useEffect(() => {
    setColumns(columnsData);
  }, [columnsData, tasks]);

  useEffect(() => {}, []);

  return (
    <ProjectDetail>
      <main className="ProjectDetailMain">
        <ProjectDetailHeader />
        <section>
          <Form className="projectForm">
            <Form.Control type="text" placeholder="Search for Issue" />
            <div className="buttons">
              <Button>Me</Button>
            </div>
          </Form>
        </section>
        <section className="ProjectDetailMainLayout" id="scrollbar-1">
          <DragDropContext
            onDragEnd={(result) => onDrag(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <article className="ProjectDetailDiv" key={columnId}>
                  <div>{column.name}</div>
                  <div
                    style={{ margin: 15 }}
                    className="DroppableDiv"
                    id="scrollbar-2"
                  >
                    <Droppable
                      droppableId={columnId}
                      key={columnId}
                      className="DraggableDiv"
                    >
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="ProjectProgressDiv"
                            style={{
                              background: snapshot.isDraggingOver
                                ? "lightblue"
                                : "white",
                            }}
                          >
                            {column.items
                              ? column.items.map((item, index) => {
                                  return (
                                    <Draggable
                                      key={item.id}
                                      draggableId={item.id}
                                      index={index}
                                    >
                                      {(provided) => {
                                        return (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="DraggableDiv"
                                            style={{
                                              userSelect: "none",
                                              ...provided.draggableProps.style,
                                            }}
                                            onClick={handleModalOpenEdit}
                                          >
                                            {item.content}
                                          </div>
                                        );
                                      }}
                                    </Draggable>
                                  );
                                })
                              : ""}
                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </article>
              );
            })}
          </DragDropContext>
        </section>
      </main>

      <Modal
        visible={isModalOpen}
        children={isModalOpen ? <CompleteSprint dismiss={dismissable} /> : ""}
      />

      <Modal
        visible={isModalOpenEdit}
        children={isModalOpenEdit ? <EditTask dismiss={dismissableEdit} /> : ""}
      />
    </ProjectDetail>
  );
}

export default ProjectDetailMain;
