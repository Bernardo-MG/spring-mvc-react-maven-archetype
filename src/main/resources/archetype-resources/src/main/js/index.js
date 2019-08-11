import React from 'react';
import { render } from 'react-dom';

import '@babel/register';

import Root from 'root';
import configureStore from 'store/configureStore';

import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';

import localeData from 'i18n/messages.json';

addLocaleData(en);

// Data store
const store = configureStore();

// Root element, where the application will be loaded
const rootElement = document.getElementById('root');

let language = (navigator.languages && navigator.languages[0])
   || navigator.language
   || navigator.userLanguage;

const loadedLocales = ['en'];

if (!loadedLocales.some((locale) => language.startsWith(locale))) {
   language = 'en';
}

// Render application into the root element
render(<Root store={store} language={language} i18nMessages={localeData} />, rootElement);
