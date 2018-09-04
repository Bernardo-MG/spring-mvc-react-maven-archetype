import { selectLastEntityPage } from 'example/selectors/page';

/**
 * Returns the flag marking if the entities are being fetched.
 */
export const selectEntityIsFetching = (state) => state.pagination.entities.isFetching;

/**
 * Returns a flag marking if the entities can be loaded.
 */
export const selectCanLoadEntity = (state) => !selectLastEntityPage(state) && !selectEntityIsFetching(state);
