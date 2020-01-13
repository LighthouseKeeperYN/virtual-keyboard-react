import {
  SET_FIELD_VALUE,
  TOGGLE_CAPS_LOCK,
  SET_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_CURRENT_LIST_ITEM,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return { ...state, fieldValue: action.payload };
    case TOGGLE_CAPS_LOCK:
      return { ...state, capsLock: !state.capsLock };
    default:
      return state;
  }
};