import React from 'react';

import 'normalize.css';
import './styles/base.scss';
import './styles/styles.scss';

import ToolPanelState from './context/GlobalState';

import Keyboard from './components/keyboard/Keyboard';
import ToDoList from './components/toDoList/ToDoList';
import Alert from './components/Alert';

const App = () => {
  return (
    <ToolPanelState>
      <main className="main-wrapper">
        <ToDoList />
        <Alert />
        <Keyboard />
      </main>
    </ToolPanelState>
  );
};

export default App;
