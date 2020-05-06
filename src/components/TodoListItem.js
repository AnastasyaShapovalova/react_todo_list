import React from 'react';
import './TodolistItem.css';

const TodoListItem = ( {label, important} ) => {

    const style = {
        color: important ? 'tomato':'black',
    };
    return (
        <span className = "todo-list-item">
     <span
        className = "todo-list-label" 
        style = {style} >
          {label} 
        </span>;
     <button className = "btn btn-outline-success btn-important">
         <i className = "fa fa-star"aria-hidden = "true"></i>
     </button>
     <button className = "btn btn-outline-danger">
         <i className = "fa fa-star"aria-hidden = "true" ></i>
     </button>
       </span>
    );
}

export default TodoListItem;