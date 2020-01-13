import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import GlobalContext from '../../context/globalContext';

const DeleteItemButton = ({ index }) => {
  const { deleteListItem } = useContext(GlobalContext);

  return (
    <button className="delete-item-button" onClick={() => deleteListItem(index)}></button>
  );
};

DeleteItemButton.propTypes = {
  index: PropTypes.number.isRequired,
};

export default DeleteItemButton;
