import React from 'react';
import "./item.css";

const Item = ({ todo, deleteTodo }) => {
  return (
    <div className="row todo-item" key={todo.id}>
      <div className="col-6 col-lg-9">
        <span>{todo.todo}</span>
      </div>
      <div className="col-6 col-lg-3">
        <button className="btn btn-info">
          <i className="fa fa-pencil"></i>
        </button>
        <button className="btn btn-danger" onClick={() => { deleteTodo(todo.id) }}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  )
};

export default Item;
