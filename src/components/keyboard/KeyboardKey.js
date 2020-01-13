import React from 'react';
import PropTypes from 'prop-types';

import { applyKeyModifiers } from '../../shared/utilities';

const Key = ({ keyCode, action, isDown, shiftActive, capsLockActive }) => {
  const { default: def, alt, isSpecial } = action;

  return (
    <div
      className={`key key--${keyCode} ${isSpecial ? 'key--special' : ''} ${
        isDown ? 'key--down' : ''
      }`}
      id={keyCode}
    >
      {isSpecial ? def : applyKeyModifiers(def, alt, shiftActive, capsLockActive)}
    </div>
  );
};

Key.propTypes = {
  keyCode: PropTypes.string.isRequired,
  action: PropTypes.object.isRequired,
  isDown: PropTypes.bool.isRequired,
  shiftActive: PropTypes.bool.isRequired,
  capsLockActive: PropTypes.bool.isRequired,
};

export default Key;
