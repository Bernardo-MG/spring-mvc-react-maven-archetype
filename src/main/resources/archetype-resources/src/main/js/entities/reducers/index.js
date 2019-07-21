import * as types from 'entities/actions/types';

const entity = (state = { entities: {} }, action) => {
   switch (action.type) {
   case types.ADD_ENTITIES:
      return {
         ...state,
         entities: { ...state.entities, ...action.payload }
      };
   default:
      return state;
   }
};

export default entity;
