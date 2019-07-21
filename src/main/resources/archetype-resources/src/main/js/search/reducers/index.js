import * as types from 'search/actions/types';

const search = (state = { entityIds: [], searchingEntities: false }, action) => {
   switch (action.type) {
   case types.SEARCH_BOOK:
      return {
         ...state,
         searchingEntities: true
      };
   case types.SEARCH_BOOK_SUCCESS:
   case types.SEARCH_BOOK_FAILURE:
      return {
         ...state,
         searchingEntities: false
      };
   case types.SET_BOOK_IDS:
      return {
         ...state,
         entityIds: action.payload
      };
   default:
      return state;
   }
};

export default search;
