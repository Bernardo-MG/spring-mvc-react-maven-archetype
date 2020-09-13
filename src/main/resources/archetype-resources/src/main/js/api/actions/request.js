import * as types from 'api/actions/types';

export const requestFailure = (payload) => {
   return {
      type: types.REQUEST_FAILURE,
      payload
   };
};
