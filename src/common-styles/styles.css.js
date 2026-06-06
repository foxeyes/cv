// Common rules
import common from './common.css.js';

// Code highlighting styles
import codeStyles from './code.css.js'; // Auto-generated color scheme

export default /*css*/ `
${common}

body {
  display: block;
  padding-left: var(--ui-size);
}

header {
  position: sticky;
  top: 0;
  height: var(--calc-top-pan-height);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.4rem;
  gap: var(--gap-mid);
  z-index: 1000;
  background-color: var(--clr-1);
  color: var(--clr-2);
  border-bottom: var(--gap-min) solid currentColor;
  padding-left: var(--calc-gap-aside);
  padding-right: var(--calc-gap-aside);
}

footer {
  display: flex;
  height: var(--calc-top-pan-height);
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-max);
  background-color: var(--clr-1);
  color: var(--clr-2);
  border-top: var(--gap-min) solid currentColor;
  padding-left: var(--calc-gap-aside);
  padding-right: var(--calc-gap-aside);
}

[profile-pic] {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  width: var(--ui-size);
  height: var(--ui-size);
  font-size: 0;
  white-space: nowrap;
  line-height: var(--ui-size);
  overflow: hidden;
  border-radius: 50%;
  background-color: var(--clr-2);
  pointer-events: none;
  background-image: url(https://ucarecdn.com/6a90e4f5-0860-4cce-80a5-c378de90b1ed/-/resize/500x500/-/format/auto/);
  background-size: 100px 100px;
  background-position: -27px -6px;
  background-repeat: no-repeat;
}

${codeStyles}
`;