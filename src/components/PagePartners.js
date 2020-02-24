import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Page from './Page';
import partners from '../data/partners';

const PagePartners = () => (
  <Page>
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Partner</TableCell>
            <TableCell>Affiliation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {partners.map(({ name, affiliation }, i) => (
            <TableRow key={i}>
              <TableCell>{name}</TableCell>
              <TableCell>{affiliation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Page>
);

export default PagePartners;
