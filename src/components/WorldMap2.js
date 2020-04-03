import React, { useRef } from 'react';
import { Box, Grid, Tooltip, Typography } from '@material-ui/core';
import { CheckCircleRounded, CancelRounded } from '@material-ui/icons';
import useMeasure from 'use-measure';
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3';
import { feature } from 'topojson';
import world from 'world-atlas/countries-110m.json';

import { highlight } from '../theme';
import affiliates from '../content/juno-affiliates';
// import gpsAffiliates from '../content/gps-affiliates';

// const affiliates = Object.values(
//   [
//     ...junoAffiliates.map(d => ({ ...d, inJuno: true })),
//     ...gpsAffiliates.map(d => ({ ...d, inGPS: true })),
//   ].reduce((acc, d) => {
//     const { inJuno, inGPS, ...rest } = d;
//     // first visit
//     if (!acc[d.affiliation]) {
//       acc[d.affiliation] = {
//         ...rest,
//         projects: [],
//       };
//     }

//     // from juno
//     if (inJuno) {
//       acc[d.affiliation].projects.push('juno');
//     }

//     // from gps
//     if (inGPS) {
//       acc[d.affiliation].projects.push('gps');
//     }

//     return acc;
//   }, {})
// );

const alignmentStyles = { display: 'inline', verticalAlign: 'bottom' };

const tooltipContentRenderer = d => (
  <Typography variant="subtitle2" align="center">
    <strong>{d.affiliation}</strong>
    <br />
    {d.country}
  </Typography>
);

const Circle = React.forwardRef((props, ref) => (
  <circle {...props} ref={ref}>
    Bin
  </circle>
));
// const Polygon = React.forwardRef((props, ref) => (
//   <polygon {...props} ref={ref}>
//     Bin
//   </polygon>
// ));

const WorldMap = () => {
  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width, height } = size;

  // data to draw
  const graticule = geoGraticule10();
  const outline = { type: 'Sphere' };
  const features = feature(world, world.objects.countries).features;

  // build the renderer
  const projection = geoNaturalEarth1()
    .rotate([0, 0])
    .precision(0.1)
    .fitSize([width, height], outline);
  const path = geoPath().projection(projection);

  const pointsWithScreenCoordinates = affiliates.map((point, j) => {
    const [cx, cy] = projection([point.longitude, point.latitude]);
    return { ...point, cx, cy };
  });
  // TODO: voronoi hover panels
  // const voronoiGenerator = voronoi()
  //   .extent([
  //     [0, 0],
  //     [width ? width : 0, height ? height : 0],
  //   ])
  //   .x(d => d.cx)
  //   .y(d => d.cy);
  // const hoverPanels = voronoiGenerator.polygons(pointsWithScreenCoordinates);

  return (
    <div ref={nodeRef} style={{ width: '100%', height: 600 }}>
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute' }}
        fill="none"
        stroke="#666"
        viewBox={`0 0 ${width ? width : 0} ${height ? height : 0}`}
      >
        <g>
          <path stroke={highlight} d={path(graticule)} strokeWidth="0.5" />
        </g>
        <g>
          <path stroke={highlight} d={path(outline)} />
          {features.map((feature, i) => (
            <path
              stroke="#444"
              fill="#666"
              key={i}
              d={path(feature)}
              strokeWidth="0.5"
            />
          ))}
        </g>
        {/* <g stroke="#00bcd4" fill="white">
          {hoverPanels.map((panel, j) => (
            <Tooltip key={j} title={tooltipContentRenderer(panel.data)} arrow>
              <Polygon opacity={0} points={panel} />
            </Tooltip>
          ))}
        </g> */}
        <g stroke="black" fill="white">
          {pointsWithScreenCoordinates.map((point, j) => (
            <Tooltip key={j} title={tooltipContentRenderer(point)} arrow>
              <Circle key={j} {...{ cx: point.cx, cy: point.cy, r: 4 }} />
            </Tooltip>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default WorldMap;
