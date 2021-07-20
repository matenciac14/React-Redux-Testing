/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux';
import { getTasksActions } from '../actions/tasksAction';
import PropTypes from 'prop-types'

const Tasks = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const dowloadtask = () => dispatch(getTasksActions())
    dowloadtask()
  }, [])

  const tasks = useSelector(state => state.tasks.tasks)
  const error = useSelector(state => state.tasks.error)
  const loading = useSelector(state => state.tasks.loading);

  return (
    <>
      <h2 className="text-center my-5 Tasks-Title">Tasks List</h2>

      { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">error</p> : null}

      { loading ? <p className="text-center">loading....</p> : null}

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks && tasks.length === 0 ? 'No hay tasks' : tasks && (
            tasks.map(task => task && (
              <Task
                key={task && task.id}
                task={task}
              />
            ))
          )}
        </tbody>
      </table>
    </>

  )
}

Tasks.propTypes = {
  task: PropTypes.object
}

export default Tasks
