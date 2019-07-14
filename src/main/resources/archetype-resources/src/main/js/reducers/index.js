import { combineReducers } from 'redux';
import views from 'views/reducers';
import model from 'example/reducers';

const rootReducer = combineReducers({
   model,
   views
});

export default rootReducer;
