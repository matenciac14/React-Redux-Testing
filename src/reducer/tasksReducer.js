/* eslint-disable import/no-anonymous-default-export */
import {
  ADD_TASK,
  ADD_TASK_SUCCESS,
  ADD_TASK_ERROR,
  START_DOWLOAD_TASKS,
  DOWLOAD_TASKS_SUCCESS,
  DOWLOAD_TASKS_ERROR,
  GET_TASK_DELETE,
  TASK_DELETED_SUCCESS,
  TASK_DELETED_ERROR,
  GET_TASK_EDIT,
  TASK_EDIT_SUCCESS,
  TASK_EDIT_ERROR
} from '../types'

const initialState = {
  tasks: [],
  error: null,
  loading: false,
  tasktodelete: null,
  tasktoedit: null
}


export default function (state = initialState, action) {
  switch (action.type) {
    case START_DOWLOAD_TASKS:
    case ADD_TASK:
      return {
        ...state,
        loading: action.payload
      }
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload]
      }
    case TASK_EDIT_ERROR:
    case TASK_DELETED_ERROR:
    case DOWLOAD_TASKS_ERROR:
    case ADD_TASK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case DOWLOAD_TASKS_SUCCESS:
      return{
        ...state,
        loading: false,
        error:null,
        tasktoedit: null,
        tasks: action.payload
      }
    case GET_TASK_DELETE:
      return{
        ...state,
        tasktodelete: action.payload
      }
    case TASK_DELETED_SUCCESS:
      return{
        ...state,
        tasks: state.tasks.filter(task => task.id !== state.tasktodelete ),
        tasktodelete: null
      }
    case GET_TASK_EDIT:
      return{
        ...state,
        tasktoedit: action.payload
      }
    case TASK_EDIT_SUCCESS:
      return{
        ...state,
        tasktoedit: null,
        tasks: state.tasks.map( task => task.id === action.payload.id ? task = action.payload : task)
      }

    default:
      return state;
  }
}
