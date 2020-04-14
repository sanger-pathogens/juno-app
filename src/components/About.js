import React from 'react';
import raw from 'raw.macro';

import Markdown from './Markdown';
import Intro from './Intro';

const About = () => (
  <>
    <Intro />
    <Markdown md={raw('../content/what-is-gbs.md')} />
    <Markdown md={raw('../content/our-aim.md')} />
  </>
);

export default About;
