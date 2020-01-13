import React, { Fragment, useContext } from 'react';
import EventListener from 'react-event-listener';

import GlobalContext from '../../context/globalContext';

import InputField from './InputField';
import KeyboardKey from './KeyboardKey';
import eng from './alphabets/eng';
import rus from './alphabets/rus';

const Keyboard = () => {
  const {
    fieldValue,
    setFieldValue,
    capsLock,
    toggleCapsLock,
    language,
    toggleLanguage,
  } = useContext(GlobalContext);

  const languages = {
    eng,
    rus,
  };

  const handleKeyPress = (e) => {
    const keyCode = e.code || e.target.id;
    if (keyCode.length === 0) return;
    e.preventDefault();

    const { default: def, alt, isSpecial } = languages[language][keyCode];

    if (isSpecial) {
      switch (keyCode) {
        case 'BackSpace': // deleteCurrentItem()
          break;
        case 'Enter': // createItem()
          break;
        case 'CapsLock':
          toggleCapsLock();
          break;
        case 'ShiftLeft':
          if (e.altKey) toggleLanguage();
          break;
        case 'AltLeft':
          if (e.shiftKey) toggleLanguage();
          break;
        default:
          break;
      }
    } else {
      let action = e.shiftKey ? alt : def;
      if (capsLock) action = e.shiftKey ? action.toLowerCase() : action.toUpperCase();
      if (fieldValue.length < 20) setFieldValue(`${fieldValue}${action}`);
    }
  };

  return (
    <Fragment>
      <EventListener target={document} onKeyUp={handleKeyPress} />
      <InputField />
      <div className="keyboard-wrapper" onClick={handleKeyPress}>
        {Object.entries(eng).map(([keycode, action]) => (
          <KeyboardKey
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
