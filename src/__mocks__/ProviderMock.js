import React from 'react';
import { createStore } from 'redux';
import { Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from "history";
import initialsatate from '../../db.json'
import reducer from '../reducer'

const store = createStore(reducer, initialsatate)
//const history = createBrowserHistory();

let history
if (typeof document !== 'undefined') {
  history = createBrowserHistory()
}



const ProviderMock = props => (
  <Provider store={store}>
    <Route history={history}>
      {props.children}
    </Route>
  </Provider>

)

export default ProviderMock