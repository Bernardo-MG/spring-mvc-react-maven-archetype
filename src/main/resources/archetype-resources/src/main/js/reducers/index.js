import { combineReducers } from 'redux';
import entity from 'entities/reducers';
import search from 'search/reducers';
import notification from 'notify/reducers';

const rootReducer = combineReducers({
   entity,
   search,
   notification
});

export default rootReducer;
