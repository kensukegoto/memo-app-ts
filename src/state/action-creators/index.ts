// import { Dispatch } from "react";
import { ActionType } from "../action-types";
import {
  Action,
  UpdateItemAction,
  DeleteItemAction,
  MoveItemAction,
  InsertItemAfterAction,
  Direction
} from '../actions';
import { ItemTypes } from '../Item';

export const updateItem = (id: string, content: string): UpdateItemAction => {
  return {
    type: ActionType.UPDATE_ITEM,
    payload: {
      id,
      content
    }
  }
};

export const deleteItem = (id: string): DeleteItemAction => {
  return {
    type: ActionType.DELETE_ITEM,
    payload: {
      id
    }
  }
};

export const moveItem = (id:string, direction: Direction): MoveItemAction => {
  return {
    type: ActionType.MOVE_ITEM,
    payload: {
      id,
      direction
    }
  }
};

export const insertItemAfter = (
  id: string | null, itemType: ItemTypes
): InsertItemAfterAction => {
  return {
    type: ActionType.INSERT_ITEM_AFTER,
    payload: {
      id,
      type: itemType
    }
  }
}