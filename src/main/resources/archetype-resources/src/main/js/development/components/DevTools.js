import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

/**
 * Create the DevTools component and export it.
 */
export default createDevTools(
   <DockMonitor
      toggleVisibilityKey='ctrl-y'
      changePositionKey='ctrl-q'>
      <LogMonitor theme='tomorrow' />
   </DockMonitor>
);
