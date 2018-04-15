import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs';
import reducers from './reducers';


const pingEpic = (action$, store) =>
  action$.ofType('HTTP')
    .debounceTime(500)
    .switchMap(action =>
      Observable.ajax(action.payload.url)
        .map((a) => { console.log(a); return { type: action.payload.action, payload: a.response }; })
        .catch(e => console.log('error', e)));


const epicMiddleware = createEpicMiddleware(pingEpic);
const middleware = applyMiddleware(logger, epicMiddleware);

export default createStore(reducers, middleware);
