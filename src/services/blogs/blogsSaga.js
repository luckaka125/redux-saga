import { put, takeLatest, all } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=f887048b50ff443da559e8b7af4d539e')
        .then(response => response.json(), );    
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
     yield takeLatest('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
   yield all([actionWatcher(),]);
}