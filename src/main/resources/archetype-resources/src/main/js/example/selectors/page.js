
/**
 * Returns the number of the current entities page.
 */
export const selectCurrentEntityPage = (state) => state.pagination.entities.page;

/**
 * Returns the number of the last entities page.
 */
export const selectLastEntityPage = (state) => state.pagination.entities.last;
