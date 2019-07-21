import { createSelector } from 'reselect';
import { selectEntities } from 'entities/selectors';

const filterByKeys = (map, keys) => {
   const result = [];

   keys.forEach((k) => {
      if (k in map) {
         result.push(map[k].name);
      }
   });

   return result;
};

export const selectEntityIds = (state) => state.search.entityIds;

export const selectSearchedEntities = createSelector(
   selectEntities,
   selectEntityIds,
   (data, ids) => filterByKeys(data, ids)
);

export const selectSearchingEntities = (state) => state.search.searchingEntities;
