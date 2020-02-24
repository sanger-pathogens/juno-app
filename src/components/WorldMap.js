import React, { useRef } from 'react';
import useMeasure from 'use-measure';
import { geoNaturalEarth1, geoPath, geoGraticule10 } from 'd3';
import { feature } from 'topojson';
import world from 'world-atlas/countries-110m.json';

import partnerCountries from '../data/partnerCountries.json';

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

  return (
    <div ref={nodeRef} style={{ width: '100%', height: '100%' }}>
      <svg
        width={width}
        height={height}
        style={{ position: 'absolute' }}
        fill="none"
        stroke="white"
        viewBox={`0 0 ${width ? width : 0} ${height ? height : 0}`}
      >
        <path d={path(graticule)} strokeWidth="0.5" />
        <path d={path(outline)} />
        {features.map((feature, i) => (
          <path
            key={i}
            d={path(feature)}
            strokeWidth="1.5"
            fill={
              partnerCountries.find(d => d === feature.properties.name)
                ? 'red'
                : 'none'
            }
          />
        ))}
      </svg>
    </div>
  );
};

export default WorldMap;
