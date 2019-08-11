import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPerPage, setCurrentPage } from 'search/actions/entities';

import SearchResult from 'search/components/SearchResult';

import { selectSearchedEntities, selectEntityPage, selectEntityTotalElements, selectEntityPerPage, selectEntityPerPageOptions } from 'search/selectors';

function EntitySearchResult({ source, count, page, perPage, perPageOptions, changeRowsPerPage, changePage, search }) {
   return <SearchResult source={source} count={count} page={page} perPage={perPage} perPageOptions={perPageOptions} changeRowsPerPage={changeRowsPerPage} changePage={changePage} search={search} />;
}

EntitySearchResult.propTypes = {
   source: PropTypes.array.isRequired,
   count: PropTypes.number.isRequired,
   page: PropTypes.number.isRequired,
   perPage: PropTypes.number.isRequired,
   perPageOptions: PropTypes.number.isRequired,
   changeRowsPerPage: PropTypes.func.isRequired,
   changePage: PropTypes.func.isRequired,
   search: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      source: selectSearchedEntities(state),
      page: selectEntityPage(state),
      perPage: selectEntityPerPage(state),
      perPageOptions: selectEntityPerPageOptions(state),
      count: selectEntityTotalElements(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeRowsPerPage: bindActionCreators(setPerPage, dispatch),
      changePage: bindActionCreators(setCurrentPage, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(EntitySearchResult);
