import { combineReducers } from 'redux';
import activeGroupReducer from './activeGroupReducer';
import taskReducer from './taskReducer';

const maindReducer = combineReducers({
  activeGroupReducer,
  taskReducer
});

export default maindReducer;
