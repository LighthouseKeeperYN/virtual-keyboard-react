import React from 'react';
import PropTypes from 'prop-types';

const ToDoItem = ({ text }) => {
  return <li className="to-do-list-item">{text}</li>;
};

export default ToDoItem;

ToDoItem.propTypes = {
  text: PropTypes.string.isRequired,
};
