import * as types from 'api/actions/types';

export const readEntities = () => {
   return {
      type: types.READ_ENTITY
   };
};

export const saveEntity = (payload) => {
   return {
      type: types.CREATE_ENTITY,
      payload
   };
};

export const updateEntity = (payload) => {
   return {
      type: types.UPDATE_ENTITY,
      payload
   };
};

export const deleteEntity = (payload) => {
   return {
      type: types.DELETE_ENTITY,
      payload
   };
};

export const entityReport = (payload) => {
   return {
      type: types.GENERATE_ENTITY_REPORT,
      payload
   };
};
