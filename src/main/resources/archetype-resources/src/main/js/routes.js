import React from 'react';
import { Route } from 'react-router';

import BaseLayout from 'layouts/containers/BaseLayout';

/**
 * All the routes for the application.
 * 
 * These are composed of three parts:
 * - Path
 * - Class name to mark links as active
 * - Component to show
 */
export default <Route path='/' component={BaseLayout}>
</Route>;
