import { importFresh } from '../../importFresh.js';

export default /*css*/ `
${await importFresh('./src/css/common.css.js')}
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
  background-color: var(--clr-1);
  color: var(--clr-2);
  padding: var(--gap-max);
  border-radius: var(--r1);
}
a[back] {
  display: inline-flex;
  align-items: center;
  height: 40px;
  background-color: var(--clr-2);
  color: var(--clr-1);
  padding-left: var(--gap-mid);
  padding-right: var(--gap-mid);
  text-decoration: none;
  border-radius: var(--r1);
}
`;