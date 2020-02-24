import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

import Page from './Page';
import CircularImage from './CircularImage';

const PageHome = () => (
  <Page>
    <Grid container>
      <Grid item xs={12}>
        <Box textAlign="center" color="white">
          <Typography variant="h2" component="h1" gutterBottom>
            <strong>JUNO</strong>
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            <strong>A global genomic survey of Streptococcus agalactiae</strong>
          </Typography>
        </Box>
      </Grid>
      <Grid item container xs={12} alignItems="center">
        <Grid item xs={9}>
          <Box color="white" p={2}>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              pellentesque lectus, eget pretium elit. Sed ut ligula rutrum velit
              varius elementum. Proin iaculis tincidunt massa. Etiam id
              consectetur lectus, at rutrum ipsum. Nam commodo mauris odio, sed
              efficitur urna luctus vitae. Aliquam et lectus in massa ornare
              euismod quis in augue. Vestibulum rutrum ante a maximus rutrum.
              Aliquam sit amet ligula et lorem ullamcorper faucibus convallis a
              lorem. Fusce eleifend arcu eu felis rutrum, eu posuere diam
              aliquet. Praesent hendrerit placerat odio, nec pulvinar mi cursus
              quis. Ut nec eros erat. Integer gravida mauris non augue pulvinar
              faucibus. Vestibulum mauris nunc, viverra id massa in, elementum
              placerat magna. Nullam elementum, quam sed blandit porttitor, urna
              tellus feugiat est, sit amet tempus lorem diam non dolor.
              Suspendisse nibh quam, euismod quis mi non, viverra tristique
              tellus.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <CircularImage
            src="globe3-square.png"
            alt="Globe. Image credit: Christine J. Boinett, Wellcome Sanger Institute"
            title="Image credit: Christine J. Boinett, Wellcome Sanger Institute"
          />
        </Grid>
      </Grid>
      <Grid item container xs={12} alignItems="center">
        <Grid item xs={3}>
          <CircularImage
            src="GBS-square.png"
            alt="Streptococcus agalactiae. Image credit: CDC"
            title="Image credit: CDC"
          />
        </Grid>
        <Grid item xs={9}>
          <Box color="white" p={2}>
            <Typography>
              Praesent interdum viverra velit in fermentum. Nullam sed placerat
              neque, nec dapibus enim. Nunc aliquet suscipit enim, sit amet
              euismod sem rhoncus vitae. Pellentesque vel scelerisque velit.
              Nullam vel ipsum vel ex mattis fermentum. Mauris gravida, ligula
              ut molestie porttitor, felis erat cursus elit, eu ornare magna
              odio vitae magna. Donec consectetur aliquet nulla, quis luctus
              nibh congue nec. Duis lacinia gravida erat, a iaculis sem
              hendrerit in. Curabitur dictum nulla non rutrum congue. Curabitur
              sapien orci, scelerisque eget mauris nec, dignissim egestas
              tellus. Pellentesque porttitor hendrerit leo sit amet malesuada.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid item container xs={12} alignItems="center">
        <Grid item xs={9}>
          <Box color="white" p={2}>
            <Typography>
              <strong>Our mission</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              pellentesque lectus, eget pretium elit. Sed ut ligula rutrum velit
              varius elementum. Proin iaculis tincidunt massa. Etiam id
              consectetur lectus, at rutrum ipsum. Nam commodo mauris odio, sed
              efficitur urna luctus vitae. Aliquam et lectus in massa ornare
              euismod quis in augue. Vestibulum rutrum ante a maximus rutrum.
              Aliquam sit amet ligula et lorem ullamcorper faucibus convallis a
              lorem. Fusce eleifend arcu eu felis rutrum, eu posuere diam
              aliquet. Praesent hendrerit placerat odio, nec pulvinar mi cursus
              quis. Ut nec eros erat. Integer gravida mauris non augue pulvinar
              faucibus. Vestibulum mauris nunc, viverra id massa in, elementum
              placerat magna. Nullam elementum, quam sed blandit porttitor, urna
              tellus feugiat est, sit amet tempus lorem diam non dolor.
              Suspendisse nibh quam, euismod quis mi non, viverra tristique
              tellus.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <CircularImage
            src="cc17-square.png"
            alt="Phylogenetic tree. Image credit: Jamrozy et al., 2018. Biorxiv. Wellcome Sanger Institute"
            title="Image credit: Jamrozy et al., 2018. Biorxiv. Wellcome Sanger Institute"
          />
        </Grid>
      </Grid>
      <Grid item xs={12} alignItems="center">
        <Box color="white" p={2}>
          <Typography>
            <strong>Selected publications</strong>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in pellentesque lectus, eget pretium elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in pellentesque lectus, eget pretium elit.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                in pellentesque lectus, eget pretium elit.
              </li>
            </ul>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  </Page>
);

export default PageHome;
