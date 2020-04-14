import React from 'react';
import { Grid, Box, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Triangles from './Triangles';

const topHeight = 'max(40vh, 330px)';

const useStyles = makeStyles(theme => ({
  splashTop: {
    backgroundColor: theme.palette.primary.main,
    height: topHeight,
  },
}));

const Splash = () => {
  const classes = useStyles();
  return (
    <Box width="100%" height={topHeight}>
      <Triangles containerHeight={() => topHeight} />
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.splashTop}
        style={{ zIndex: 10 }}
      >
        <Grid item xs={12} style={{ zIndex: 10 }}>
          <Box align="center" pt={4}>
            <img src="JunoLogo.svg" height="160px" alt="JUNO" />
          </Box>
          <Box align="center" pl={1} pr={1}>
            <Typography variant="h5" component="h2">
              A global genomic survey of <i>Streptococcus agalactiae</i>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Splash;
