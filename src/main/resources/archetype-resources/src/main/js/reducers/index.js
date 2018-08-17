import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import views from 'views/reducers';

const dreadballApp = combineReducers({
   routing,
   views
});

export default dreadballApp;
