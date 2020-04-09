import React from 'react';
import { Box } from '@material-ui/core';
import { configureAnchors } from 'react-scrollable-anchor';

import Page from './Page';
import Header from './Header';
import Footer from './Footer';
import Section from './Section';
import Splash from './Splash';
import About from './About';
import WorldMap from './WorldMap';
import Team from './TeamGrid';

// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -60, scrollDuration: 200 });

const sections = [
  {
    label: 'About',
    showTitle: false,
    url: 'about',
    ContentComponent: About,
  },
  {
    label: 'Team',
    title: 'Team',
    url: 'team',
    ContentComponent: Team,
  },
  {
    label: 'Partners',
    title: 'Partners',
    url: 'partners',
    ContentComponent: WorldMap,
  },
];

const PageHome = () => (
  <Page
    header={
      <Header
        navigation={[
          ...sections.map(({ label, url }) => ({
            label,
            url: `#${url}`,
          })),
          { label: 'Funders', url: '#funders' },
        ]}
      />
    }
    footer={<Footer />}
  >
    <Splash />
    <Box>
      {sections.map((section, i) => (
        <Section key={i} anchorId={section.url} {...section} />
      ))}
    </Box>
  </Page>
);

export default PageHome;
