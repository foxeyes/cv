let svg = /*svg*/ `
<svg height="100%" width="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <rect vector-effect="non-scaling-stroke" x="0" y="0" height="100" width="100" fill="transparent" stroke="#ccc" />
  <line vector-effect="non-scaling-stroke" x1="0" y1="0" x2="100" y2="100" stroke="#ccc" />
  <line vector-effect="non-scaling-stroke" x1="100" y1="0" x2="0" y2="100" stroke="#ccc" />
</svg>
`;

let dataSvg = 'data:image/svg+xml;base64,' + btoa(svg);

export default /*css*/ `
::-webkit-scrollbar {
  display: none;
}

:root {
  --clr-1: #ccc;
  --clr-2: #000;

  --clr-hl1: #0ff;

  --clr-a1: rgba(0, 0, 0, .6);
  --clr-a2: rgba(0, 0, 0, .4);
  --clr-a3: rgba(0, 0, 0, .2);
  --clr-a4: rgba(0, 0, 0, .1);

  --gap-min: 2px;
  --gap-mid: 10px;
  --gap-max: 20px;

  --r1: 6px;

  --col-w: 980px;
}

html, body {
  min-height: 100vh;
  padding: 0;
  margin: 0;
  background-color: var(--clr-1);
  color: var(--clr-2);
  font-family: 'Roboto', sans-serif;
}
* {
  box-sizing: border-box;
}
body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-left: var(--gap-mid) solid var(--clr-a1);
}
body::before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--gap-mid);
  background-color: var(--clr-a2);
}
body::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: var(--gap-mid);
  bottom: 0;
  width: var(--gap-mid);
  background-color: var(--clr-a3);
}

code {
  display: block;
  padding: var(--gap-max);
  background-color: var(--clr-2);
  color: var(--clr-1);
  border: 1px solid currentColor;
  border-radius: var(--r1);
}

section {
  display: flex;
  justify-content: flex-end;
  padding: 40px;
  max-height: 100vh;
  overflow: auto;
  scrollbar-width: none;
}
section[pulse] {
  background-color: var(--clr-2);
  color: var(--clr-1);
  justify-content: flex-start;
}
col-css {
  display: block;
  width: 100%;
  max-width: var(--col-w);
}
pulse-item-css {
  display: grid;
  grid-template-columns: min-content auto;
  background-color: rgba(255, 255, 255, .1);
  padding: var(--gap-max);
  margin-bottom: var(--gap-mid);
  border-radius: var(--r1);
}
pulse-item-css [date] {
  margin-bottom: var(--gap-mid);
}
pulse-item-css [text] {
  margin-left: var(--gap-max);
}

pulse-item-css img {
  display: block;
  background-color: var(--clr-a2);
  width: 120px;
  height: 120px;
}
pulse-item-css a {
  display: block;
  margin-top: var(--gap-mid);
}

a {
  color: currentColor;
}

p {
  margin: 0;
}

blockquote {
  display: block;
  margin: 0;
  margin-top: var(--gap-mid);
  margin-bottom: var(--gap-mid);
  padding: var(--gap-mid);
  border-left: 2px solid currentColor;
  background-color: var(--clr-a4);
}

ul {
  list-style-type: none;
  padding: var(--gap-mid);
}
ul > li {
  margin-bottom: 6px;
}
ul > li::before {
  content: ">";
  color: currentColor;
  text-shadow: 0 0px 13px currentColor;
  margin-right: var(--gap-mid);
}
`;