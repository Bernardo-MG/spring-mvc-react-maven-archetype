import React from 'react';

import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';

import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';

import SimpleView from 'views/containers/SimpleView';

import titleMessages from 'i18n/title';

const About = (props) =>
   <SimpleView title={props.intl.formatMessage(titleMessages.about)}>
      <Box justify='center' align='center' margin='medium'>
         <Paragraph>About view.</Paragraph>
      </Box>
   </SimpleView>;

About.propTypes = {
   intl: PropTypes.object.isRequired
};

export default injectIntl(About);
