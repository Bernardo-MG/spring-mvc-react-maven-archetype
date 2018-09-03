import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { injectIntl } from 'react-intl';

import Article from 'grommet/components/Article';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import CircleInformationIcon from 'grommet/components/icons/base/CircleInformation';
import Layer from 'grommet/components/Layer';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';

import EntityDataPanel from 'example/components/EntityDataPanel';

import entityMessages from 'i18n/entity';

/**
 * Panel showing a set of entities and their data.
 * 
 * The data for each entity can be shown by clicking on an info button, which will show a modal screen.
 */
class EntityDataList extends Component {

   constructor(props) {
      super(props);
      this.state = { selection: undefined };
   }

   _onSelect(selection) {
      this.setState({ selection });
   }

   _onDeselect() {
      this.setState({ selection: undefined });
   }

   render() {
      const { selection } = this.state;

      const select = this._onSelect.bind(this);

      let detailsLayer;
      if (selection) {
         const deselect = this._onDeselect.bind(this);
         detailsLayer = (
            <Layer closer={true} onClose={deselect}>
               <Article size='large'>
                  <EntityDataPanel source={selection} />
               </Article>
            </Layer>
         );
      } else {
         detailsLayer = undefined;
      }

      const headers = [];
      headers.push(this.props.intl.formatMessage(entityMessages.name));
      headers.push('');

      return (
         <Box>
            {detailsLayer}
            <Table onMore={this.props.onMore}>
               <TableHeader labels={headers} />
               <tbody>
                  { this.props.source.map((entity, i) =>
                     <TableRow key={i}>
                        <td>{entity.name}</td>
                        <td><Button onClick={() => select(entity)} icon={<CircleInformationIcon/>} /></td>
                     </TableRow>
                  )}
               </tbody>
            </Table>
         </Box>
      );
   }
}

EntityDataList.propTypes = {
   source: PropTypes.array.isRequired,
   intl: PropTypes.object.isRequired,
   onMore: PropTypes.func
};

export default injectIntl(EntityDataList);
