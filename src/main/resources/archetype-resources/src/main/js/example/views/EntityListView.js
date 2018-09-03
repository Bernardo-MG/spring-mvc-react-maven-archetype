import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { injectIntl } from 'react-intl';

import { fetch } from 'example/actions';

import SimpleView from 'views/containers/SimpleView';
import EntityScrollPanel from 'example/containers/EntityScrollPanel';

import titleMessages from 'i18n/title';

/**
 * View for the units codex.
 * 
 * It also takes care of loading the initial data.
 */
class EntityListView extends Component {

   componentDidMount() {
      this.props.load();
   }

   render() {
      return (
         <SimpleView title={this.props.intl.formatMessage(titleMessages.entitiesList)}>
            <EntityScrollPanel />
         </SimpleView>
      );
   }
}

EntityListView.propTypes = {
   intl: PropTypes.object.isRequired,
   load: PropTypes.func.isRequired
};

const mapStateToProps = () => {
   return {};
};

const mapDispatchToProps = (dispatch) => {
   return {
      load: bindActionCreators(fetch, dispatch)
   };
};

export default injectIntl(connect(
   mapStateToProps,
   mapDispatchToProps
)(EntityListView));
