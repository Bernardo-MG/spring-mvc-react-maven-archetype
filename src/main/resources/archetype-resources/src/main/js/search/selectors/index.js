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

export const selectEntityIds = (state) => state.search.entities.ids;

export const selectSearchedEntities = createSelector(
   selectEntities,
   selectEntityIds,
   (data, ids) => filterByKeys(data, ids)
);

export const selectSearchingEntities = (state) => state.search.searching;

export const selectEntityPerPage = (state) => state.search.entities.perPage;

export const selectEntityPage = (state) => state.search.entities.currentPage;

export const selectEntityPageSize = (state) => state.search.entities.pageSize;

export const selectEntityPerPageOptions = (state) => state.search.entities.pageSizeOptions;

export const selectEntityTotalPages = (state) => state.search.entities.totalPages;

export const selectEntityTotalElements = (state) => state.search.entities.totalElements;
