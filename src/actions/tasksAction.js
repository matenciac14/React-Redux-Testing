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
  START_EDIT_TASK,
  TASK_EDIT_SUCCESS,
  TASK_EDIT_ERROR
} from '../types'

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

export function CreateNewTaskAction(task) {
  return async (dispatch) => {
    dispatch(addTask())
    try {
      await clienteAxios.post('/tasks', task)
      dispatch(addTasksuccess(task))
      Swal.fire('sucess', 'task added successfully', 'success')

    } catch (error) {
      console.log('ESTE ES EL ERROR', error)
      dispatch(addTaskError())
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: 'try  again'
      })
    }
  }
}

const addTask = () => ({
  type: ADD_TASK,
  payload: true
})

const addTasksuccess = (task) => ({
  type: ADD_TASK_SUCCESS,
  paylaod: task
})

const addTaskError = () => ({
  type: ADD_TASK_ERROR,
  payload: true
})

export function getTasksActions() {
  return async (dispatch) => {
    dispatch(dowloadTasks())

    try {
      const response = await clienteAxios.get('/tasks')
      dispatch(dowloadTasksSuccess(response.data))
    } catch (error) {
      dispatch(dowloadTaskError())
    }
  }
}

const dowloadTasks = () => (
  {
    type: START_DOWLOAD_TASKS,
    payload: true
  }
)
const dowloadTasksSuccess = (data) => (
  {
    type: DOWLOAD_TASKS_SUCCESS,
    payload: data
  }
)

const dowloadTaskError = () => (
  {
    type: DOWLOAD_TASKS_ERROR,
    payload: true
  }
)

export function deleteTaskAction(id){
  return async(dispatch)=>{
    dispatch(getTaskToDelete(id))
    try {
      await clienteAxios.delete(`/tasks/${id}`)
      dispatch(getTaskToDeleteSuccess())
      Swal.fire(
        'Deleted',
        'Task deleted',
        'success'
      )
    } catch (error) {
      dispatch(getTaskToDeleteError())
    }

  }

}

const getTaskToDelete=(id)=>({
  type:GET_TASK_DELETE,
  payload:id
})

const getTaskToDeleteSuccess = () => ({
  type:TASK_DELETED_SUCCESS
})

const getTaskToDeleteError = () => ({
  type: TASK_DELETED_ERROR,
  payload: true
})

export function getEditTaskAction(task){
  return (dispatch)=>{
    dispatch(getTaskToEditAction(task))
  }
}

const getTaskToEditAction=(task)=>({
  type:GET_TASK_EDIT,
  payload: task
})

export function startEditTaskAction(task){
  return async (dispatch) => {
    dispatch( editStartTask())

    try {
      await clienteAxios.put(`tasks/${task.id}`, task)
      dispatch(editStartTaskSuccess(task))
    } catch (error) {
      dispatch(editStartTaskErrorr())
    }
  }
}

const editStartTask =()=>({
  type: START_EDIT_TASK
})

const editStartTaskSuccess = (task) => ({
  type: TASK_EDIT_SUCCESS,
  payload: task
})

const editStartTaskErrorr = () => ({
  type: TASK_EDIT_ERROR,
  payload: true
})