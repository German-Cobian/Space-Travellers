import { createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionsReducer from './missionsReducer';
import rocketsReducer from './rocketsReducer';

const reducers = combineReducers({
  missionsReducer,
  rocketsReducer,
});

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk),
);

export default store; 