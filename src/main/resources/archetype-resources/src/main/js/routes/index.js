import React from 'react';
import { Switch } from 'react-router-dom';

import SideMenuLayoutRoute from 'routes/SideMenuLayoutRoute';

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
   <SideMenuLayoutRoute path='/' exact component={Index}/>
   <SideMenuLayoutRoute path='/entities' exact component={DataView}/>
   <SideMenuLayoutRoute path='/form' exact component={DataForm}/>
   <SideMenuLayoutRoute path='/pdf' exact component={ReportView}/>
</Switch>;
