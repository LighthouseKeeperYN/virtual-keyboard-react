import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ text, keycode, isSpecial, isDown }) => {
  return (
    <div
      className={`key key--${keycode} ${isSpecial ? 'key--special' : ''} ${
        isDown ? 'key--down' : ''
      }`}
      id={keycode}
    >
      {text}
    </div>
  );
};

Key.propTypes = {
  text: PropTypes.string.isRequired,
  keycode: PropTypes.string.isRequired,
  isSpecial: PropTypes.bool.isRequired,
  isDown: PropTypes.bool.isRequired,
};

export default Key;
