import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { injectIntl } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { create } from 'entities/actions';

function DataForm({ intl }) {

   const [name, setName] = React.useState('');

   const dispatch = useDispatch();

   function handleNameChange(event) {
      setName(event.target.value);
   }

   function handleKeyPress(event) {
      if ((event) && (event.key === 'Enter')) {
         dispatch(create(name));
      }
   }

   function handleClick(event) {
      if ((event) && (event.type === 'click')) {
         dispatch(create(name));
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
   intl: PropTypes.object.isRequired,
   action: PropTypes.func.isRequired
};

export default injectIntl(DataForm);
