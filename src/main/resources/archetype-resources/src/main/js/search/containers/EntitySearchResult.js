import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { setPerPage, setCurrentPage } from 'search/actions/entities';

import SearchResult from 'search/components/SearchResult';

import { selectSearchedEntities, selectEntityPage, selectEntityTotalElements, selectEntityPerPage, selectEntityPerPageOptions } from 'search/selectors';

function EntitySearchResult({ search }) {

   const dispatch = useDispatch();

   const source = useSelector(selectSearchedEntities);
   const page = useSelector(selectEntityPage);
   const perPage = useSelector(selectEntityPerPage);
   const perPageOptions = useSelector(selectEntityPerPageOptions);
   const count = useSelector(selectEntityTotalElements);

   function changePage(current) {
      dispatch(setCurrentPage(current));
   }

   function changeRowsPerPage(number) {
      dispatch(setPerPage(number));
   }

   return <SearchResult source={source} count={count} page={page} perPage={perPage} perPageOptions={perPageOptions} changeRowsPerPage={changeRowsPerPage} changePage={changePage} search={search} />;
}

EntitySearchResult.propTypes = {
   search: PropTypes.func.isRequired
};

export default EntitySearchResult;
