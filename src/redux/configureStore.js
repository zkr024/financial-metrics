import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import companyReducer from './mainSite/mainSite';

const reducers = combineReducers({
  company: companyReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
export { reducers };
