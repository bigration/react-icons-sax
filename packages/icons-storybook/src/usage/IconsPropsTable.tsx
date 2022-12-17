import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows: Array<{ prop: string; type: string; description: string }> = [
  {
    prop: 'color',
    type: 'string',
    description:
      'The stroke, line, or fill color varies depending on the type of icon. RGB and HEX colors. Default: currentColor',
  },
  {
    prop: 'size',
    type: 'string',
    description: 'Icon size. Default: 24',
  },
  {
    prop: '...SVGProps',
    type: 'SVGProps',
    description: 'You can override any SVGProps',
  },
];

export default function IconsPropsTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Prop</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.prop}>
              <TableCell>{row.prop}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
