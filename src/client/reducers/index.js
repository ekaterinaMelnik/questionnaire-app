import { combineReducers } from 'redux';
import routesPaths from './routesPaths';
import imagesPaths from './imagesPaths';
import formPlugin from './forms';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  routesPaths,
  imagesPaths,
  form: form.plugin(formPlugin)
});

export default rootReducer;
