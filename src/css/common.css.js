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
code {
  display: block;
  padding: var(--gap-max);
  background-color: var(--clr-2);
  color: var(--clr-1);
  border: 1px solid currentColor;
  border-radius: var(--r1);
}
code .hljs-string {
  color: rgb(79, 243, 255);
}
code .hljs-comment {
  color: rgb(110, 190, 110);
  font-style: italic;
}
code .hljs-attr {
  color: rgb(183, 249, 255);
}
code .hljs-function {
  color: rgb(239, 235, 149);
}
code .hljs-variable {
  color: rgb(235, 146, 235);
}
code .hljs-title {
  color: rgb(255, 236, 236);
}
code .hljs-property {
  color: rgb(150, 189, 213);
}
code .hljs-keyword {
  color: rgb(254, 165, 176);
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