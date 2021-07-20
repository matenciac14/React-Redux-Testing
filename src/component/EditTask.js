import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { startEditTaskAction } from '../actions/tasksAction'

const EditTask = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [task, setTask] = useState({
        name: '',
        description: ''
    })

    const editTask = useSelector(state => state.tasks.tasktoedit);


    useEffect(() => {
        setTask(editTask);
    }, [editTask]);


    const onChangeForm = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }
    const { name, description } = task;

    const submitEditTask = e => {
        e.preventDefault();
        dispatch(startEditTaskAction(task));

        history.push('/');
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Task
                        </h2>

                        <form
                            onSubmit={submitEditTask}
                        >
                            <div className="form-group">
                                <label>Task name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="name"
                                    name="name"
                                    value={name}
                                    onChange={onChangeForm}
                                />
                            </div>

                            <div className="form-group">
                                <label>Task Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="description"
                                    name="description"
                                    value={description}
                                    onChange={onChangeForm}
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditTask;