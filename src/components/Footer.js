import React from 'react';
import { Box, Grid, IconButton, Link } from '@material-ui/core';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const Footer = () => (
  <Box m={4} color="white">
    <Grid container alignItems="center" justify="space-between" spacing={4}>
      <Grid item>
        <img src="SangerLogo.9423243b.png" width="166" alt="Sanger logo" />
      </Grid>
      <Grid item>
        <IconButton
          color="inherit"
          target="_blank"
          href="https://www.pneumogen.net/gps/"
          component={Link}
        >
          <AlternateEmailOutlinedIcon />
        </IconButton>
        <IconButton
          color="inherit"
          target="_blank"
          href="https://www.pneumogen.net/gps/"
          component={Link}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          color="inherit"
          target="_blank"
          href="https://www.pneumogen.net/gps/"
          component={Link}
        >
          <TwitterIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Box>
);

export default Footer;
