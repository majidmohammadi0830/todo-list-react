import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import { localStorageHelper } from "../../utility/localStorageHelper";
import {
  ADD_ITEM_TO_LIST,
  UPDATE_ITEM_IN_LIST,
  DELETE_ITEM_FROM_LIST
} from "../actionCreators/listActionCreator";

const localStorageKey = "_list";
let list = localStorageHelper.getObjectByKey("_list");
if (!list)
  localStorageHelper.setObjectByKey("_list", []);
const initalState = list;


const addNewItemToList = (list, payload) => {
  list = list ? list : [];
  const lastItem = list[list.length - 1];
  let lastId = 1;
  if (lastItem)
    lastId = lastItem.id + 1;
  const item = {
    id: lastId,
    title: payload.title,
    indent: false,
    parentId: payload.parentId,
  };
  if (!payload.atIndex) {
    list.push(item);
  } else {
    list.splice(payload.atIndex, 0, item);
  }
  localStorageHelper.setObjectByKey(localStorageKey, list);
  return list;
};

const updateItemInList = (list, payload) => {
  let currentItem = list.filter((x) => x.id === payload.id)[0];
  currentItem.title = payload.title;
  currentItem.indent = payload.indent != undefined ? payload.indent : currentItem.indent;
  let currentItemIndex = list.findIndex((x) => x.id === currentItem.id);
  list[currentItemIndex] = currentItem;
  localStorageHelper.setObjectByKey(localStorageKey, list);
  return list;
};

const deleteItemFromList = (list, payload) => {
  let currentItemIndex = -1;
  if (payload.id)
    currentItemIndex = list.findIndex((x) => x.id === payload.id);
  else
    currentItemIndex = payload.index;
  list.splice(currentItemIndex, 1);
  localStorageHelper.setObjectByKey(localStorageKey, list);
  return list;
};


export const listReducer = createReducer(initalState, (builder) => {
  builder
    .addCase(ADD_ITEM_TO_LIST, (state, action) => {
      return addNewItemToList(state, action.payload);
    })
    .addCase(UPDATE_ITEM_IN_LIST, (state, action) => {
      return updateItemInList(state, action.payload);
    })
    .addCase(DELETE_ITEM_FROM_LIST, (state, action) => {
      return deleteItemFromList(state, action.payload);
    });
});
