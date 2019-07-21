import React from 'react';

import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ResultList({ source }) {
   return <List>
      { source.map(
         (item, i) => <ListItem button key={i}>
            <ListItemText primary={item} />
         </ListItem>
      )}
   </List>;
}

ResultList.propTypes = {
   source: PropTypes.array.isRequired
};

export default ResultList;
