import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Index from 'layout/containers/Index';

/**
 * All the routes for the application.
 * 
 * These are composed of three parts:
 * - Path
 * - Class name to mark links as active
 * - Component to show
 */
export default <Switch>
   <Route path='/' exact component={Index}/>
</Switch>;
