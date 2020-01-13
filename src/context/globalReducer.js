import { SET_FIELD_VALUE, SET_LIST_ITEM, DELETE_LIST_ITEM, SET_CURRENT_LIST_ITEM } from './types';

export default (state, action) => {

  switch (action.type) {
    case SET_FIELD_VALUE:
      return { ...state, fieldValue: action.payload };
    default:
      return state;
  }
};
