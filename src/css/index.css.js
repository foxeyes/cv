import { importFresh } from '../../importFresh.js';

export default /*css*/ `
${await importFresh('./src/css/common.css.js')}
body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  border-left: var(--gap-mid) solid var(--clr-a1);
}
body::before, body::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--gap-mid);
}
body::before {
  background-color: var(--clr-a2);
}
body::after {
  left: var(--gap-mid);
  background-color: var(--clr-a3);
}

section {
  display: flex;
  justify-content: flex-end;
  padding: var(--gap-max);
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
header {
  display: flex;
  align-items: center;
}
header [fox] {
  width: 200px;
  height: 500px;
  background-image: url("https://ucarecdn.com/6a90e4f5-0860-4cce-80a5-c378de90b1ed/-/resize/500x500/-/format/auto/");
  background-position: center center;
}

a[pulse-item] {
  display: grid;
  grid-template-columns: min-content auto;
  background-color: rgba(255, 255, 255, .1);
  padding: var(--gap-max);
  margin-bottom: var(--gap-mid);
  border-radius: var(--r1);
  text-decoration: none;
  transition: .2s;

  &:hover {
    background-color: rgba(255, 255, 255, .2);
  }
}
a[pulse-item] [date] {
  margin-bottom: var(--gap-mid);
  opacity: .7;
  font-style: italic;
}
a[pulse-item] [text] {
  margin-left: var(--gap-max);
}

a[pulse-item] img {
  display: block;
  background-color: #ccc;;
  width: 120px;
  min-width: 120px;
  height: 120px;
  border-radius: var(--r2);
}

@media screen and (max-width: 800px) {
  body {
    display: block;
    border-left: none;
  }
  body::before, body::after {
    background-color: transparent;
  }
  section {
    max-height: unset;
    padding: var(--gap-mid);
  }
  a[pulse-item] {
    display: flex;
    flex-flow: column;
  }
  a[pulse-item] [text] {
    margin-left: 0;
    margin-top: var(--gap-max);
  }
}
@media screen and (max-width: 1000px) {
  a[pulse-item] {
    display: flex;
    flex-flow: column;
  }
  a[pulse-item] [text] {
    margin-left: 0;
    margin-top: var(--gap-max);
  }
}
`;