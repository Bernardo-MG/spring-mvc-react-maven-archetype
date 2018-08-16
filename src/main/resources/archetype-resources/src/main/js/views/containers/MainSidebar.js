import React from 'react';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Sidebar from 'grommet/components/Sidebar';
import Title from 'grommet/components/Title';

import CloseIcon from 'grommet/components/icons/base/Close';

import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';

import { toggleNavBar, hideNavBarOnSmallScreen } from 'views/actions';

import { selectNavbarVisible } from 'views/selectors';

/**
 * Main application sidebar.
 * 
 * It contains the main navigation links, along the title and a footer.
 */
const MainSidebar = (props) =>
   <Sidebar colorIndex='light-2'>
      <Header size='large' pad='small'>
         <Title truncate={false}>{props.title}</Title>
         <Box flex={true} justify='end' direction='row' responsive={false}>
            <Button onClick={() => props.onClose()} icon={<CloseIcon/>} />
         </Box>
      </Header>
      <Menu fill={true} primary={true}>
         { props.links.map((option, i) =>
            <Anchor key={i} path={option.path} label={option.label} onClick={props.onClickLink} />
         )}
      </Menu>
      <Footer pad='small' direction='column'>
         <Box>Dreadball © Mantic</Box>
         <Box direction='row' align='center'>{APP_VERSION} <Button href={REPO_URL} icon={<SocialGithubIcon/>} /></Box>
      </Footer>
   </Sidebar>;

MainSidebar.propTypes = {
   /** Callback function for closing the side bar */
   onClose: PropTypes.func.isRequired,
   /** Callback function for clicking a link */
   onClickLink: PropTypes.func.isRequired,
   /** Application title */
   title: PropTypes.string,
   /** Navigation links */
   links: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string
   }))
};

const mapStateToProps = (state) => {
   return {
      navbarVisible: selectNavbarVisible(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      onClose: bindActionCreators(toggleNavBar, dispatch),
      onClickLink: bindActionCreators(hideNavBarOnSmallScreen, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(MainSidebar);
