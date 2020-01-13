import React, { useReducer } from 'react';

import { ADD_TO_FIELD_VALUE, SET_LIST_ITEM, DELETE_LIST_ITEM, SET_CURRENT_LIST_ITEM } from './types';

import GlobalContext from './globalContext';
import GlobalReducer from './globalReducer';

const GlobalState = (props) => {
  const initialState = {
    fieldValue: '',
    currentListItem: null,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const addToFieldValue = (value) => {
    dispatch({
      type: ADD_TO_FIELD_VALUE,
      payload: value,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        fieldValue: state.fieldValue,
        currentListItem: state.currentListItem,
        addToFieldValue,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
