import * as types from 'notify/actions/types';

export const notifySuccess = (message) => {
   return {
      type: types.DISPLAY_NOTIFICATION,
      variant: 'success',
      timestamp: new Date().getTime() + Math.random(),
      message
   };
};

export const notifyWarning = (message) => {
   return {
      type: types.DISPLAY_NOTIFICATION,
      variant: 'warning',
      timestamp: new Date().getTime() + Math.random(),
      message
   };
};

export const notifyError = (message) => {
   return {
      type: types.DISPLAY_NOTIFICATION,
      variant: 'error',
      timestamp: new Date().getTime() + Math.random(),
      message
   };
};

export const removeNotification = (timestamp) => {
   return {
      type: types.REMOVE_NOTIFICATION,
      timestamp
   };
};

export const setDisplayed = (timestamps) => {
   return {
      type: types.NOTIFICATIONS_DISPLAYED,
      timestamps
   };
};
