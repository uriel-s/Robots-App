import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { requestRobots, searchRobots } from './reducers'
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import 'tachyons'; 


const logger = createLogger() 

const rootReducers = combineReducers({requestRobots, searchRobots})

const store = createStore(rootReducers, applyMiddleware(thunkMiddleware, logger))



ReactDOM.render(
   <Provider store={store}>
     <App/>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
