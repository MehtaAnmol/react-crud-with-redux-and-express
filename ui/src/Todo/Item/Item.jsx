import React from 'react';
import "./item.css";

const Item = ({ todo }) => {
  return (
    <div className="row todo-item" >
      <div className="col-6 col-lg-9">
        <span>{todo.todo}</span>
      </div>
      <div className="col-6 col-lg-3">
        <button className="btn btn-info">
          <i className="fa fa-pencil"></i>
        </button>
        <button className="btn btn-danger">
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </div>
  )
};

Item.propTypes = {
  // bla: PropTypes.string,
};

Item.defaultProps = {
  // bla: 'test',
};

export default Item;
