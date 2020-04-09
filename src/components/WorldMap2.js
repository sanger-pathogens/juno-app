import React, { useRef } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Box, Grid, Tooltip, Typography } from '@material-ui/core';
import { CheckCircleRounded, CancelRounded } from '@material-ui/icons';
import useMeasure from 'use-measure';
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3';
import { feature } from 'topojson';
import world from 'world-atlas/countries-110m.json';

import affiliates from '../content/juno-affiliates';

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

const WorldMap = () => {
  const theme = useTheme();

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
          {features.map((feature, i) => (
            <path
              stroke={theme.palette.primary.dark}
              fill="white"
              key={i}
              d={path(feature)}
              strokeWidth="0.5"
            />
          ))}
        </g>
        <g
          stroke={theme.palette.primary.dark}
          fill={theme.palette.secondary.main}
        >
          {pointsWithScreenCoordinates.map((point, j) => (
            <Tooltip key={j} title={tooltipContentRenderer(point)} arrow>
              <Circle key={j} {...{ cx: point.cx, cy: point.cy, r: 6 }} />
            </Tooltip>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default WorldMap;
