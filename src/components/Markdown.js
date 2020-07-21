import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Typography, Link } from '@material-ui/core';

const renderers = {
  paragraph: ({ children }) => <Typography gutterBottom>{children}</Typography>,
  heading: ({ level, children }) => (
    <Typography variant={`h${level}`} style={{ paddingTop: '1rem' }}>
      {children}
    </Typography>
  ),
  image: props => <img {...props} width="250px" />,
  link: props => (
    <Link
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      color="secondary"
    />
  ),
};

const Markdown = ({ md }) => (
  <ReactMarkdown source={md} renderers={renderers} />
);

export default Markdown;
