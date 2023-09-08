import React, { useContext } from 'react';

import GlobalContext from '../../context/globalContext';

import ToDoItem from './ToDoItem';

const ToDoList = () => {
  const { listItems, currentListItem, setCurrentListItem, deleteListItem } = useContext(
    GlobalContext
  );

  const handleKeyPress = (e) => {
    switch (e.nativeEvent.code) {
      case 'Delete':
      case 'Backspace':
        deleteListItem(currentListItem);
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        if (currentListItem < listItems.length - 1) {
          setCurrentListItem(currentListItem + 1);
        }
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        if (currentListItem > 0) {
          setCurrentListItem(currentListItem - 1);
        }
        break;
      default:
        break;
    }
  };

  return (
    <ul className="to-do-list-wrapper" onKeyUp={handleKeyPress} tabIndex="1">
      {listItems.map((item, index) => (
        <ToDoItem text={item} key={index} index={index} />
      ))}
    </ul>
  );
};

export default ToDoList;
