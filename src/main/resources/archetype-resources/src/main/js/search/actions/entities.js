import * as types from 'search/actions/types';

export const search = (query) => {
   return {
      type: types.SEARCH_ENTITY,
      payload: query
   };
};

export const success = (payload) => {
   return {
      type: types.SEARCH_ENTITY_SUCCESS,
      payload
   };
};

export const failure = (payload) => {
   return {
      type: types.SEARCH_ENTITY_FAILURE,
      payload
   };
};

export const setIds = (payload) => {
   return {
      type: types.SET_ENTITY_IDS,
      payload
   };
};

export const setPageSize = (payload) => {
   return {
      type: types.SET_ENTITY_PAGE_SIZE,
      payload
   };
};

export const setCurrentPage = (payload) => {
   return {
      type: types.SET_ENTITY_CURRENT_PAGE,
      payload
   };
};

export const setTotalElements = (payload) => {
   return {
      type: types.SET_ENTITY_TOTAL_ELEMENTS,
      payload
   };
};

export const setTotalPages = (payload) => {
   return {
      type: types.SET_ENTITY_TOTAL_PAGES,
      payload
   };
};

export const setPerPage = (payload) => {
   return {
      type: types.SET_ENTITY_PER_PAGE,
      payload
   };
};
