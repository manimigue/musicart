import { createStore as rCreateStore, combineReducers, applyMiddleware} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import linksReducer from '../reducers/linksReducer';
import homepicReducer from '../reducers/homepicReducer';
import concertReducer from '../reducers/concertReducer';
import articlesReducer from '../reducers/articlesReducer';
import ticketsReducer from '../reducers/ticketsReducer'


function createStore(history) {
  return rCreateStore(
    combineReducers({
      links:linksReducer,
      homepic: homepicReducer,
      router:routerReducer,
      concert:concertReducer,
      articles:articlesReducer,
      tickets:ticketsReducer
    }),
    applyMiddleware(
      //ReduxのAction使ってrouter制御できるようになる
      routerMiddleware(history)
    )
  );
}

export default createStore;
