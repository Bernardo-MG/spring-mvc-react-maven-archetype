import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { injectIntl } from 'react-intl';

import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Split from 'grommet/components/Split';

import MainSidebar from 'views/containers/MainSidebar';

import titleMessages from 'i18n/title';
import appMessages from 'i18n/app';

import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';

import { setSmallScreenStatus } from 'views/actions';

import { selectNavbarVisible, selectSmallScreen } from 'views/selectors';

/**
 * Base layout for the application. This will frame all the views.
 * 
 * It contains a navigation bar on the left side, and the view on the rest of the screen.
 */
class BaseLayout extends Component {

   /**
    * Toggle navigation bar on response to view size changes.
    * 
    * It will signal the callback function, telling it the view is small if it goes
    * to a single column.
    * 
    * @param columns indicates the number of columns
    */
   _onResponsiveToggleNav(columns) {
      const small = columns === 'single';

      this.props.onSetSmallScreen(small);
   }

   render() {
      // The navigation bar is rendered only if it is visible.
      let nav;
      if (this.props.navbarVisible) {
         const links = [];
         links.push({ path: '/list', label: this.props.intl.formatMessage(titleMessages.data) });
         links.push({ path: '/about', label: this.props.intl.formatMessage(titleMessages.about) });

         const title = this.props.intl.formatMessage(appMessages.name);
         const footer = <Box>
            <Box direction='row' align='center'>{APP_VERSION} <Button href={REPO_URL} icon={<SocialGithubIcon/>} /></Box>
         </Box>;

         nav = <MainSidebar title={title} links={links} footer={footer} />;
      }

      // Which side has priority
      // On a small screen, if the navigation bar is visible it takes priority (left side)
      // By default the view takes priority (right side)
      const priority = (this.props.navbarVisible && this.props.smallScreen ? 'left' : 'right');

      const toggleResponsive = this._onResponsiveToggleNav.bind(this);

      return (
         <App centered={false}>
            <Split priority={priority} flex='right' separator={true} onResponsive={toggleResponsive}>
               {nav}
               {this.props.children}
            </Split>
         </App>
      );
   }
}

BaseLayout.propTypes = {
   /** Flag marking if the navigation bar is visible */
   navbarVisible: PropTypes.bool.isRequired,
   /** Flag marking if the UI is on a small screen */
   smallScreen: PropTypes.bool.isRequired,
   /** Callback function for changing to a small screen */
   onSetSmallScreen: PropTypes.func.isRequired,
   /** Children elements, the view contents */
   children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ]),
   /** I18n object */
   intl: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
   return {
      navbarVisible: selectNavbarVisible(state),
      smallScreen: selectSmallScreen(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onSetSmallScreen: bindActionCreators(setSmallScreenStatus, dispatch)
   };
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(BaseLayout));
