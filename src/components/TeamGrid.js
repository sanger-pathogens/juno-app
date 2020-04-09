import React from 'react';
import Markdown from 'react-markdown';
import { Grid, Box, Typography, Link } from '@material-ui/core';

import currentTeam from '../content/team';

const renderers = {
  paragraph: ({ children }) => (
    <Typography variant="body2">{children}</Typography>
  ),
  link: props => <Link {...props} target="_blank" rel="noopener noreferrer" />,
};

const TeamDescriptionRenderer = ({ md }) => (
  <Markdown source={md} renderers={renderers} />
);

const Person = ({ name, role, imageUrl, description }) => (
  <Box>
    <img src={imageUrl} alt={`${name} - ${role}`} width="100%" />
    <Typography variant="h6">{name}</Typography>
    <Typography variant="subtitle1">
      <i>{role}</i>
    </Typography>
    <TeamDescriptionRenderer md={description} />
  </Box>
);

const Team = () => (
  <Box pt={2} pb={2}>
    <Grid container spacing={2}>
      {currentTeam.map(person => (
        <Grid key={person.name} item xs={12} sm={6} md={4}>
          <Person {...person} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Team;
