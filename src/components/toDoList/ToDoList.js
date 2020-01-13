import React, { useContext } from 'react';

import GlobalContext from '../../context/globalContext';

import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const { listItems } = useContext(GlobalContext);

  return (
    <ul className="to-do-list-wrapper">
      {listItems.map((item, index) => (
        <ToDoItem text={item} key={index} />
      ))}
      <ToDoItem text="12345678901234567890" />
      <ToDoItem text="WWWWWWWWWWWWWWWWWWWW" />
      <ToDoItem text="fgsfds" />
    </ul>
  );
};

export default ToDoList;
