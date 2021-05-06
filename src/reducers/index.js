import { combineReducers } from 'redux';
import clickFactorReducer from './clickFactor';
import pepperCounterReducer from './pepperCounter';

const rootReducer = combineReducers({
  pepperCounter: pepperCounterReducer,
  clickFactor: clickFactorReducer,
});

export default rootReducer;
