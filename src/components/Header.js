import React from 'react';
import { Box, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => (
  <Box m={4} color="white">
    <Grid container alignItems="center" justify="space-between" spacing={4}>
      <Grid item>
        <img src="JunoLogo.svg" height="57px" alt="Juno logo" />
      </Grid>
      <Grid item>
        <Button color="inherit" to="/" component={Link}>
          Home
        </Button>
        <Button color="inherit" to="/team" component={Link}>
          Team
        </Button>
        <Button color="inherit" to="/locations" component={Link}>
          Where we work
        </Button>
        <Button color="inherit" to="/partners" component={Link}>
          Partners
        </Button>
      </Grid>
    </Grid>
  </Box>
);

export default Header;
