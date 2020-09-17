import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

const reducers = combineReducers({
  app: rootReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;