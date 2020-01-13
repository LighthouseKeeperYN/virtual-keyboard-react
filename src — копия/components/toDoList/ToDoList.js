import React from 'react';

import ToDoItem from './ToDoItem';

const ToDoList = () => {
  return <ul className="to-do-list-wrapper">
    <ToDoItem text="12345678901234567890"/>
    <ToDoItem text="WWWWWWWWWWWWWWWWWWWW"/>
    <ToDoItem text="fgsfds"/>
  </ul>;
};

export default ToDoList;
