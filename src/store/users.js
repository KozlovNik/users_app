import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  SET_EDIT_MODE,
  SET_FILTER,
  SET_SEARCH_WORD,
} from "./action-types";

const initialState = {
  allIds: JSON.parse(localStorage.getItem("allIds")) || [],
  byIds: JSON.parse(localStorage.getItem("byIds")) || {},
  edit: false,
  editUserId: null,
  currentStatusFilter: null,
  searchWord: "",
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const allIds = [action.payload.id, ...state.allIds];
      const byIds = {
        ...state.byIds,
        [action.payload.id]: action.payload.userData,
      };

      setUsers(byIds, allIds);

      return {
        ...state,
        allIds,
        byIds,
      };
    }

    case SET_EDIT_MODE:
      return {
        ...state,
        edit: true,
        editUserId: action.payload.id,
      };

    case SET_FILTER:
      return {
        ...state,
        currentStatusFilter: action.payload.currentStatusFilter,
      };

    case SET_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload.searchWord,
      };

    case EDIT_USER: {
      const byIds = {
        ...state.byIds,
        [action.payload.id]: action.payload.userData,
      };

      setUsers(byIds);

      return {
        ...state,
        edit: false,
        editUserId: null,
        byIds,
      };
    }

    case DELETE_USER: {
      let { [action.payload.id]: id, ...byIds } = state.byIds;
      let allIds = state.allIds.filter((id) => id !== action.payload.id);

      setUsers(byIds, allIds);

      return {
        ...state,
        allIds,
        byIds,
      };
    }

    default:
      return state;
  }
}

function setUsers(byIds, allIds) {
  if (byIds) {
    localStorage.setItem("byIds", JSON.stringify(byIds));
  }
  if (allIds) {
    localStorage.setItem("allIds", JSON.stringify(allIds));
  }
}
