import { createStore as rCreateStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import linksReducer from '../reducers/linksReducer';
import footerReducer from '../reducers/footerReducer';
import concertReducer from '../reducers/concertReducer';
import articlesReducer from '../reducers/articlesReducer';


function createStore(history) {
  return rCreateStore(
    combineReducers({
      links:linksReducer,
      footer: footerReducer,
      router:routerReducer,
      concert:concertReducer,
      articles:articlesReducer
    }),
    applyMiddleware(
      //ReduxのAction使ってrouter制御できるようになる
      routerMiddleware(history)
    )
  );
}

export default createStore;
