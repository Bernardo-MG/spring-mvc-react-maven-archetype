import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import views from 'views/reducers';
import entities from 'example/reducers/pagination';

const pagination = combineReducers({
   entities
});

const dreadballApp = combineReducers({
   pagination,
   routing,
   views
});

export default app;
