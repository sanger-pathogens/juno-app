import React, { useRef } from 'react';
import useMeasure from 'use-measure';
import { Grid, Box } from '@material-ui/core';

import IconWorld from './IconWorld';
import IconStreptococcus from './IconStreptococcus';
import IconPhylogeny from './IconPhylogeny';

const Icons = () => {
  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width } = size;
  const R = width ? width / 7 : 100;
  const height = R * 2;

  return (
    <Box
      ref={nodeRef}
      align="center"
      mt={4}
      mb={4}
      style={{ width: '100%', height }}
    >
      <Grid container>
        <Grid item xs={4}>
          <IconWorld R={R} />
        </Grid>
        <Grid item xs={4}>
          <IconStreptococcus R={R} />
        </Grid>
        <Grid item xs={4}>
          <IconPhylogeny R={R} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Icons;
