import { ADD_ENTITIES, CREATE_ENTITY, CREATE_ENTITY_FAILURE, CREATE_ENTITY_SUCCESS } from 'entities/actions/types';

export const addEntities = (payload) => {
   return {
      type: ADD_ENTITIES,
      payload
   };
};

export const create = (payload) => {
   return {
      type: CREATE_ENTITY,
      payload
   };
};

export const createFailure = (payload) => {
   return {
      type: CREATE_ENTITY_FAILURE,
      payload
   };
};

export const createSuccess = (payload) => {
   return {
      type: CREATE_ENTITY_SUCCESS,
      payload
   };
};
