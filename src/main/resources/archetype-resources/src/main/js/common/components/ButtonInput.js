import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class ButtonInput extends Component {

   /**
    * Handles the value change event.
    *
    * @param event value change event
    */
   _handleChange = (event) => {
      this.props.onChange(event.target.value);
   };

   /**
    * Handles the button click event.
    */
   _handleClick = (event) => {
      if ((event) && (event.type === 'click')) {
         this.props.onSelect();
      }
   };

   /**
    * Handles the key event.
    *
    * @param event key press event
    */
   _handleKeyPress = (event) => {
      if ((event) && (event.key === 'Enter')) {
         this.props.onSelect();
      }
   };

   render() {
      return (
         <form noValidate autoComplete="off">
            <TextField
               id={this.props.id}
               label={this.props.label}
               value={this.props.value}
               onChange={::this._handleChange}
               onKeyPress={::this._handleKeyPress}
            />
            <Button variant='contained' onClick={::this._handleClick}>
               {this.props.buttonLabel}
            </Button>
         </form>
      );
   }

}

ButtonInput.propTypes = {
   value: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   buttonLabel: PropTypes.string.isRequired,
   onSelect: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired
};

export default ButtonInput;
