import React, { Fragment, useContext, useState } from 'react';

import GlobalContext from '../../context/globalContext';

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
    addListItem,
  } = useContext(GlobalContext);

  const [keyDown, setKeyDown] = useState({});

  const languages = { eng, rus };

  const handleKeyDown = (e) => {
    const keyCode = e.nativeEvent.code || e.target.id;

    if (!eng[keyCode]) return;

    e.preventDefault();

    const { default: def, alt, isSpecial } = languages[language][keyCode];

    if (isSpecial) {
      switch (keyCode) {
        case 'Backspace':
          setFieldValue(fieldValue.slice(0, -1));
          break;
        case 'Enter':
          addListItem(fieldValue);
          setFieldValue('');
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

    setKeyDown({ ...keyDown, [keyCode]: true });
  };

  const handleKeyUp = (e) => {
    e.preventDefault();
    setKeyDown({ ...keyDown, [e.nativeEvent.code || e.target.id]: false });
  };

  return (
    <Fragment>
      <input
        className="input-field"
        type="text"
        maxLength={20}
        defaultValue={fieldValue}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
      ></input>
      <div className="keyboard" onMouseDown={handleKeyDown} onMouseUp={handleKeyUp}>
        {Object.entries(languages[language]).map(([keycode, action]) => (
          <KeyboardKey
            text={action.default}
            isSpecial={!!action.isSpecial}
            keycode={keycode}
            key={keycode}
            isDown={!!keyDown[keycode]}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Keyboard;
