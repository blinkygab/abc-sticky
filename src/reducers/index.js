import { combineReducers } from 'redux';
import app from './app';
import notes from './notes';

export default combineReducers({
  app,
  notes
})
