import { combineReducers } from 'redux';
import routesPaths from './routesPaths';
import { reducer as reduxFormReducer } from 'redux-form';
import userInfo from './userInfo';

const rootReducer = combineReducers({
  routesPaths,
  userInfo,
  form: reduxFormReducer
});

export default rootReducer;
