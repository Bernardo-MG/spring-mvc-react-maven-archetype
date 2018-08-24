import React from 'react';
import { Route } from 'react-router';

import About from 'layout/containers/About';
import BaseLayout from 'layout/containers/BaseLayout';
import Index from 'layout/containers/Index';

/**
 * All the routes for the application.
 * 
 * These are composed of three parts:
 * - Path
 * - Class name to mark links as active
 * - Component to show
 */
export default <Route path='/' component={BaseLayout}>
   <IndexRoute component={Index}/>
   <Route path='/about' activeClassName='aboutLink' component={About}/>
</Route>;
