import { combineReducers } from 'redux';
import activeGroupReducer from './activeGroupReducer';
import taskReducer from './taskReducer';

const mainReducer = combineReducers({
  activeGroupReducer,
  taskReducer
});

export default mainReducer;
