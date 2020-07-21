import React from 'react';
import { Grid, Typography, useMediaQuery } from '@material-ui/core';

const FooterItem = ({ heading, right, children }) => {
  const isMultiColumn = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const align = isMultiColumn && right ? 'right' : 'left';
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="subtitle2" align={align}>
        <i>{heading}</i>
      </Typography>
      <Typography variant="body1" align={align}>
        {children}
      </Typography>
    </Grid>
  );
};

export default FooterItem;
