import React from 'react';
import { render } from 'react-dom';

import Root from 'root/containers/Root';
import { createHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import { useRouterHistory } from 'react-router';
import configureStore from 'store/configureStore';

import 'theme/style.scss';

// Data store
const store = configureStore();

// History for the routes
const browserHistory = useRouterHistory(createHistory)();
const history = syncHistoryWithStore(browserHistory, store);

// Root element, where the application will be loaded
const rootElement = document.getElementById('root');

// Render application into the root element
render(<Root store={store} history={history} />, rootElement);
