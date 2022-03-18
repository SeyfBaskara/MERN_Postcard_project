import { combineReducers } from 'redux';
import { postCards } from './postCard/postCard-reducers';

const rootReducer = combineReducers({ postCards });

export default rootReducer;
