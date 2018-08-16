import React from 'react';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

import MenuIcon from 'grommet/components/icons/base/Menu';

import { toggleNavBar } from 'views/actions';

import { selectNavbarVisible } from 'views/selectors';

/**
 * A simple view.
 * 
 * It includes a title and the main view.
 * 
 * A button will be included along the title, to toggle the nav bar.
 */
const SimpleView = (props) => {
   // The button to show the nav bar is shown only if the nav bar is hidden
   let toggleNavButton;
   if (!props.navbarVisible) {
      toggleNavButton = <Button onClick={() => props.onToggleNavBar()} icon={<MenuIcon/>} />;
   }

   return (
      <Box>
         <Header size='large' pad='small'>
            {toggleNavButton}
            <Title truncate={false}>{props.title}</Title>
         </Header>
         {props.children}
      </Box>
   );
};

SimpleView.propTypes = {
   /** Flag marking if the navigation bar is visible */
   navbarVisible: PropTypes.bool.isRequired,
   /** Callback function for toggling the nav bar */
   onToggleNavBar: PropTypes.func.isRequired,
   /** View title */
   title: PropTypes.string.isRequired,
   /** Children elements, the view contents */
   children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ])
};

const mapStateToProps = (state) => {
   return {
      navbarVisible: selectNavbarVisible(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onToggleNavBar: bindActionCreators(toggleNavBar, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SimpleView);
