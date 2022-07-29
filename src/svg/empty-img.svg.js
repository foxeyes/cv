let svg = /*svg*/ `
<svg height="100%" width="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <rect vector-effect="non-scaling-stroke" x="0" y="0" height="100" width="100" fill="transparent" stroke="#ccc" />
  <line vector-effect="non-scaling-stroke" x1="0" y1="0" x2="100" y2="100" stroke="#ccc" />
  <line vector-effect="non-scaling-stroke" x1="100" y1="0" x2="0" y2="100" stroke="#ccc" />
</svg>
`;

export default 'data:image/svg+xml;base64,' + btoa(svg);