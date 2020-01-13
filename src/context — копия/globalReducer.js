import {
  ADD_TO_FIELD_VALUE,
  SET_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_CURRENT_LIST_ITEM,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_FIELD_VALUE:
      return { ...state, fieldValue: `${state.fieldValue}${action.payload}` };
    default:
      return state;
  }
};
