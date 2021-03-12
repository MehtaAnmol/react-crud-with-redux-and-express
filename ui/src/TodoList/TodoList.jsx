import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import { Test } from './TodoList.styles';

class TodoList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('TodoList will mount');
  }

  componentDidMount = () => {
    console.log('TodoList mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('TodoList will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('TodoList will update', nextProps, nextState);
  }


  componentDidUpdate = () => {
    console.log('TodoList did update');
  }

  componentWillUnmount = () => {
    console.log('TodoList will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="TodoListWrapper">
        Test content
      </div>
    );
  }
}

TodoList.propTypes = {
  // bla: PropTypes.string,
};

TodoList.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
