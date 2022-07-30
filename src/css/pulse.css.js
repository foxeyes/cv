import { importFresh } from '../../importFresh.js';

export default /*css*/ `
${await importFresh('./src/css/common.css.js')}
:root {
  --clr-shade: rgba(255, 255, 255, .1);
}
body {
  display: flex;
  justify-content: center;
  background-color: var(--clr-2);
  padding: var(--gap-max);
}
section {
  width: 100%;
  max-width: var(--col-w);
  min-height: calc(100vh - var(--gap-max) * 2);
  background-color: var(--clr-2);
  color: var(--clr-1);
  padding: var(--gap-max);
}
a[back] {
  display: inline-flex;
  align-items: center;
  height: 40px;
  background-color: var(--clr-shade);
  color: var(--clr-1);
  padding-left: var(--gap-mid);
  padding-right: var(--gap-mid);
  text-decoration: none;
  border-radius: var(--r1);
}
code {
  background-color: var(--clr-shade) !important;
}
code:not([class]) {
  background-color: var(--clr-1);
  color: var(--clr-1);
}
code:not([class]):before, code:not([class]):after {
  content: '_';
  opacity: 0;
  user-select: none;
}
blockquote {
  background-color: var(--clr-shade);
}
`;