import React from 'react';

import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import routes from 'routes';
import { Router } from 'react-router';
import { IntlProvider } from 'react-intl';
import Cookie from 'js-cookie';
import DevTools from 'development/components/DevTools';

const locale = Cookie.get('locale') || 'en';

/**
 * Development root application.
 * 
 * It will include the dev tools.
 */
const Root = ({ store, history }) => (
   <IntlProvider locale={locale}>
      <Provider store={store}>
         <div>
            <Router history={history} routes={routes} />
            <DevTools />
         </div>
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
