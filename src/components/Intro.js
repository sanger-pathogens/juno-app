import React from 'react';
import { Grid, Box, Typography, Hidden } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import IconWorld from './IconWorld';
import IconStreptococcus from './IconStreptococcus';
import IconPhylogeny from './IconPhylogeny';

const renderers = {
  paragraph: ({ children }) => <Typography gutterBottom>{children}</Typography>,
};
const MarkdownIntro = ({ md }) => (
  <ReactMarkdown source={md} renderers={renderers} />
);

const Intro = () => (
  <Grid container alignItems="center">
    <Grid item xs={12}>
      <Box>
        <MarkdownIntro md={raw('../content/intro.md')} />
      </Box>
    </Grid>
    <Hidden smDown>
      <Grid item xs={12}>
        <Box align="center" pt={2} pb={2}>
          <Box p={1} display="inline">
            <IconWorld />
          </Box>
          <Box p={1} display="inline">
            <IconStreptococcus />
          </Box>
          <Box p={1} display="inline">
            <IconPhylogeny />
          </Box>
        </Box>
      </Grid>
    </Hidden>
  </Grid>
);

export default Intro;
