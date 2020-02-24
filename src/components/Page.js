import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles({
  page: {
    background: `linear-gradient(135deg, #6868BE 10%, #8BABE4 60%, #FBECD2 100%)`,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    width: '100%',
  },
  gridContainer: {
    margin: 0,
    padding: '24px',
    width: '100%',
    flex: '1 0 auto',
  },
});

const Page = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <Header />
      <Grid
        container
        justify="center"
        spacing={24}
        className={classes.gridContainer}
      >
        <Grid item xs={12} md={11}>
          {children}
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Page;
