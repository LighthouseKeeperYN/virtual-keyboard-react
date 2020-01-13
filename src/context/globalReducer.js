import {
  SET_FIELD_VALUE,
  TOGGLE_CAPS_LOCK,
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_CURRENT_LIST_ITEM,
  TOGGLE_LANGUAGE,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SET_FIELD_VALUE:
      return { ...state, fieldValue: action.payload };
    case TOGGLE_CAPS_LOCK:
      return { ...state, capsLock: !state.capsLock };
    case TOGGLE_LANGUAGE:
      return { ...state, language: state.language === 'eng' ? 'rus' : 'eng' };
    case ADD_LIST_ITEM:
      return { ...state, listItems: [...state.listItems, action.payload] };
    case SET_CURRENT_LIST_ITEM:
      return { ...state, currentListItem: action.payload };
    case DELETE_LIST_ITEM:
      return {
        ...state,
        listItems: state.listItems.filter((item, index) => index !== action.payload),
        currentListItem: state.currentListItem > 0 ? state.currentListItem - 1 : 0,
      };
    default:
      return state;
  }
};
