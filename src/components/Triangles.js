import React, { useRef } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { line } from 'd3';
import useMeasure from 'use-measure';

// see https://bl.ocks.org/armollica/14d432a338787f6b1a24

function trianglePath(d) {
  var alpha = Math.sqrt(d.p * Math.pow(d.alpha, 2)),
    ri = (alpha * Math.sqrt(3)) / 6,
    rc = alpha / Math.sqrt(3);

  var points = null;
  if (d.pointing == 'up') {
    points = [
      [d.cx - alpha / 2, d.cy - ri],
      [d.cx, d.cy + rc],
      [d.cx + alpha / 2, d.cy - ri],
    ];
  } else if (d.pointing == 'down') {
    points = [
      [d.cx - alpha / 2, d.cy + ri],
      [d.cx + alpha / 2, d.cy + ri],
      [d.cx, d.cy - rc],
    ];
  }
  return line()(points);
}

export function proximity(d, x, y, width) {
  var dist =
    1 - Math.sqrt(Math.pow(d.cx - x, 2) + Math.pow(d.cy - y, 2)) / width;
  return Math.pow(dist, 6);
}

export function inverseProximity(d, x, y, width) {
  var dist = Math.sqrt(Math.pow(d.cx - x, 2) + Math.pow(d.cy - y, 2)) / width;
  return Math.pow(dist, 2);
}

function createTriangleData(width, height, trianglesAcross, area) {
  // Source of geometric definitions:
  // https://en.wikipedia.org/wiki/Equilateral_triangle
  var alpha = width / trianglesAcross, // maximum side length
    ri = (alpha * Math.sqrt(3)) / 6, // maximum radius of inscribing circle
    rc = alpha / Math.sqrt(3); // maximum radius of circumscribing circle

  var data = [];

  // Upward pointing triangles
  for (var x = alpha / 2; x <= width + alpha; x += alpha) {
    for (var y = ri, i = 0; y <= height + alpha; y += ri + rc, i++) {
      data.push({
        cx: x - (i % 2 == 0 ? 0 : alpha / 2),
        cy: y,
        pointing: 'up',
        alpha: alpha,
      });
    }
  }

  // Downward pointing triangles
  for (var x = 0; x <= width + alpha; x += alpha) {
    for (var y = rc, i = 0; y <= height + alpha; y += ri + rc, i++) {
      data.push({
        cx: x - (i % 2 == 0 ? 0 : alpha / 2),
        cy: y,
        pointing: 'down',
        alpha: alpha,
      });
    }
  }

  // p in [0, 1] maps the triangle's area from 0 to its maximum area
  data = data.map(function(d) {
    d.p = area(d, width / 2, height / 2, width);
    return d;
  });

  return data;
}

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    position: 'absolute',
  },
}));

const Triangles = ({
  backgroundColour = theme => theme.palette.primary.main,
  triangleColour = theme => theme.palette.primary.dark,
  containerHeight = () => '40vh',
  triangleSize = inverseProximity,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width, height } = size;

  const trianglesAcross = 40;
  const triangles =
    width > 0
      ? createTriangleData(width, height, trianglesAcross, triangleSize)
      : [];

  return (
    <div
      ref={nodeRef}
      className={classes.container}
      style={{
        height: containerHeight(theme),
        backgroundColor: backgroundColour(theme),
      }}
    >
      <svg
        width={width}
        height={height}
        fill={triangleColour(theme)}
        viewBox={`0 0 ${width ? width : 0} ${height ? height : 0}`}
      >
        <g>
          {triangles.map((t, i) => (
            <path key={i} d={trianglePath(t)} />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default Triangles;
