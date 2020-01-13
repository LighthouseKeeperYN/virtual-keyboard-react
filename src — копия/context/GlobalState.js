import React, { useReducer } from 'react';

import {
  SET_FIELD_VALUE,
  TOGGLE_CAPS_LOCK,
  SET_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_CURRENT_LIST_ITEM,
  TOGGLE_LANGUAGE,
} from './types';

import GlobalContext from './globalContext';
import GlobalReducer from './globalReducer';

const GlobalState = (props) => {
  const initialState = {
    fieldValue: '',
    language: 'eng',
    currentListItem: null,
    capsLock: false,
    shiftKey: false,
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const setFieldValue = (value) => {
    dispatch({
      type: SET_FIELD_VALUE,
      payload: value,
    });
  };

  const toggleCapsLock = () => {
    dispatch({
      type: TOGGLE_CAPS_LOCK,
      payload: null,
    });
  };

  const toggleLanguage = () => {
    dispatch({
      type: TOGGLE_LANGUAGE,
      payload: null,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        fieldValue: state.fieldValue,
        language: state.language,
        currentListItem: state.currentListItem,
        capsLock: state.capsLock,
        setFieldValue,
        toggleCapsLock,
        toggleLanguage,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
