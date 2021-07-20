import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CreateNewTaskAction} from '../actions/tasksAction'
import { showAlertAction, hideAlertAction } from '../actions/alertAction'
import PropTypes from 'prop-types'

const NewTask = ({history}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const loading = useSelector(state => state.tasks.loading);
  const error = useSelector(state => state.tasks.error);
  const alert = useSelector(state => state.alert.alert);

  const addtask = task => dispatch(CreateNewTaskAction(task));


  const submitNewTask = async e =>{
    e.preventDefault();

    if (name.trim() === '' || description.trim() === '') {

      const alert = {
        msg: 'fields obligatory',
        classes: 'alert alert-danger text-center text-uppercase p3'
      }
      console.log(alert)
      dispatch(showAlertAction(alert));

      return;
    }
    dispatch(hideAlertAction())
    await addtask({
      name,
      description
    })
    
    history.push('/')

  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              add new task
                        </h2>

            {alert ? <p className={alert.classes}> {alert.msg} </p> : null}

            <form
              onSubmit={submitNewTask}
            >
              <div className="form-group">
                <label>Task name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Task Description</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >Add</button>
            </form>

            {loading ? <p>Loading...</p> : null}

            {error ? <p className="alert alert-danger p2 mt-4 text-center">error</p> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

NewTask.prototype ={
  name: PropTypes.string,
  description: PropTypes.string
}

export default NewTask
