import React from 'react';
import { geoOrthographic, geoPath } from 'd3';
import { feature } from 'topojson';
import world from 'world-atlas/countries-110m.json';

const IconWorld = ({ R = 100 }) => {
  const outline = { type: 'Sphere' };
  const features = feature(world, world.objects.land).features;
  const projection = geoOrthographic()
    .rotate([30, -20])
    .precision(0.1)
    .fitSize([2 * R, 2 * R], outline);
  const path = geoPath().projection(projection);

  return (
    <svg width={2 * R} height={2 * R}>
      <g>
        {features.map((feature, i) => (
          <path stroke="none" fill="white" key={i} d={path(feature)} />
        ))}{' '}
        */}
      </g>
      <g
        transform={`translate(${R},${R})`}
        stroke="white"
        strokeWidth="2"
        fill="none"
      >
        <circle cx={0} cy={0} r={R - 1} />
      </g>
    </svg>
  );
};

export default IconWorld;
