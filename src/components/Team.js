import React, { useRef } from 'react';
import { Tooltip, Typography } from '@material-ui/core';
import useMeasure from 'use-measure';

import { highlight, primary } from '../theme';
import team from '../content/team';

const tooltipContentRenderer = d => (
  <Typography variant="subtitle2" align="center">
    <strong>{d.name}</strong>
    <br />
    {d.role}
  </Typography>
);

const Circle = React.forwardRef((props, ref) => (
  <circle {...props} ref={ref}>
    Bin
  </circle>
));

const Team = () => {
  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width, height } = size;

  // calculate positions
  const side = Math.min(width, window.innerHeight - 100);
  const r = side / 6;
  const R = side / 2 - r - 2;
  const teamWithPositions = team.map((person, i) => ({
    ...person,
    x: R * Math.sin((i * Math.PI * 2) / team.length) + width / 2,
    y: -R * Math.cos((i * Math.PI * 2) / team.length) + height / 2,
  }));

  return (
    <div ref={nodeRef} style={{ width: '100%', height: side }}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        height={height}
        style={{ position: 'absolute' }}
        viewBox={`0 0 ${width ? width : 0} ${height ? height : 0}`}
      >
        <defs>
          {teamWithPositions.map((person, i) => (
            <pattern
              key={i}
              id={`person-${i}`}
              x={person.x - r}
              y={person.y - r}
              patternUnits="userSpaceOnUse"
              width={r * 2}
              height={r * 2}
            >
              <image width={r * 2} height={r * 2} href={person.imageUrl} />
            </pattern>
          ))}
        </defs>
        <g>
          {teamWithPositions.map((person, i) => (
            <Tooltip key={i} title={tooltipContentRenderer(person)} arrow>
              <circle
                fill={`url(#person-${i})`}
                stroke={primary}
                strokeWidth="2"
                cx={person.x}
                cy={person.y}
                r={r}
              />
            </Tooltip>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Team;
