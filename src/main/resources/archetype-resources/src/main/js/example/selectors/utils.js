
/**
 * Returns all the values from the map received in the list.
 * 
 * @param map map to filter
 * @param keys keys for filtering
 */
export const filterByKeys = (map, keys) => {
   const result = [];

   keys.forEach((k) => {
      if (k in map) {
         result.push(map[k]);
      }
   });

   return result;
};
