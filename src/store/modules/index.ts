import {combineReducers} from 'redux';
import authentication from './authentication';
import registration from './registration';
import reservation from './reservation'

const rootReducer = combineReducers({
  authentication,
  registration,
  reservation
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;