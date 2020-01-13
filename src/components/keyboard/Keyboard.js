import React, { Fragment, useContext, useState } from 'react';

import GlobalContext from '../../context/globalContext';

import { applyKeyModifiers } from '../../shared/utilities';

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
  const [shiftActive, setShiftActive] = useState(false);

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
          setShiftActive(true);
          if (e.altKey) toggleLanguage();
          break;
        case 'ShiftRight':
          setShiftActive(true);
          break;
        case 'AltLeft':
          if (e.shiftKey) toggleLanguage();
          break;
        default:
          break;
      }
    } else {
      const modifiedKey = applyKeyModifiers(def, alt, shiftActive, capsLock);
      if (fieldValue.length < 20) setFieldValue(`${fieldValue}${modifiedKey}`);
    }

    setKeyDown({ ...keyDown, [keyCode]: true });
  };

  const handleKeyUp = (e) => {
    e.preventDefault();
    setKeyDown({ ...keyDown, [e.nativeEvent.code || e.target.id]: false });
    if (e.key === 'Shift') setShiftActive(false);
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
        {Object.entries(languages[language]).map(([keyCode, action]) => (
          <KeyboardKey
            key={keyCode}
            keyCode={keyCode}
            action={action}
            isDown={!!keyDown[keyCode]}
            shiftActive={shiftActive}
            capsLockActive={capsLock}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default Keyboard;
