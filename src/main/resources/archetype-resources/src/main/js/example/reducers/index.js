import { CREATE_ENTITIES } from 'example/actions/actionTypes';

const model = (state = { entities: {} }, action) => {
   const { type, payload } = action;

   if (payload === undefined) {
      return { ...state };
   }

   switch (type) {
   case CREATE_ENTITIES: {
      return {
         ...state,
         entities: { ...state.entities, ...payload }
      };
   }
   default:
      return state;
   }
};

export default model;
