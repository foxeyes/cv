export default /*css*/ `
:root {
  --clr-1: #ccc;
  --clr-2: #000;

  --clr-hl1: #0ff;

  --clr-a1: rgba(0, 0, 0, .6);
  --clr-a2: rgba(0, 0, 0, .4);
  --clr-a3: rgba(0, 0, 0, .2);

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
  border-radius: var(--r1);
}

section {
  padding: 40px;
}
section[pulse] {
  background-color: var(--clr-2);
  color: var(--clr-1);
}
`;