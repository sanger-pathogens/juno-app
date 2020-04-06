import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

function proximity(d, x, y, width) {
  var dist =
    1 - Math.sqrt(Math.pow(d.cx - x, 2) + Math.pow(d.cy - y, 2)) / width;
  return Math.pow(dist, 6);
}

function inverseProximity(d, x, y, width) {
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
    height: '40vh',
    position: 'absolute',
    backgroundColor: theme.palette.primary.main,
  },
  svg: {
    fill: theme.palette.primary.dark,
  },
}));

const Triangles = () => {
  const classes = useStyles();

  // update if container dimensions change
  const nodeRef = useRef();
  const size = useMeasure(nodeRef);
  const { width, height } = size;

  const trianglesAcross = 40;
  const triangles =
    width > 0
      ? createTriangleData(width, height, trianglesAcross, inverseProximity)
      : [];

  return (
    <div ref={nodeRef} className={classes.container}>
      <svg
        width={width}
        height={height}
        className={classes.svg}
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
