import React from 'react';
import PropTypes from 'prop-types';

const Key = ({ text, keycode, isSpecial }) => {
  return (
    <div className={`key key--${keycode} ${isSpecial ? 'key--special' : ''}`}>
      <span>{text}</span>
    </div>
  );
};

Key.propTypes = {
  text: PropTypes.string.isRequired,
  keycode: PropTypes.string.isRequired,
  isSpecial: PropTypes.bool.isRequired,
};

export default Key;
