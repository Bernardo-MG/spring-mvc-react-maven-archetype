import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { entityReport } from 'api/actions';

import { injectIntl } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function ReportView({ intl }) {
   const dispatch = useDispatch();

   function handleClick(event) {
      if ((event) && (event.type === 'click')) {
         dispatch(entityReport());
      }
   }

   return (
      <form noValidate autoComplete="off">
         <Grid container direction='column'>
            <Button variant='contained' onClick={handleClick}>
               { intl.formatMessage({ id: 'form.download' }) }
            </Button>
         </Grid>
      </form>
   );

}

ReportView.propTypes = {
   intl: PropTypes.object.isRequired
};

export default injectIntl(ReportView);
