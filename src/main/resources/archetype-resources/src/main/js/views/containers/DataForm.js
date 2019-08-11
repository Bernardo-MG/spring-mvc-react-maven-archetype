import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { injectIntl, intlShape } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { create } from 'entities/actions';

function DataForm({ intl, action }) {

   const [name, setName] = React.useState('');

   function handleNameChange(event) {
      setName(event.target.value);
   }

   function handleKeyPress(event) {
      if ((event) && (event.key === 'Enter')) {
         action(name);
      }
   }

   function handleClick(event) {
      if ((event) && (event.type === 'click')) {
         action(name);
      }
   }

   return (
      <form noValidate autoComplete="off">
         <Grid container direction='column'>
            <TextField
               id='name'
               label='name'
               value={name}
               onChange={handleNameChange}
               onKeyPress={handleKeyPress}
            />
            <Button variant='contained' onClick={handleClick}>
               { intl.formatMessage({ id: 'form.send' }) }
            </Button>
         </Grid>
      </form>
   );

}

DataForm.propTypes = {
   intl: intlShape.isRequired,
   action: PropTypes.func.isRequired
};

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = (dispatch) => {
   return {
      action: bindActionCreators(create, dispatch)
   };
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(DataForm));
