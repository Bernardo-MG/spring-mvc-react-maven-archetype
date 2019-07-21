import React, { Component } from 'react';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

class ButtonInput extends Component {

   state = { query: '' };

   /**
    * Handles the value change event.
    *
    * @param event value change event
    */
   _handleChange = (event) => {
      this.setState({ query: event.target.value });
   };

   /**
    * Handles the button click event.
    */
   _handleClick = (event) => {
      if ((event) && (event.type === 'click')) {
         if (this.state.query) {
            this.props.action(this.state.query);
         }
      }
   };

   /**
    * Handles the key event.
    *
    * @param event key press event
    */
   _handleKeyPress = (event) => {
      if ((event) && (event.key === 'Enter')) {
         if (this.state.query) {
            this.props.action(this.state.query);
         }
      }
   };

   render() {
      return (
         <form noValidate autoComplete="off">
            <TextField
               id={this.props.id}
               label={this.props.label}
               value={this.state.query}
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
   id: PropTypes.string.isRequired,
   label: PropTypes.string.isRequired,
   buttonLabel: PropTypes.string.isRequired,
   action: PropTypes.func.isRequired
};

export default ButtonInput;
