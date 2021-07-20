import React from 'react';
import Header from './component/Header';
import Tasks from './component/Tasks';
import NewTask from './component/NewTask'
import EditTask from './component/EditTask'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Tasks} />
            <Route exact path="/task/new" component={NewTask} />
            <Route exact path="/task/edit/:id" component={EditTask} />
          </Switch>
        </div>
      </Provider>
    </Router>

  );
}

export default App;
