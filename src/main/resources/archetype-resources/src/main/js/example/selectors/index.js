import { createSelector } from 'reselect';
import { filterByKeys } from 'example/selectors/utils';

/**
 * Returns all the entities.
 */
export const selectPlayers = createSelector(
   (state) => state.model.entities,
   (state) => state.pagination.entities.ids,
   (data, ids) => filterByKeys(data, ids)
);

/**
 * Returns all the rated entities.
 */
export const selectRatedPlayers = createSelector(
   (state) => state.model.ratedPlayers,
   (state) => state.pagination.ratedPlayers.ids,
   (data, ids) => filterByKeys(data, ids)
);
