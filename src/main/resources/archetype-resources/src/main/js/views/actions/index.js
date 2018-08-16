import { TOGGLE_SIDE_BAR, TOGGLE_NAV_BAR, HIDE_SIDE_ON_SMALL_SCREEN, HIDE_NAV_ON_SMALL_SCREEN, SET_SMALL_SCREEN_STATUS } from 'views/actions/actionTypes';

/**
 * Toggle the side bar visibility between visible and hidden.
 */
export const toggleSideBar = () => {
   return {
      type: TOGGLE_SIDE_BAR
   };
};

/**
 * Toggle the navigation bar visibility between visible and hidden.
 */
export const toggleNavBar = () => {
   return {
      type: TOGGLE_NAV_BAR
   };
};

/**
 * Hide the side bar, only if the UI is on a small screen.
 */
export const hideSideBarOnSmallScreen = () => {
   return {
      type: HIDE_SIDE_ON_SMALL_SCREEN
   };
};

/**
 * Hide the navigation bar, only if the UI is on a small screen.
 */
export const hideNavBarOnSmallScreen = () => {
   return {
      type: HIDE_NAV_ON_SMALL_SCREEN
   };
};

/**
 * Set the small screen status flag.
 * 
 * @param small flag to indicate if the UI is on a small screen
 */
export const setSmallScreenStatus = (small) => {
   return {
      type: SET_SMALL_SCREEN_STATUS,
      payload: small
   };
};
