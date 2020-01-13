import React, { Fragment, useContext, useState } from 'react';
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

  const [keyDown, setKeyDown] = useState({});

  const languages = { eng, rus };

  const handleKeyDown = (e) => {
    const keyCode = e.code || e.target.id;

    if (!eng[keyCode]) return;

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

    setKeyDown({ ...keyDown, [keyCode]: false });
  };

  const handleKeyUp = (e) => {
    e.preventDefault();
    setKeyDown({ ...keyDown, [e.code || e.target.id]: true });
  };

  return (
    <Fragment>
      {/* <EventListener target={document} onKeyDown={handleKeyUp} />
      <EventListener target={document} onKeyUp={handleKeyDown} /> */}
      <InputField />
      <div className="keyboard-wrapper" onClick={handleKeyDown}>
        {Object.entries(languages[language]).map(([keycode, action]) => (
          <KeyboardKey
            text={action.default}
            isSpecial={!!action.isSpecial}
            keycode={keycode}
            key={keycode}
            isDown={keyDown[keycode]}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Keyboard;
