import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import ScrollableAnchor from 'react-scrollable-anchor';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

const TwitterFeed = () => (
  <Box p={2} textAlign="center">
    <ScrollableAnchor id="twitterFeed">
      <Box>
        <Typography variant="h4" gutterBottom>
          In the news
        </Typography>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6} lg={6}>
            <Box p={2}>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="JunoSeq"
                options={{ height: 400 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ScrollableAnchor>
  </Box>
);

export default TwitterFeed;
