import React from 'react';

import 'normalize.css';
import './styles/base.scss';
import './styles/styles.scss';

import Keyboard from './components/keyboard/Keyboard';
import ToDoList from './components/toDoList/ToDoList';

const App = () => {
  return (
    <main className="main-wrapper">
      <ToDoList />
      <Keyboard />
    </main>
  );
};

export default App;
