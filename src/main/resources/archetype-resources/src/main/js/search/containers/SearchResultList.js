import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import ResultList from 'common/components/ResultList';

import { selectSearchedBooks as selectResult } from 'search/selectors';

function SearchResultList({ result }) { return <ResultList source={result} />; }

SearchResultList.propTypes = {
   result: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
   return {
      result: selectResult(state)
   };
};

const mapDispatchToProps = () => {
   return {};
};

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(SearchResultList);
