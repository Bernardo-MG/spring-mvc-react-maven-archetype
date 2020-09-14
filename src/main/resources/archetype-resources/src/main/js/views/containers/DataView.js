import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { injectIntl } from 'react-intl';

import { selectSearchingEntities } from 'search/selectors';

import { search as searchEntity, setCurrentPage } from 'search/actions/entities';

import ButtonInput from 'common/components/ButtonInput';
import EntitySearchResult from 'search/containers/EntitySearchResult';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function DataView({ intl }) {

   const dispatch = useDispatch();

   const [query, setQuery] = React.useState('');

   const loading = useSelector(selectSearchingEntities);

   let view = null;

   function handleChangeQuery() {
      dispatch(setCurrentPage(0));
      dispatch(searchEntity(query));
   }

   function handleMovePage() {
      dispatch(searchEntity(query));
   }

   if (loading) {
      view = <Grid container justify='center' alignItems='center' style={ { height: '70vh', overflow: 'auto' } }> <CircularProgress /> </Grid>;
   } else {
      view = <Grid style={ { height: '80vh', overflow: 'auto' } }> <EntitySearchResult search={handleMovePage} /> </Grid>;
   }

   return (
      <Paper style={ { height: '85vh', overflow: 'auto' } }>
         <Grid container direction='column'>
            <Grid container justify='center'>
               <ButtonInput
                  value={query}
                  id='title'
                  label={ intl.formatMessage({ id: 'form.title' }) }
                  buttonLabel={ intl.formatMessage({ id: 'form.search' }) }
                  onSelect={handleChangeQuery}
                  onChange={setQuery}
               />
            </Grid>
            { view }
         </Grid>
      </Paper>
   );

}

DataView.propTypes = {
   intl: PropTypes.object.isRequired
};

export default injectIntl(DataView);
