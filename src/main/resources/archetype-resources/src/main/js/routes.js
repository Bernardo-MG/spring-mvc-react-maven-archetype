import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AboutView from 'about/views/AboutView';
import PlayersListView from 'codex/views/PlayersListView';
import ContainerDbxTeamBuilder from 'builder/views/containers/ContainerDbxTeamBuilder';

import BaseLayout from 'views/containers/BaseLayout';

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
