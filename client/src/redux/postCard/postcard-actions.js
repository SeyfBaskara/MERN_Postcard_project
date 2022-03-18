import { FETCH_ALL, CREATE, DELETE } from './postCard-types';

import * as api from '../../api/index.js'

export const getPostCards = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPostCards();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
  
export const createPostCard = (postCard) => async (dispatch) => {
  try {
    const { data } = await api.createPostCard(postCard);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePostCard = (id) => async (dispatch) => {
  try {
    await api.deletePostCard(id)

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error.message)
  }
}

  
