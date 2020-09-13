import * as types from 'api/actions/types';

export const readSchemes = () => {
   return {
      type: types.READ_ENTITY
   };
};

export const saveScheme = (payload) => {
   return {
      type: types.CREATE_ENTITY,
      payload
   };
};

export const updateScheme = (payload) => {
   return {
      type: types.UPDATE_ENTITY,
      payload
   };
};

export const deleteScheme = (payload) => {
   return {
      type: types.DELETE_ENTITY,
      payload
   };
};
