import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Index, DataForm, DataView, ReportView } from 'views';

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
   <Route path='/entities' exact component={DataView}/>
   <Route path='/form' exact component={DataForm}/>
   <Route path='/pdf' exact component={ReportView}/>
</Switch>;
