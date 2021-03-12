import React from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Header.styles';

const Header = (props) => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Todo App</a>
    </div>
  </div>
);

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
