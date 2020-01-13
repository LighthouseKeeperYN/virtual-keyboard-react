import React, { useContext } from 'react';

import GlobalContext from '../../context/globalContext';

import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const { listItems, currentListItem } = useContext(GlobalContext);

  return (
    <ul className="to-do-list-wrapper">
      {listItems.map((item, index) => (
        <ToDoItem text={item} key={index} index={index} />
      ))}
    </ul>
  );
};

export default ToDoList;
