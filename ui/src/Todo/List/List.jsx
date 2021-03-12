import React, { PureComponent } from 'react';
import Item from "../Item";
import './List.css';

class List extends PureComponent {

  state = {
    todos: [
      {
        "id": 1,
        "todo": "Goto store for buying vegetables"
      },
      {
        "id": 2,
        "todo": "Cook"
      },
      {
        "id": 3,
        "todo": "Eat food"
      },
      {
        "id": 4,
        "todo": "Goto sleep"
      }
    ]
  }

  todoList = this.state.todos.map(todo => {
    return (
      <Item todo={todo} />
    )
  });

  render() {
    return (
      <div className="ListWrapper">
        <div className="row">
          <div className="col-12">
            {this.todoList}
          </div>
        </div>
      </div>
    );
  }
}

List.propTypes = {
  // bla: PropTypes.string,
};

List.defaultProps = {
  // bla: 'test',
};

export default List;
