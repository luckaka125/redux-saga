import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import reducer from './services/blogs/blogsReducer';
import App from './components/App';
import About from './components/About';
import rootSaga from './services/blogs/blogsSaga';
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
         <Route path="/" component={App}/>
      </div>
      </BrowserRouter>
   </Provider>,
document.getElementById('root'),
);