import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { injectIntl, intlShape } from 'react-intl';

import { selectSearchingEntities } from 'search/selectors';

import { search as searchEntity, setCurrentPage } from 'search/actions/entities';

import ButtonInput from 'common/components/ButtonInput';
import EntitySearchResult from 'search/containers/EntitySearchResult';

import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

function DataView({ intl, loading, search, changePage }) {

   const [query, setQuery] = React.useState('');

   let view = null;

   function handleChangeQuery() {
      changePage(0);
      search(query);
   }

   function handleMovePage() {
      search(query);
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
   loading: PropTypes.bool.isRequired,
   intl: intlShape.isRequired,
   search: PropTypes.func.isRequired,
   changePage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      loading: selectSearchingEntities(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      search: bindActionCreators(searchEntity, dispatch),
      changePage: bindActionCreators(setCurrentPage, dispatch)
   };
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(DataView));
