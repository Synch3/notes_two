import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { BrowserRouter as Router } from 'react-router-dom';

import rootReducer from './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto', 'Raleway', 'sans-serif'],
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(logger, thunk));

const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
