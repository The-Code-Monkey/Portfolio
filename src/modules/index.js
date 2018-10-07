import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import overview from './overview';

export default combineReducers({
  form,
  overview
})
