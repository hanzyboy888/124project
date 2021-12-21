import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import '../App.css';

// const columns = [
//   { id: 'lexeme', label: 'Lexeme' },
//   { id: 'classification', label: 'Classification' },
// ];

export default function ColumnGroupingTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <Paper className = "tableHolder" sx={{margin: 0, minWidth: '50px', height: '40%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2}>
                {props.title}
              </TableCell>
            </TableRow>
            <TableRow>
              {props.columns?.map((column) => (
                <TableCell
                  key={column.id}
                  // align={column.align}
                  // style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={0}>
              {props.renderData?.map((lexeme, index) => (
                <div key = {index}>
                  <TableCell colSpan={1}>
                    {lexeme.lexeme}
                  </TableCell>
                  <TableCell colSpan={1}>
                    {lexeme.classification}
                  </TableCell>
                </div>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}