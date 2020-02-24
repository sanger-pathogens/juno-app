import React from 'react';
import { Box, Grid, Button, Link } from '@material-ui/core';

const Header = () => (
  <Box m={1} color="white">
    <Grid container alignItems="center" justify="space-between" spacing={24}>
      <Grid item>
        <img src="JunoLogo.svg" height="57px" />
      </Grid>
      <Grid item>
        <Button
          color="inherit"
          target="_blank"
          href="https://www.pneumogen.net/gps/"
          component={Link}
        >
          Home
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://www.pneumogen.net/gps/"
          component={Link}
        >
          Team
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://www.pneumogen.net/gps/"
          component={Link}
        >
          Where we work
        </Button>
        <Button
          color="inherit"
          target="_blank"
          href="https://www.pneumogen.net/gps/"
          component={Link}
        >
          Partners
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default Header;
