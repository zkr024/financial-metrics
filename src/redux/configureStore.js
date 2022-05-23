import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import companyReducer from './mainSite/mainSite';
import financialReducer from './quarters/quartes';
import dateReducer from './details/details';

const reducers = combineReducers({
  company: companyReducer,
  financial: financialReducer,
  date: dateReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, logger)),
);

export default store;
export { reducers };
