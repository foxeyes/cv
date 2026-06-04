// Common rules
import common from './common.css.js';

// Code highlighting styles
import codeStyles from './code.css.js'; // Auto-generated color scheme

let profilePic = {
  emojis: Array.from(new Intl.Segmenter().segment('🦊🌞🥷👽👁️🥸❄️🙃🍏❤️🎁🦄🌀'), s => s.segment), // Intl.Segmenter splits by grapheme clusters
  holdMs: 3000,
  slideMs: 600,
  lsFactor: 0.5, // letter-spacing as fraction of --ui-size; centering offset = lsFactor / 2
};

function profilePicAnimation({ emojis, holdMs, slideMs, lsFactor }) {
  let count = emojis.length;
  let totalMs = (holdMs + slideMs) * count;
  let slotPct = 100 / count;
  let holdPct = holdMs / totalMs * 100;
  let offset = lsFactor / 2;
  let pct = /** @param {number} n */ n => `${+n.toFixed(4)}%`;
  let tx  = /** @param {number} i */ i => `translateX(calc(var(--ui-size) * ${offset - i}))`;

  let frames = [
    ...Array.from({ length: count }, (_, i) =>
      `  ${pct(i * slotPct)}, ${pct(i * slotPct + holdPct)} { transform: ${tx(i)}; }`
    ),
    `  100% { transform: ${tx(count)}; }`,
  ].join('\n');

  return {
    content: [...emojis, emojis[0]].join(''),
    duration: `${totalMs / 1000}s`,
    keyframes: frames,
    lsFactor,
  };
}

let pic = profilePicAnimation(profilePic);

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

  &::before {
    margin-top: 1px;
    margin-left: .2px;
    content: "${pic.content}";
    font-size: calc(var(--ui-size) * 0.5);
    letter-spacing: calc(var(--ui-size) * ${pic.lsFactor});
    animation: profile-emoji-scroll ${pic.duration} ease-in-out infinite;
  }
}

@keyframes profile-emoji-scroll {
${pic.keyframes}
}

${codeStyles}
`;