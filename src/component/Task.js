import React from 'react'
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';


import { useDispatch } from 'react-redux'
import { deleteTaskAction, getEditTaskAction } from '../actions/tasksAction'

const Task = ({ task }) => {
  const { name , description, id } = task
  const dispatch = useDispatch();
  const history = useHistory();

  const confirmDeleteTask = (id) => {
    Swal.fire({
      title: '¿Are you sure?',
      text: "cant get this product again",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'yes, delete!!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        dispatch(deleteTaskAction(id))
      }
    });
  }
  const redirectToEdit = task => {
    dispatch(getEditTaskAction(task));
    history.push(`/task/edit/${task.id}`)
  }

  return (
    <>
      <tr>
        <td>{name}</td>
        <td><span className='font-wight-bold'>{description}</span></td>
        <td className='acciones'>
          <button type='button' className='btn btn-primary mr-2' onClick={() => redirectToEdit(task)}>Edit</button>
          <button type='button' className='btn btn-danger' onClick={() => confirmDeleteTask(id)}> Eliminar</button>
        </td>
      </tr>
    </>
  )
}

export default Task
