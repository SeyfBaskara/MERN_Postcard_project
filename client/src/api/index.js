import axios from 'axios'

const url = 'http://localhost:3001/api/postcard';

export const fetchPostCards = () => axios.get(url);
export const createPostCard = (newPostCard) => axios.post(url, newPostCard);
export const deletePostCard = (id) => axios.delete(`${url}/${id}`)
