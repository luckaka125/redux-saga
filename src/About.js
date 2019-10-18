import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from '../services/about/aboutReducer';
import rootSaga from '../services/about/aboutSaga';
import About from './components/About';
import {
   BrowserRouter,
   Route,
   Link
   } from 'react-router-dom'
const sagaMiddleware = createSagaMiddleware();
   
const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);
render(
   <Provider store={store}>
      <BrowserRouter>
      <div>
         <Route path="/about" component={About}/>
      </div>
      </BrowserRouter>
   </Provider>,
document.getElementById('root'),
);