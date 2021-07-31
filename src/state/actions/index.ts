import { ActionType } from '../action-types';
import { ItemTypes } from '../Item';

export type Direction = 'up' | 'down';

// MOVE_ITEM = 'move_item',
// DELETE_ITEM = 'delete_item',
// UPDATE_ITEM = 'update_item',
// INSERT_ITEM_AFTER = 'insert_item_after'

export interface MoveItemAction {
  type: ActionType.MOVE_ITEM,
  payload: {
    id: string,
    direction: Direction
  }
}

export interface DeleteItemAction {
  type: ActionType.DELETE_ITEM,
  payload: {
    id: string
  }
}

export interface InsertItemAfterAction {
  type: ActionType.INSERT_ITEM_AFTER,
  payload: {
    id: string | null,
    type: ItemTypes // 新規追加なのでcontentはまだ無い
  }
}

export interface UpdateItemAction {
  type: ActionType.UPDATE_ITEM,
  payload: {
    id: string,
    content: string
  }
}

export type Action =
  MoveItemAction
  | DeleteItemAction
  | InsertItemAfterAction
  | UpdateItemAction;
