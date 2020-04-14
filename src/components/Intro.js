import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Icons from './Icons';

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
    <Grid item xs={12}>
      <Icons />
    </Grid>
  </Grid>
);

export default Intro;
