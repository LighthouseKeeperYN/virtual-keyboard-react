import React, { useReducer } from 'react';

import {
  SET_FIELD_VALUE,
  TOGGLE_CAPS_LOCK,
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_CURRENT_LIST_ITEM,
  TOGGLE_LANGUAGE,
  SHOW_ALERT,
  CLEAR_ALERT,
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
    alert: '',
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const showAlert = (message) => {
    dispatch({
      type: SHOW_ALERT,
      payload: message,
    });

    setTimeout(() => dispatch({ type: CLEAR_ALERT }), 5000);
  };

  const setFieldValue = (value) => {
    dispatch({
      type: SET_FIELD_VALUE,
      payload: value,
    });
  };

  const toggleCapsLock = () => {
    dispatch({ type: TOGGLE_CAPS_LOCK });
  };

  const toggleLanguage = () => {
    dispatch({ type: TOGGLE_LANGUAGE });
  };

  const addListItem = (item) => {
    if (item.replace(/ /g, '').length === 0) showAlert("Value shouldn't be empty");
    else if (!item.match(/^[\p{Letter}\d\s]+$/u)) {
      showAlert("Special character aren't allowed");
    } else {
      dispatch({
        type: ADD_LIST_ITEM,
        payload: item,
      });
    }
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
        alert: state.alert,
        setFieldValue,
        toggleCapsLock,
        toggleLanguage,
        addListItem,
        setCurrentListItem,
        deleteListItem,
        showAlert,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
