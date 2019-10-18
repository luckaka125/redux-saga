import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reducer from '../services/about/aboutReducer';
import rootSaga from '../services/about/aboutSaga';
import Button2 from '../containers/Button2';
import NewsItem from '../containers/NewsItem'
import Loading from '../containers/Loading'
const sagaMiddleware = createSagaMiddleware();
   
const store = createStore(
   reducer,
   applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

const About = () => {
  return(
    <div>
      <Button2 />
      <Loading />
     <NewsItem />
    </div>
  )
}
export default About;