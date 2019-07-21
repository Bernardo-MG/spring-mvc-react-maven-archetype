import * as types from 'search/actions/types';

export const search = (payload) => {
   return {
      type: types.SEARCH_ENTITY,
      payload
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
