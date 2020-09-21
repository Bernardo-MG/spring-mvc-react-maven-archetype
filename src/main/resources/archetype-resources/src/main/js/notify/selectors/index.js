export const selectNotifications = (state) => state.notification.notifications;

export const selectNotDisplayedNotifications = (state) => selectNotifications(state).filter((n) => !n.displayed);
