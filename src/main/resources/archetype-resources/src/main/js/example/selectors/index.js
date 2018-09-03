import { createSelector } from 'reselect';
import { filterByKeys } from 'example/selectors/utils';

/**
 * Returns all the entities.
 */
export const selectEntities = createSelector(
   (state) => state.model.entities,
   (state) => state.pagination.entities.ids,
   (data, ids) => filterByKeys(data, ids)
);
