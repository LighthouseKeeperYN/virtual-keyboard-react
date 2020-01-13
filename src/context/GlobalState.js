import React, { useReducer } from 'react';

import {
  SET_FIELD_VALUE,
  TOGGLE_CAPS_LOCK,
  ADD_LIST_ITEM,
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
    listItems: [],
    currentListItem: 0,
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

  const addListItem = (item) => {
    dispatch({
      type: ADD_LIST_ITEM,
      payload: item,
    });
  };

  const setCurrentListItem = (index) => {
    dispatch({
      type: SET_CURRENT_LIST_ITEM,
      payload: index,
    });
  };

  const deleteListItem = (index) => {
    dispatch({
      type: DELETE_LIST_ITEM,
      payload: index,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        fieldValue: state.fieldValue,
        language: state.language,
        listItems: state.listItems,
        currentListItem: state.currentListItem,
        capsLock: state.capsLock,
        setFieldValue,
        toggleCapsLock,
        toggleLanguage,
        addListItem,
        setCurrentListItem,
        deleteListItem,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
