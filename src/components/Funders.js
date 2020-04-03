import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';

const Funders = () => (
  <Box bgcolor="black" color="text.primary" textAlign="center" p={2}>
    <Typography variant="body1" gutterBottom>
      Funded by the{' '}
      <Link
        href="http://www.gatesfoundation.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bill and Melinda Gates Foundation
      </Link>
    </Typography>
  </Box>
);

export default Funders;
