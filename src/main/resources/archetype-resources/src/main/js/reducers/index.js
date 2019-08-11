import { combineReducers } from 'redux';
import entity from 'entities/reducers';
import search from 'search/reducers';

const rootReducer = combineReducers({
   entity,
   search
});

export default rootReducer;
