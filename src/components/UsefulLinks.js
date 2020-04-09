import React from 'react';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import usefulLinks from '../content/useful-links';

const useStyles = makeStyles(theme => ({
  funderLink: {
    color: 'white',
    maxWidth: '250px',
    display: 'inline-flex',
  },
}));

const UsefulLinks = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="secondary.main" color="white" textAlign="center" p={2}>
      <Typography variant="h6" gutterBottom>
        Useful Links
      </Typography>
      <Grid container>
        {usefulLinks.map((item, i) => (
          <Grid item key={i} xs={12} md={4}>
            <Box p={2}>
              <Typography variant="body1">
                <Link
                  className={classes.funderLink}
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
