import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from '../../context/globalContext';

const ToDoItem = ({ text, index }) => {
  const { currentListItem, setCurrentListItem } = useContext(GlobalContext);

  return (
    <li
      className={`to-do-list-item ${
        currentListItem === index ? 'to-do-list-item--selected' : ''
      }`}
      onClick={() => setCurrentListItem(index)}
    >
      {text}
    </li>
  );
};

export default ToDoItem;

ToDoItem.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
