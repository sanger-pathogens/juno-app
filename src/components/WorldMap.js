import React, { useRef } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Tooltip, Typography } from '@material-ui/core';
import useMeasure from 'use-measure';
import { geoNaturalEarth1, geoPath, min } from 'd3';
import { feature } from 'topojson';
import world from 'world-atlas/countries-110m.json';

import affiliates from '../content/juno-affiliates';
import isolateCountries from '../content/isolate-countries';
import { primary } from '../theme';

const tooltipAffiliateRenderer = d => (
  <Typography variant="subtitle2" align="center">
    {d.items.map((item, i) => (
      <React.Fragment key={i}>
        <strong>{item.affiliation}</strong>
        <br />
        {item.country}
        {i < d.items.length - 1 ? (
          <React.Fragment>
            <br />
            <hr style={{ borderTop: primary }} />
          </React.Fragment>
        ) : null}
      </React.Fragment>
    ))}
  </Typography>
);

// const tooltipCountryRenderer = d => (
//   <Typography variant="subtitle2" align="center">
//     {d.properties.name}
//   </Typography>
// );

const Circle = React.forwardRef((props, ref) => (
  <circle {...props} ref={ref}>
    Bin
  </circle>
));

// const Path = React.forwardRef((props, ref) => (
//   <path {...props} ref={ref}>
//     Bin
//   </path>
// ));

const WorldMap = () => {
  const theme = useTheme();

  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width, height } = size;

  // data to draw
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

  const r = 6;
  const threshold = 2 * r;
  const euclidean = (p1, p2) =>
    Math.sqrt((p1.cx - p2.cx) ** 2 + (p1.cy - p2.cy) ** 2);

  const mergedPointsWithScreenCoordinates = pointsWithScreenCoordinates
    .reduce((acc, point) => {
      // acc is array of arrays of points
      if (acc.length > 0) {
        const minDistancesPerMergedPointArray = acc.map(pointArray =>
          min(pointArray.map(other => euclidean(point, other)))
        );
        const minDistance = min(minDistancesPerMergedPointArray);

        if (minDistance < threshold) {
          // merge points if they are close on screen
          const minDistanceIndex = minDistancesPerMergedPointArray.indexOf(
            minDistance
          );
          acc[minDistanceIndex].push(point);
        } else {
          acc.push([point]);
        }
      } else {
        acc.push([point]);
      }

      return acc;
    }, [])
    .map(d => ({ cx: d[0].cx, cy: d[0].cy, items: d }));

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
        <g strokeWidth="0.5" stroke={theme.palette.primary.dark}>
          {features.map((feature, i) => (
            // <Tooltip key={i} title={tooltipCountryRenderer(feature)} arrow>
            //   <path
            //     fill={
            //       isolateCountries.indexOf(feature.properties.name) >= 0
            //         ? theme.palette.secondary.light
            //         : 'white'
            //     }
            //     d={path(feature)}
            //   />
            // </Tooltip>

            <path
              key={i}
              fill={
                isolateCountries.indexOf(feature.properties.name) >= 0
                  ? theme.palette.secondary.light
                  : 'white'
              }
              d={path(feature)}
            />
          ))}
        </g>
        <g
          stroke={theme.palette.primary.dark}
          fill={theme.palette.tertiary.main}
        >
          {mergedPointsWithScreenCoordinates.map((point, j) => (
            <Tooltip key={j} title={tooltipAffiliateRenderer(point)} arrow>
              <Circle key={j} {...{ cx: point.cx, cy: point.cy, r: 4 }} />
            </Tooltip>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default WorldMap;
