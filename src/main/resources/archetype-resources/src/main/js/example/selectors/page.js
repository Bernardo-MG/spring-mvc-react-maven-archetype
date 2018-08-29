
/**
 * Returns the number of the current entities page.
 */
export const selectCurrentPlayerPage = (state) => state.pagination.entities.page;

/**
 * Returns the number of the last entities page.
 */
export const selectLastPlayerPage = (state) => state.pagination.entities.last;
