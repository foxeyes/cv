import { importFresh } from '../../importFresh.js';

export default /*css*/ `
${await importFresh('./src/css/common.css.js')}
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
  opacity: .7;
  font-style: italic;
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
`;