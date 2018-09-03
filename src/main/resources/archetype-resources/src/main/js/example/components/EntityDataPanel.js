import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';

import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';

/**
 * Panel showing all the data for a player.
 * 
 * It adapts to the data available, as there are several possible configurations for players.
 */
class EntityDataPanel extends Component {

   render() {
      return (
         <Box>
            <Heading tag='h1'>{this.props.intl.formatMessage(this.props.source.name)}</Heading>
         </Box>
      );
   }

}

EntityDataPanel.propTypes = {
   source: PropTypes.object.isRequired,
   intl: PropTypes.object.isRequired
};

export default injectIntl(EntityDataPanel);
