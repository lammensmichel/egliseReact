/* eslint-disable */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { Observable } from 'rxjs';
import 'rxjs';
import reducers from './reducers';


const pingEpic = action$ =>
  action$.ofType('HTTP_GET')
    .debounceTime(500)
    .switchMap(action =>
      Observable.ajax.get(action.payload.url)
        .map((a) => {
          console.log(a);
          return { type: action.payload.action, payload: a.response };
        })
        .catch(e => console.log('error', e)));


const epicMiddleware = createEpicMiddleware(pingEpic);
const middleware = applyMiddleware(logger, epicMiddleware);

export default createStore(reducers, middleware);
