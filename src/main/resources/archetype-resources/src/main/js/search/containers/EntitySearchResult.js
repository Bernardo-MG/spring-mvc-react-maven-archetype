import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setPageSize, setCurrentPage } from 'search/actions/entities';

import SearchResult from 'search/components/SearchResult';

import { selectSearchedEntities, selectEntityPage, selectEntityTotalElements, selectEntityPageSize, selectEntityPageSizeOptions } from 'search/selectors';

function EntitySearchResult({ source, count, page, pageSize, pageSizeOptions, changeRowsPerPage, changePage }) {
   return <SearchResult source={source} count={count} page={page} pageSize={pageSize} pageSizeOptions={pageSizeOptions} changeRowsPerPage={changeRowsPerPage} changePage={changePage} />;
}

EntitySearchResult.propTypes = {
   source: PropTypes.array.isRequired,
   count: PropTypes.number.isRequired,
   page: PropTypes.number.isRequired,
   pageSize: PropTypes.number.isRequired,
   pageSizeOptions: PropTypes.number.isRequired,
   changeRowsPerPage: PropTypes.func.isRequired,
   changePage: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
   return {
      source: selectSearchedEntities(state),
      page: selectEntityPage(state),
      pageSize: selectEntityPageSize(state),
      pageSizeOptions: selectEntityPageSizeOptions(state),
      count: selectEntityTotalElements(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      changeRowsPerPage: bindActionCreators(setPageSize, dispatch),
      changePage: bindActionCreators(setCurrentPage, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(EntitySearchResult);
