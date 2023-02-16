import React from "react";
import './ToDoItem.css';

const ToDoItem = (props) => {

    return <p className="toDoItem">{props.text}</p>
}

export default ToDoItem