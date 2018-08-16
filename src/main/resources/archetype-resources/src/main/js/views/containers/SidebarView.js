import React from 'react';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Split from 'grommet/components/Split';
import Title from 'grommet/components/Title';

import MenuIcon from 'grommet/components/icons/base/Menu';
import MoreIcon from 'grommet/components/icons/base/More';

import { toggleNavBar, toggleSideBar } from 'views/actions';

import { selectNavbarVisible, selectSidebarVisible, selectSmallScreen } from 'views/selectors';

/**
 * View with a side bar.
 * 
 * It includes a title, a sidebar and the main view.
 * 
 * Two buttons will be included along the title, to toggle the nav bar and the side bar.
 */
const SidebarView = (props) => {
   // The button to show the nav bar is shown only if the nav bar is hidden
   let toggleNavButton;
   if (!props.navbarVisible) {
      toggleNavButton = <Button onClick={() => props.onToggleNavBar()} icon={<MenuIcon/>} />;
   }

   // The button to show the side bar is shown only if the side bar is hidden and the UI is on a small screen
   let toggleSideButton;
   if (!props.sidebarVisible && props.smallScreen) {
      const sideButton = <Button onClick={() => props.onToggleSideBar()} icon={<MoreIcon/>} />;
      toggleSideButton = <Box flex={true} justify='end' direction='row' responsive={false}>{sideButton}</Box>;
   }

   // Which side has priority
   // On a small screen, if the side bar is visible it takes priority (right side)
   // By default the view takes priority (left side)
   const priority = (props.sidebarVisible && props.smallScreen ? 'right' : 'left');

   return (
      <Split priority={priority} flex='left' separator={true} >
         <Box>
            <Header size='large' pad='small'>
               {toggleNavButton}
               <Title truncate={false}>{props.title}</Title>
               {toggleSideButton}
            </Header>
            {props.children}
         </Box>
         {props.sideBar}
      </Split>
   );
};

SidebarView.propTypes = {
   /** Flag marking if the side bar is visible */
   sidebarVisible: PropTypes.bool.isRequired,
   /** Flag marking if the navigation bar is visible */
   navbarVisible: PropTypes.bool.isRequired,
   /** View title */
   title: PropTypes.string.isRequired,
   /** Flag marking if the UI is on a small screen */
   smallScreen: PropTypes.bool.isRequired,
   /** Children elements, the view contents */
   children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ]),
   /** Side bar to show */
   sideBar: PropTypes.element.isRequired,
   /** Callback function for toggling the nav bar */
   onToggleNavBar: PropTypes.func.isRequired,
   /** Callback function for toggling the side bar */
   onToggleSideBar: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      navbarVisible: selectNavbarVisible(state),
      sidebarVisible: selectSidebarVisible(state),
      smallScreen: selectSmallScreen(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onToggleNavBar: bindActionCreators(toggleNavBar, dispatch),
      onToggleSideBar: bindActionCreators(toggleSideBar, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SidebarView);
