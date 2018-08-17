import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import views from 'views/reducers';
import { players, ratedPlayers } from 'players/reducers/pagination';

const dreadballApp = combineReducers({
   routing,
   views
});

export default dreadballApp;
