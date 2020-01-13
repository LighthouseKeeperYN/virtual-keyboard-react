import React, { Fragment } from 'react';

import Key from './Key';
import eng from './alphabets/eng';
import InputField from './InputField';
// import rus from './alphabets/rus';

const Keyboard = () => {
  return (
    <Fragment>
      <InputField />
      <div className="keyboard-wrapper">
        {Object.entries(eng).map(([keycode, action]) => (
          <Key
            text={action.default}
            isSpecial={!!action.isSpecial}
            keycode={keycode}
            key={keycode}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Keyboard;
