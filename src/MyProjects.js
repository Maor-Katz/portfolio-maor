import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDrag, useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';

export default function MyProjects({ _artists }) {
    // const [{ isDragging }, drag] = useDrag({
    //     item: {
    //         type: "project"
    //     },
    //     collect: monitor => {
    //         return {
    //             isDragging: !!monitor.isDragging()
    //         };
    //     }
    // });


    // const [{ isOverProject }, drop] = useDrop({
    //     accept: "project",
    //     drop: (item, monitor) => {
    //         console.log(item);
    //     }
    // });
    const grid = 8;

    const getItemStyle = (isDragging, draggableStyle) => ({
        // some basic styles to make the items look a bit nicer
        userSelect: "none",
        // padding: grid * 2,
        // margin: `0 0 ${grid}px 0`,
        display: "'inline-flex'",
        // change background colour if dragging
        background: isDragging ? "lightgreen" : "grey",

        // styles we need to apply on draggables
        ...draggableStyle
    });

    const getListStyle = isDraggingOver => ({
        // background: isDraggingOver ? "yellow" : "unset",

    });
    const onDragEnd = (x) => {
        debugger;
    };
    const onDragUpdate = (e) => {
        debugger;
    };

    return (
        // <DragDropContext
        //     onDragEnd={(x) => onDragEnd(x)}
        // // onDragUpdate={(e) => onDragUpdate(e)}
        // >
        //     <Droppable droppableId="images" >
        //         {(providedDrop, snapshotDrop) => (
        //             <div className="categories" ref={providedDrop.innerRef}
        //                 {...providedDrop.droppableProps}
        //                 style={{
        //                     background: snapshotDrop.isDraggingOver ? "lightblue" : "unset",

        //                     // ...providedDrop.draggableProps.style
        //                 }}>
        //                 {_artists.map((project, index) => (
        //                     <Draggable key={project.id}
        //                         draggableId={"draggable"}
        //                         index={index}

        //                     >
        //                         {(providedDragable, snapshot2) => (
        //                             <span ref={providedDragable.innerRef}
        //                                 {...providedDragable.draggableProps}
        //                                 {...providedDragable.dragHandleProps}
        //                                 style={{
        //                                     background: snapshot2.isDragging ? "yellow" : "blue",
        //                                     userSelect: "none",
        //                                     ...providedDragable.draggableProps.style
        //                                 }}
        //                                 className="hompageCategory"

        //                             >

        //                                 <Link to={`/${project.projectURL}/`} key={index}>

        //                                     <div className="specificCategory"
        //                                         key={index}

        //                                     >

        //                                         <img src={project.imageName} className="imgCard" alt="alt" />
        //                                         <div className="bottomCard">
        //                                             <div className="categoryName">{project.title}</div>
        //                                             <div className="personDetails">
        //                                                 <span>{project.library + '  '}</span>
        //                                                 <span>{project.description}</span>
        //                                             </div>
        //                                         </div>
        //                                     </div>

        //                                 </Link>;

        //                             </span>
        //                         )}
        //                     </Draggable>
        //                 ))}
        //                 {providedDrop.placeholder}
        //             </div>
        //         )}

        //     </Droppable>
        // </DragDropContext>
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                    <span
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={getListStyle(snapshot.isDraggingOver)}
                    >
                        {_artists.map((project, index) => (
                            <Draggable key={project.id} draggableId={project.id} index={index}>
                                {(provided, snapshot) => (
                                    <span
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={getItemStyle(
                                            snapshot.isDragging,
                                            provided.draggableProps.style
                                        )
                                        }
                                        className="hompageCategory"

                                    >
                                        {/* {item.content} */}
                                        {/* <span ref={provided.innerRef}
                                            // {...provided.draggableProps}
                                            // {...provided.dragHandleProps}
                                            // style={{
                                            //     background: snapshot.isDragging ? "yellow" : "blue",
                                            //     userSelect: "none",
                                            //     ...provided.draggableProps.style
                                            // }}
                                            className="hompageCategory"

                                        > */}

                                        <Link to={`/${project.projectURL}/`} key={index}>

                                            <div className="specificCategory"
                                                key={index}

                                            >

                                                <img src={project.imageName} className="imgCard" alt="alt" />
                                                <div className="bottomCard">
                                                    <div className="categoryName">{project.title}</div>
                                                    <div className="personDetails">
                                                        <span>{project.library + '  '}</span>
                                                        <span>{project.description}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </Link>

                                        {/* </span> */}
                                    </span>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </span>
                )}
            </Droppable>
        </DragDropContext>

    );
}
