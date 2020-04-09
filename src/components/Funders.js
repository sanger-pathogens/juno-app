import React from 'react';
import { Box, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ScrollableAnchor from 'react-scrollable-anchor';

const useStyles = makeStyles(theme => ({
  funderLink: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold',
  },
}));

const Funders = () => {
  const classes = useStyles();
  return (
    <Box bgcolor="black" color="text.primary" textAlign="center" p={2}>
      <ScrollableAnchor id="funders">
        <Typography variant="body1">
          Funded by the{' '}
          <Link
            href="http://www.gatesfoundation.org/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.funderLink}
          >
            Bill and Melinda Gates Foundation
          </Link>
        </Typography>
      </ScrollableAnchor>
    </Box>
  );
};

export default Funders;
