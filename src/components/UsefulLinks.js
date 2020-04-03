import React from 'react';
import { Box, Grid, Link, Typography } from '@material-ui/core';

import usefulLinks from '../content/useful-links';

const UsefulLinks = () => {
  return (
    <Box bgcolor="black" color="text.primary" textAlign="center" p={2}>
      <Typography variant="h6" gutterBottom>
        Useful Links
      </Typography>
      <Grid container>
        {usefulLinks.map((item, i) => (
          <Grid item key={i} xs={12} sm={6}>
            <Box p={2}>
              <Typography variant="body1">
                <Link
                  style={{ maxWidth: '250px', display: 'inline-flex' }}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </Link>
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UsefulLinks;
