import React, { useContext } from 'react';

import GlobalContext from '../../context/globalContext';

function InputField() {
  const { fieldValue } = useContext(GlobalContext);

  return (
    <input className="input-field" type="text" maxLength={20} defaultValue={fieldValue}></input>
  );
}

export default InputField;
