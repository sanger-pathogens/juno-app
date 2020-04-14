import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  splash: {
    backgroundImage: 'url(triangles.svg)',
    backgroundPosition: 'center top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundColor: theme.palette.primary.main,
    height: '330px',
  },
}));

const Splash = () => {
  const classes = useStyles();
  return (
    <Box width="100%" className={classes.splash}>
      <Box align="center" pt={8}>
        <img src="JunoLogo.svg" height="160px" alt="JUNO" />
      </Box>
      <Box align="center" pl={1} pr={1}>
        <Typography variant="h5" component="h2">
          A global genomic survey of <i>Streptococcus agalactiae</i>
        </Typography>
      </Box>
    </Box>
  );
};

export default Splash;
