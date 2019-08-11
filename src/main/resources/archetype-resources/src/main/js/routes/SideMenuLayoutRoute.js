import React from 'react';

import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

import { DefaultSideMenuLayout } from 'layout';

const SideMenuLayoutRoute = ({ component: Component, ...rest }) => <Route {...rest} render={(props) => (
   <DefaultSideMenuLayout>
      <Component {...props} />
   </DefaultSideMenuLayout>
)} />;

SideMenuLayoutRoute.propTypes = {
   component: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired
};

export default SideMenuLayoutRoute;
