import React from 'react';
import { render } from 'react-dom';
import createStore from './store/creatStore';
import { createBrowserHistory } from 'history';
//import PropTypes from 'prop-types';
import App from './App'

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});
const store = createStore(history);

render (
  <App history={history} store={store}/>,
  document.getElementById('root')
);
