import React from 'react';

import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import routes from 'routes';
import { Router } from 'react-router';
import { IntlProvider } from 'react-intl';
import Cookie from 'js-cookie';

const locale = Cookie.get('locale') || 'en';

/**
 * Production root application.
 */
const Root = ({ store, history }) => (
   <IntlProvider locale={locale}>
      <Provider store={store}>
         <Router history={history} routes={routes} />
      </Provider>
   </IntlProvider>
);

Root.propTypes = {
   /** Application store */
   store: PropTypes.object.isRequired,
   /** Application routes history */
   history: PropTypes.object.isRequired
};

export default Root;
