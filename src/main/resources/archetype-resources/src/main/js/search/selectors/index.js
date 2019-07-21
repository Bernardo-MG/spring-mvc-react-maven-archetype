import { createSelector } from 'reselect';
import { selectEntities } from 'entities/selectors';

const filterByKeys = (map, keys) => {
   const result = [];

   keys.forEach((k) => {
      if (k in map) {
         result.push(map[k].title);
      }
   });

   return result;
};

export const selectEntityIds = (state) => state.search.entityIds;

export const selectSearchedBooks = createSelector(
   selectEntities,
   selectEntityIds,
   (data, ids) => filterByKeys(data, ids)
);

export const selectSearchingEntities = (state) => state.search.searchingEntities;
