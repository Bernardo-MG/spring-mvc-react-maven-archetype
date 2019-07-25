import React from 'react';

import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import routes from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';

import { IntlProvider } from 'react-intl';

import { DevMonitor } from 'development';

/**
 * Development root application.
 * 
 * It will include the dev tools.
 */
const Root = ({ store, language, i18nMessages }) => (
   <IntlProvider locale={language} defaultLocale='en' messages={i18nMessages}>
      <Provider store={store}>
         <React.Fragment>
            <Router>
               {routes}
            </Router>
            <DevMonitor />
         </React.Fragment>
      </Provider>
   </IntlProvider>
);

Root.propTypes = {
   /** Application store */
   store: PropTypes.object.isRequired,
   /** Application language */
   language: PropTypes.string.isRequired,
   /** Internationalization messages */
   i18nMessages: PropTypes.object.isRequired
};

export default Root;
