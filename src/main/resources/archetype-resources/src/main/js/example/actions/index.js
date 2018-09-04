import { REQUEST_ENTITIES, CHANGE_PAGE_PREV_ENTITIES, CHANGE_PAGE_NEXT_ENTITIES, REQUEST_SUCCESS_ENTITIES, REQUEST_FAILURE_ENTITIES } from 'example/actions/actionTypes';

export const fetch = () => {
   return {
      type: REQUEST_ENTITIES,
      params: { sort: 'templateName' }
   };
};

export const movePrevPage = () => {
   return {
      type: CHANGE_PAGE_PREV_ENTITIES,
      params: { sort: 'templateName' }
   };
};

export const moveNextPage = () => {
   return {
      type: CHANGE_PAGE_NEXT_ENTITIES,
      params: { sort: 'templateName' }
   };
};

export const requestSuccess = (payload, pagination) => {
   return {
      type: REQUEST_SUCCESS_ENTITIES,
      payload,
      pagination
   };
};

export const requestFailure = (payload) => {
   return {
      type: REQUEST_FAILURE_ENTITIES,
      payload
   };
};
