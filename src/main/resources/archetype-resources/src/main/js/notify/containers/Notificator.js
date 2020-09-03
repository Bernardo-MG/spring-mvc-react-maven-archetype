import React, { Fragment, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { withSnackbar } from 'notistack';

import { selectNotDisplayedNotifications as selectNotifications } from 'notify/selectors';

import { removeNotification, setDisplayed } from 'notify/actions';

import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

function Notificator({ children, enqueueSnackbar, closeSnackbar }) {

   const notifications = useSelector(selectNotifications);

   const dispatch = useDispatch();

   function dismiss(key) {
      return <IconButton onClick={() => closeSnackbar(key)}><DeleteIcon /></IconButton>;
   }

   useEffect(() => {
      notifications.forEach(({ timestamp, message, variant }) => {
         const key = timestamp;

         // Display snackbar using notistack
         enqueueSnackbar(message, {
            key,
            variant,
            onExited: (event, k) => {
               dispatch(removeNotification(k));
            },
            action: dismiss
         });
      });
      const ids = notifications.map(({ timestamp }) => timestamp);
      if (ids.length) {
         dispatch(setDisplayed(ids));
      }
   });

   return <Fragment>{children}</Fragment>;
}

Notificator.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ]),
   enqueueSnackbar: PropTypes.func,
   closeSnackbar: PropTypes.func
};

export default withSnackbar(Notificator);
