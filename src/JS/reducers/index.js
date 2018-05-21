import { combineReducers } from 'redux';
import activeGroup from './activeGroupReducer';
import tasks from './taskReducer';

const mainReducer = combineReducers({
  activeGroup,
  tasks
});

export default mainReducer;
