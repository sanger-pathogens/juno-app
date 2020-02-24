import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  circular: {
    borderRadius: '50%',
    border: '5px solid white',
    width: 'calc(100% - 10px)',
    height: 'calc(100% - 10px)',
  },
});

const CircularImage = props => {
  const classes = useStyles();
  return <img className={classes.circular} {...props} />;
};

export default CircularImage;
