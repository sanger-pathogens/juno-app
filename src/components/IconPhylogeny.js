import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { hierarchy, cluster, ascending, max } from 'd3';
import raw from 'raw.macro';

// see https://observablehq.com/@mbostock/tree-of-life
// data originally from https://itol.embl.de/
const newickTreeOfLifeData = raw('../content/life.txt');

// see https://github.com/jasondavies/newick.js
const newickParser = s => {
  var ancestors = [];
  var tree = {};
  var tokens = s.split(/\s*(;|\(|\)|,|:)\s*/);
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    switch (token) {
      case '(': // new branchset
        var subtree = {};
        tree.branchset = [subtree];
        ancestors.push(tree);
        tree = subtree;
        break;
      case ',': // another branch
        var subtree = {};
        ancestors[ancestors.length - 1].branchset.push(subtree);
        tree = subtree;
        break;
      case ')': // optional name next
        tree = ancestors.pop();
        break;
      case ':': // optional length next
        break;
      default:
        var x = tokens[i - 1];
        if (x === ')' || x === '(' || x === ',') {
          tree.name = token;
        } else if (x === ':') {
          tree.length = parseFloat(token);
        }
    }
  }
  return tree;
};

function linkStep(startAngle, startRadius, endAngle, endRadius) {
  const c0 = Math.cos((startAngle = ((startAngle - 90) / 180) * Math.PI));
  const s0 = Math.sin(startAngle);
  const c1 = Math.cos((endAngle = ((endAngle - 90) / 180) * Math.PI));
  const s1 = Math.sin(endAngle);
  return (
    'M' +
    startRadius * c0 +
    ',' +
    startRadius * s0 +
    (endAngle === startAngle
      ? ''
      : 'A' +
        startRadius +
        ',' +
        startRadius +
        ' 0 0 ' +
        (endAngle > startAngle ? 1 : 0) +
        ' ' +
        startRadius * c1 +
        ',' +
        startRadius * s1) +
    'L' +
    endRadius * c1 +
    ',' +
    endRadius * s1
  );
}

function linkVariable(d) {
  return linkStep(d.source.x, d.source.radius, d.target.x, d.target.radius);
}

function linkExtensionVariable(d, R) {
  return linkStep(d.target.x, d.target.radius, d.target.x, R);
}

function setRadius(d, y0, k) {
  d.radius = (y0 += d.data.length) * k;
  if (d.children) d.children.forEach(d => setRadius(d, y0, k));
}

function maxLength(d) {
  return d.data.length + (d.children ? max(d.children, maxLength) : 0);
}

const treeOfLifeData = newickParser(newickTreeOfLifeData);
const IconPhylogeny = ({ R = 100 }) => {
  const theme = useTheme();

  const innerRadius = R;
  const root = hierarchy(
    // treeOfLifeData.branchset[0].branchset[0].branchset[0],
    treeOfLifeData.branchset[0].branchset[0].branchset[1],
    // treeOfLifeData.branchset[0].branchset[1].branchset[1],
    d => d.branchset
  )
    .sum(d => (d.branchset ? 0 : 1))
    .sort(
      (a, b) => a.value - b.value || ascending(a.data.length, b.data.length)
    );

  const clusterer = cluster()
    .size([360, innerRadius])
    .separation((a, b) => 1);

  clusterer(root);
  setRadius(root, (root.data.length = 0), innerRadius / maxLength(root));

  const links = root.links();
  const leafExtensionLinks = root.links().filter(d => !d.target.children);
  return (
    <svg width={2 * R} height={2 * R}>
      <defs>
        <clipPath id="clipPhylogeny">
          <circle cx={0} cy={0} r={R - 1} />
        </clipPath>
      </defs>
      <g transform={`translate(${R},${R})`} fill={theme.palette.primary.dark}>
        <circle cx={0} cy={0} r={R - 1} />
      </g>
      <g
        transform={`translate(${R},${R})`}
        stroke="white"
        fill="none"
        clipPath="url(#clipPhylogeny)"
      >
        <g strokeWidth="2">
          {links.map((link, i) => (
            <path key={i} d={linkVariable(link)} />
          ))}
        </g>
        <g>
          {leafExtensionLinks.map((link, i) => (
            <path key={i} d={linkExtensionVariable(link, R)} />
          ))}
        </g>
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

export default IconPhylogeny;
