import React from 'react';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
  Link,
  useScrollTrigger,
} from '@material-ui/core';

const Header = ({ navigation }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window,
  });
  return (
    <AppBar
      position="fixed"
      color={trigger ? 'primary' : 'transparent'}
      style={{ borderBottom: trigger ? '2px solid white' : 'none' }}
      elevation={0}
    >
      <Toolbar variant="dense">
        <Grid container alignItems="center" justify="space-between" spacing={4}>
          <Grid item>
            {trigger ? (
              <Button color="inherit" href="/" component={Link}>
                <img src="JunoLogo.svg" height="57px" alt="Juno logo" />
              </Button>
            ) : null}
          </Grid>
          <Grid item>
            {navigation.map((item, i) => (
              <Button key={i} color="inherit" href={item.url} component={Link}>
                {item.label}
              </Button>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
