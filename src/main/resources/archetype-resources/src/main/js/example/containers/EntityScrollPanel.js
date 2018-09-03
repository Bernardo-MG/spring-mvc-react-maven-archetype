import React from 'react';

import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { moveNextPage } from 'example/actions';
import { selectPlayers } from 'example/selectors';
import { selectCanLoadPlayer as selectCanLoad } from 'example/selectors/request';

import EntityDataList from 'example/components/EntityDataList';

/**
 * Scroll panel showing all the entities.
 */
const EntityScrollPanel = (props) =>
   <EntityDataList source={props.entities} onMore={props.canLoad ? () => props.nextPage() : null} />;

EntityScrollPanel.propTypes = {
   canLoad: PropTypes.bool.isRequired,
   nextPage: PropTypes.func.isRequired,
   entities: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
   return {
      entities: selectPlayers(state),
      canLoad: selectCanLoad(state)
   };
};

const mapDispatchToProps = (dispatch) => {
   return {
      nextPage: bindActionCreators(moveNextPage, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(EntityScrollPanel);
