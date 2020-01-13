import React from 'react';

import 'normalize.css';
import './styles/base.scss';
import './styles/styles.scss';

import Keyboard from './components/keyboard/Keyboard';

const App = () => {
  return (
    <main className="main-wrapper">
      <Keyboard />
    </main>
  );
};

export default App;
