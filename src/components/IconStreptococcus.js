import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const IconStreptococcus = ({ R = 100 }) => {
  const theme = useTheme();

  const n1 = 40;
  const p1 = 0.11;
  const q1 = 0.17;
  const strand1 = Array(n1)
    .fill(0)
    .map((_, i) => ({
      cx: R * Math.cos(2 * Math.PI * i * p1),
      cy: R * Math.sin(2 * Math.PI * i * q1),
      r: 5 * Math.log(i + 10),
    }));
  const strands = [strand1];

  return (
    <svg width={2 * R} height={2 * R}>
      <defs>
        <clipPath id="clipStreptococcus">
          <circle cx={0} cy={0} r={R - 1} />
        </clipPath>
      </defs>
      <g transform={`translate(${R},${R})`} fill={theme.palette.primary.dark}>
        <circle cx={0} cy={0} r={R - 1} />
      </g>
      <g
        transform={`translate(${R},${R})`}
        stroke={theme.palette.primary.dark}
        strokeWidth={2}
        fill="white"
        clipPath="url(#clipStreptococcus)"
      >
        {strands.map((strand, i) => (
          <g key={i}>
            {strand.map((bacterium, j) => (
              <circle key={j} {...bacterium} />
            ))}
          </g>
        ))}
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

export default IconStreptococcus;
