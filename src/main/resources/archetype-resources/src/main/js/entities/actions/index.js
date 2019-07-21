import { ADD_ENTITIES } from 'entities/actions/types';

export const addEntities = (payload) => {
   return {
      type: ADD_ENTITIES,
      payload
   };
};
