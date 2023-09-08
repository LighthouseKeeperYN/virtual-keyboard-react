import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from '../../context/globalContext';

import DeleteItemButton from './DeleteItemButton';

const ToDoItem = ({ text, index }) => {
  const { currentListItem, setCurrentListItem } = useContext(GlobalContext);

  return (
    <li
      className={`to-do-list-item ${
        currentListItem === index ? 'to-do-list-item--selected' : ''
      }`}
      onClick={() => setCurrentListItem(index)}
    >
      <span>{text}</span>
      <DeleteItemButton index={index} />
    </li>
  );
};

export default ToDoItem;

ToDoItem.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
