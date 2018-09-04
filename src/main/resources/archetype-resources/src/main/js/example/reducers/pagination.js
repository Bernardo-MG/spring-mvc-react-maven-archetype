import paginate from 'api/pagination/reducers';

/**
 * Returns the ids from a request response.
 * 
 * @param payload the response payload
 */
const getEntityIds = (payload) => {
   let result;

   if ((payload) && (payload.entities) && (payload.entities.entities)) {
      // The ids are the map keys
      result = Object.keys(payload.entities.entities);
   } else {
      // The payload is missing the required data
      result = [];
   }

   return result;
};

/**
 * Players pagination reducer.
 */
export const entities = paginate({
   idsMapping: (payload) => getEntityIds(payload),
   store: 'ENTITIES'
});
