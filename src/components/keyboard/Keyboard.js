import React, { Fragment, useContext } from 'react';
import EventListener from 'react-event-listener';

import GlobalContext from '../../context/globalContext';

import Key from './Key';
import eng from './alphabets/eng';
import InputField from './InputField';
// import rus from './alphabets/rus';

const Keyboard = () => {
  const { fieldValue, setFieldValue } = useContext(GlobalContext);

  const handleKeyPress = (e) => {
    const key = e.code || e.target.id;
    if (key.length === 0) return;
    e.preventDefault();

    const { default: def, alt, isSpecial } = eng[key];

    if (!isSpecial && fieldValue.length < 20) setFieldValue(`${fieldValue}${def}`);
  };

  return (
    <Fragment>
      <EventListener target={document} onKeyUp={handleKeyPress} />
      <InputField />
      <div className="keyboard-wrapper" onClick={handleKeyPress}>
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
