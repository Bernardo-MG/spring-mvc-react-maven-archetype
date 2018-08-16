import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';

import CloseIcon from 'grommet/components/icons/base/Close';

import { hideSideBarOnSmallScreen } from 'views/actions';

import { selectSmallScreen } from 'views/selectors';

/**
 * Side bar containing a list of buttons.
 * 
 * It renders a close button on smaller screen, to support responsive views.
 */
class ButtonsSidebar extends Component {

   /**
    * Renders a button with the specified options.
    * 
    * @param label button text
    * @param action button action
    * @param icon button icon
    * @param index index of the generated component
    * @param afterClick callback function for clicking the button
    */
   _renderButton(label, action, icon, index, afterClick) {
      return <Button key={index} align='start' plain={true} label={label}
         onClick={() => { action(); afterClick(); } } icon={icon} />;
   }

   render() {
      // The close button is rendered only on small screens
      let closeButton;
      if (this.props.smallScreen) {
         closeButton = <Button align='start' onClick={() => this.props.onClose()} icon={<CloseIcon/>} />;
      }

      return (
         <Sidebar size='small' colorIndex='light-3'>
            <Box margin='medium'>
               <Menu>
                  { closeButton }
                  { this.props.options.map((option, i) => this._renderButton(option.label, option.action, option.icon, i, this.props.onClose)) }
               </Menu>
            </Box>
         </Sidebar>
      );
   }
}

ButtonsSidebar.propTypes = {
   /** Flag marking if the UI is on a small screen */
   smallScreen: PropTypes.bool.isRequired,
   /** Callback function for closing the side bar */
   onClose: PropTypes.func,
   /** Options for generating the buttons */
   options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      action: PropTypes.func
   }))
};

const mapStateToProps = (state) => {
   return {
      smallScreen: selectSmallScreen(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onClose: bindActionCreators(hideSideBarOnSmallScreen, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(ButtonsSidebar);
