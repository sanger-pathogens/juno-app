import React from 'react';
import { useTheme } from '@material-ui/core/styles';

const IconStreptococcus = ({ R = 100 }) => {
  const theme = useTheme();

  // const n1 = 40;
  // const p1 = 0.11;
  // const q1 = 0.17;
  // const strand1 = Array(n1)
  //   .fill(0)
  //   .map((_, i) => ({
  //     cx: R * Math.cos(2 * Math.PI * i * p1),
  //     cy: R * Math.sin(2 * Math.PI * i * q1),
  //     r: 5 * Math.log(i + 10),
  //   }));
  // const strands = [strand1];

  const r = R * 0.2;
  const toCircleProps = d => ({
    cx: R * d[0],
    cy: R * d[1],
    r: r * d[2],
  });
  const strandA = [
    [0.15, 0.3, 0.65],
    [0.1, 0.4, 0.69],
    [0.02, 0.48, 0.72],
    [-0.12, 0.56, 0.76],
    [-0.23, 0.58, 0.79],
    [-0.35, 0.62, 0.82],
    [-0.48, 0.68, 0.87],
  ];
  const strandB = [
    [-0.1, 0.15, 0.67],
    [-0.01, 0.05, 0.78],
    [0.05, 0.01, 0.79],
    [0.18, -0.09, 0.75],
  ];
  const strandC = [
    [-0.13, -0.2, 0.5],
    [-0.17, -0.3, 0.51],
    [-0.11, -0.38, 0.5],
    [-0.03, -0.46, 0.48],
    [0.05, -0.5, 0.59],
    [0, -0.62, 0.54],
    [0.05, -0.78, 0.61],
    [0.11, -0.84, 0.61],
    [0.25, -0.85, 0.59],
    [0.38, -0.69, 0.65],
    [0.53, -0.6, 0.67],
  ];
  const strandD = [
    [0.85, 0.25, 0.4],
    [0.8, 0.15, 0.45],
    [0.65, 0.12, 0.49],
    [0.57, 0.13, 0.53],
    [0.45, 0.18, 0.57],
    [0.37, 0.23, 0.59],
  ];
  const strandE = [
    [-0.45, 0.1, 0.35],
    [-0.5, 0.08, 0.35],
    [-0.62, 0.07, 0.4],
    [-0.85, 0.18, 0.39],
    [-0.75, 0.08, 0.43],
  ];

  const strands = [
    strandA.map(toCircleProps),
    strandB.map(toCircleProps),
    strandC.map(toCircleProps),
    strandD.map(toCircleProps),
    strandE.map(toCircleProps),
  ];

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
