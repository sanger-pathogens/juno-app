import React from 'react';
import { Box, Grid, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FooterItem from './FooterItem';
import Funders from './Funders';
import UsefulLinks from './UsefulLinks';

import contacts from '../content/contacts';
import sites from '../content/sites';

const useStyles = makeStyles({
  footer: {
    borderTop: '2px solid white',
  },
  footerLink: {
    color: 'white',
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer} mt={8}>
      <UsefulLinks />
      <Funders />
      <Box p={3} bgcolor="primary.main">
        <Grid container alignItems="center" justify="space-between" spacing={2}>
          <FooterItem heading="Sites">
            {sites.map((site, i) => (
              <React.Fragment key={i}>
                <Link
                  className={classes.footerLink}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.label}
                </Link>
                {i < sites.length - 1 ? ' | ' : null}
              </React.Fragment>
            ))}
          </FooterItem>
          <FooterItem heading="Contacts" right>
            {contacts.map((contact, i) => (
              <React.Fragment key={i}>
                <Link
                  className={classes.footerLink}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.label}
                </Link>
                {i < contacts.length - 1 ? ' | ' : null}
              </React.Fragment>
            ))}
          </FooterItem>
        </Grid>
      </Box>
      <Box p={3} bgcolor="primary.main" borderTop="2px solid white">
        <Grid container alignItems="center" justify="space-between" spacing={2}>
          <Grid item xs={12} sm={6}>
            <Link
              href="https://www.sanger.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/SangerLogo.9423243b.png"
                width="130"
                alt="Sanger logo"
              />
            </Link>
          </Grid>
          <FooterItem heading="Version" right>
            <Link
              className={classes.footerLink}
              href={`https://github.com/sanger-pathogens/juno-app/commit/${process.env.REACT_APP_GIT_REVISION}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {process.env.REACT_APP_GIT_REVISION}
            </Link>
          </FooterItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer;
