import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ArrowDownward } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Triangles from './Triangles';

const useStyles = makeStyles(theme => ({
  splashTop: {
    backgroundColor: theme.palette.primary.main,
    height: '40vh',
  },
  splashBottom: {
    backgroundColor: theme.palette.primary.dark,
    borderTop: '2px solid white',
    height: '60vh',
  },
}));

const renderers = {
  root: ({ children }) => (
    <Typography variant={`h6`} align="justify">
      {children}
    </Typography>
  ),
};
const MarkdownIntro = ({ md }) => (
  <ReactMarkdown source={md} renderers={renderers} />
);

const Splash = () => {
  const classes = useStyles();
  return (
    <Box width="100%" height="100vh">
      <Triangles />
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
          <Box align="center">
            <Typography variant="h5" component="h2">
              A global genomic survey of <i>Streptococcus agalactiae</i>
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.splashBottom}
      >
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justify="center"
          style={{ height: '60vh' }}
        >
          <Grid item xs={12} sm={10} md={8} lg={6}>
            <MarkdownIntro md={raw('../content/intro.md')} />
          </Grid>
          <Grid item xs={12}>
            <Typography align="center">
              <ArrowDownward fontSize="large" />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Splash;
