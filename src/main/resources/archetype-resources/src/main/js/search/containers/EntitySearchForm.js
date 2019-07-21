import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ButtonInput from 'common/components/ButtonInput';

import { search } from 'search/actions/entities';

function EntitySearchForm(props) { return <ButtonInput {...props} />; }

EntitySearchForm.propTypes = {};

const mapStateToProps = () => {
   return {};
};


const mapDispatchToProps = (dispatch) => {
   return {
      action: bindActionCreators(search, dispatch)
   };
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(EntitySearchForm);
