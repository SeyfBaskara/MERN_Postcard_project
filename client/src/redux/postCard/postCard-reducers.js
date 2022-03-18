import { CREATE, FETCH_ALL, DELETE } from './postCard-types'

export const postCards = (state = [], action) => {
    switch (action.type) {
      case  FETCH_ALL:
        return action.payload;
      case CREATE:
        return [...state, action.payload]
      case DELETE:
        return state.filter((postcard) => postcard._id !== action.payload);
      default:
        return state;
    }
  };

