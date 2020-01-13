import React from 'react';
import PropTypes from 'prop-types';

function InputField({ fieldValue }) {
  return (
    <input className="input-field" type="text" maxLength={20} defaultValue={fieldValue}></input>
  );
}

InputField.propTypes = {
  fieldValue: PropTypes.string,
};

export default InputField;
