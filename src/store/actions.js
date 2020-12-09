import {
  ADD_USER,
  SET_EDIT_MODE,
  EDIT_USER,
  DELETE_USER,
  SET_FILTER,
  SET_SEARCH_WORD,
} from "./action-types";
import { v4 as uuidv4 } from "uuid";

export const addUser = (data) => {
  const userData = {
    ...data,
    dateCreated: new Date().toLocaleString("ru-RU"),
    dateUpdated: new Date().toLocaleString("ru-RU"),
  };
  return {
    type: ADD_USER,
    payload: {
      id: uuidv4(),
      userData,
    },
  };
};

export const editUser = (data) => {
  let { id, ...userData } = data;
  userData = {
    ...userData,
    dateUpdated: new Date().toLocaleString("ru-RU"),
  };
  return {
    type: EDIT_USER,
    payload: {
      id,
      userData,
    },
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: {
      id,
    },
  };
};

export const setEditMode = (id) => {
  return {
    type: SET_EDIT_MODE,
    payload: { id },
  };
};

export const setFilter = (currentStatusFilter) => {
  return {
    type: SET_FILTER,
    payload: { currentStatusFilter },
  };
};

export const setSearchWord = (searchWord) => {
  return {
    type: SET_SEARCH_WORD,
    payload: { searchWord },
  };
};
