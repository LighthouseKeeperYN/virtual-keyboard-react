import React from 'react';

import Key from './Key';
import eng from './alphabets/eng';
// import rus from './alphabets/rus';

const Keyboard = () => {
  return (
    <div className="keyboard-wrapper">
      {Object.entries(eng).map(([keycode, action]) => (
        <Key text={action.default} isSpecial={!!action.isSpecial} keycode={keycode} key={keycode} />
      ))}
    </div>
  );
};

export default Keyboard;
