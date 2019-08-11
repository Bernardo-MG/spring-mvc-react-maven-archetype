import React from 'react';

import api from 'api';

import { injectIntl, intlShape } from 'react-intl';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

function ReportView({ intl }) {

   function handleClick(event) {
      if ((event) && (event.type === 'click')) {
         api.Report.download();
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
   intl: intlShape.isRequired
};

export default injectIntl(ReportView);
