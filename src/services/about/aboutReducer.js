const reducer = (state = {}, action) => {
    switch (action.type) {
      case 'GET_NEWS_ABOUT':
           return { ...state, loading: true };
      case 'NEWS_RECEIVED':
           return { ...state, news: action.json[1], loading: false }
      default: 
           return state;
    }
}
export default reducer;