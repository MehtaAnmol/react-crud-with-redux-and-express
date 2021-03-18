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
    ],
    isEdit: false
  }

  deleteTodo = (id) => {
    let todos = this.state.todos.filter(elem => { return elem.id !== id });
    this.setState({
      todos: todos
    });
  }

  newTodo = () => {
    return (
      <div className="row">
        <div className="col-12">
          <input type="text" id="todo" />
        </div>
      </div>
    );
  }

  addTodo = () => {
    this.setState({
      isEdit: true
    })
  }

  render() {
    return (
      <div className="ListWrapper">
        { this.state.isEdit ? this.newTodo() : ''}
        <div className="row">
          <div className="col-12">
            <div className="pull-right" onClick={() => this.addTodo()}>
              <button>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          <div className="col-12">
            {this.state.todos.map(todo => {
              return (
                <Item todo={todo} key={todo.id} deleteTodo={this.deleteTodo} />
              )
            })}
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
