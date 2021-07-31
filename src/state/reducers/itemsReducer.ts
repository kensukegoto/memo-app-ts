import produce from 'immer';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Item } from '../Item';

interface ItemsState {
  order: string[],
  data: {
    [key: string]: Item
  }
}

const initialState: ItemsState = {
  order: [],
  data: {}
};

const reducer = produce((
  state: ItemsState = initialState, 
  action: Action
): ItemsState => {

  switch(action.type) {
    case ActionType.UPDATE_ITEM:
      const {id, content} = action.payload;
      state.data[id].content = content;
      return state;
    case ActionType.DELETE_ITEM:
      delete state.data[action.payload.id];
      state.order = state.order.filter(id => id !== action.payload.id);
      return state;
    case ActionType.MOVE_ITEM:
      const { direction } = action.payload;
      const index = state.order.findIndex(id => id === action.payload.id);
      const targetIndex = direction === 'up' ? index - 1 : index + 1;
      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }
      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;
      return state;
    case ActionType.INSERT_ITEM_AFTER:
      const item: Item = {
        content: '',
        type: action.payload.type,
        id: randomId()
      };
      state.data[item.id] = item;
      const foundIndex = state.order.findIndex(id => id === action.payload.id);
      if (foundIndex < 0) {
        state.order.unshift(item.id);
      } else {
        state.order.splice(foundIndex + 1, 0 , item.id);
      }
      return state;
    default:
      return state;
  }
});
const randomId = () => {
  return Math.random().toString(36).substr(2,5);
}
export default reducer;