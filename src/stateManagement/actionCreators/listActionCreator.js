import { createAction, PayloadAction } from "@reduxjs/toolkit";

export const DELETE_ITEM_FROM_LIST = "DELETE_ITEM_FROM_LIST";
export const ADD_ITEM_TO_LIST = "ADD_ITEM_TO_LIST";
export const UPDATE_ITEM_IN_LIST = "UPDATE_ITEM_IN_LIST";

export const addNewItemToList = createAction(ADD_ITEM_TO_LIST);
export const deleteItemFromList = createAction(DELETE_ITEM_FROM_LIST);
export const updateItemInList = createAction(UPDATE_ITEM_IN_LIST);
