import React from 'react';

import PropTypes from 'prop-types';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

function SearchResult({ source, count, page, perPage, perPageOptions, changeRowsPerPage, changePage, search }) {

   function handleChangeRowsPerPage(event) {
      changeRowsPerPage(parseInt(event.target.value, 10));
      changePage(0);
      search();
   }

   function handleChangePage(event, newPage) {
      changePage(newPage);
      search();
   }

   const rows = source.map((row) => (
      <TableRow key={row}>
         <TableCell component="th" scope="row">
            {row}
         </TableCell>
      </TableRow>
   ));

   return <Table>
      <TableBody>
         { rows }
      </TableBody>
      <TableFooter>
         <TableRow>
            <TablePagination
               numPerPageOptions={perPageOptions}
               colSpan={3}
               count={count}
               rowsPerPage={perPage}
               page={page}
               onChangeRowsPerPage={handleChangeRowsPerPage}
               onChangePage={handleChangePage}
               SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true
               }}
            />
         </TableRow>
      </TableFooter>
   </Table>;
}

SearchResult.propTypes = {
   source: PropTypes.array.isRequired,
   count: PropTypes.number.isRequired,
   page: PropTypes.number.isRequired,
   perPage: PropTypes.number.isRequired,
   perPageOptions: PropTypes.number.isRequired,
   changeRowsPerPage: PropTypes.func.isRequired,
   changePage: PropTypes.func.isRequired,
   search: PropTypes.func.isRequired
};

export default SearchResult;
