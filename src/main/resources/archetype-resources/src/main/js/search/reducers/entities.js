import * as types from 'search/actions/types';

const search = (state = { ids: [], searching: false, currentPage: 0, totalPages: 0, totalElements: 0, perPage: 10, pageSize: 0, pageSizeOptions: [5, 10, 25] }, action) => {
   switch (action.type) {
   case types.SEARCH_ENTITY:
      return {
         ...state,
         searching: true
      };
   case types.SEARCH_ENTITY_SUCCESS:
   case types.SEARCH_ENTITY_FAILURE:
      return {
         ...state,
         searching: false
      };
   case types.SET_ENTITY_IDS:
      return {
         ...state,
         ids: action.payload
      };
   case types.SET_ENTITY_PAGE_SIZE:
      return {
         ...state,
         pageSize: action.payload
      };
   case types.SET_ENTITY_CURRENT_PAGE:
      return {
         ...state,
         currentPage: action.payload
      };
   case types.SET_ENTITY_TOTAL_ELEMENTS:
      return {
         ...state,
         totalElements: action.payload
      };
   case types.SET_ENTITY_TOTAL_PAGES:
      return {
         ...state,
         totalPages: action.payload
      };
   case types.SET_ENTITY_PER_PAGE:
      return {
         ...state,
         perPage: action.payload
      };
   default:
      return state;
   }
};

export default search;
