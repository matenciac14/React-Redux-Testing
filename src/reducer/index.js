import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  tasks: tasksReducer,
  alert: alertReducer
});