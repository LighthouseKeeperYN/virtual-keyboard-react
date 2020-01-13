import React, { useContext } from 'react';

import GlobalContext from '../context/globalContext';

const Alert = () => {
  const { alert } = useContext(GlobalContext);

  return (
    <div className="alert-wrapper">
      <p>{alert}</p>
    </div>
  );
};

export default Alert;
