```json
{
  "date": "30-07-2022",
  "title": "ESM. Going beyond the boundaries",
  "summary": "Non-standard ways to import text-based assets as ES modules in Node.js and browser environments.",
  "image": "https://rnd-pro.com/svg/logo/index.svg",
  "link": ""
}
```
# ESM. Going beyond the boundaries

So, while working on... well, I don't know... some wonderful static site generator, you might want to import dependencies directly from text files such as: HTML, MD, CSS, SVG, or JSON into your code. Of course, you could use a bundler with the corresponding loader. But let's say your samurai code demands — no extra `npm install xxx` and no intermediate builds! Hardcore only! What to do? There is a way.
\
\
First, as usual, here's a [link to the spec description](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) to clear up any misunderstandings.

And a couple of formalities before we start:
> Make sure you have a fresh version of Node installed, and the legacy Node is safely buried.

> [OUTDATED] If you want to write isomorphic code, don't use `*.mjs` extensions — browsers don't like those (don't forget to enable `"type": "module"` in your `package.json` settings).

## Exercise one. Node. Custom loader (hook).

Did you remember to update Node? Otherwise, it might not work.

Step one (loader.js):
```js
import { URL } from 'url';
import { readFile } from 'fs/promises';

function checkUrl(url) {
  return !!['.html', '.htm', '.md', '.css', '.svg', '.json'].find((res) => {
    return url.endsWith(res);
  });
}

export async function load(url, context, defaultLoad) {
  if (checkUrl(url)) {
    const content = (await readFile(new URL(url))).toString();
    return {
      format: 'module',
      source: `export default ${url.endsWith('json') ? content : JSON.stringify(content)};`,
      shortCircuit: true,
    };
  }
  return defaultLoad(url, context, defaultLoad);
}
```

Step two (my-app.js):
```js
import html from './index.html';
import doc from './doc.md';
import css from './styles.css';
import svg from './image.svg';
import data from './data.json';

console.log(html, doc, css, svg, data);
```

Step three:
```bash
node --loader ./loader.js ./my-app.js
```

Link to docs: [https://nodejs.org/api/esm.html#loaders](https://nodejs.org/api/esm.html#loaders)

In the documentation, the technology is marked as experimental. However, in the latest version, the `--experimental-loader` parameter was replaced with `--loader`, which indirectly tells us that the technology is approaching a stable state. In any case, it's good to know about this capability.

## Exercise two. Browser. Request interception.

Let's move to the browser runtime. The task is the same: we want to load modules that aren't really modules at all. Browsers don't support any special ESM hooks. What to do? We intercept with a [Service Worker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers).

The technologies are different, but the principle remains. Create a service worker file (sw.js):
```js
function checkUrl(url) {
  return !!['.html', '.htm', '.md', '.css', '.svg', '.json'].find((res) => {
    return url.endsWith(res);
  });
}

async function handleRequest(req) {
  let content = await (await self.fetch(req.url)).text();
  let resp = new Response(
    `export default ${req.url.endsWith('json') ? content : JSON.stringify(content)};`,
    { headers: { 'Content-Type': 'text/javascript' } }
  );
  return resp;
}

self.addEventListener('fetch', (e) => {
  if (e.request.destination === 'script' && checkUrl(e.request.url)) {
    e.respondWith(handleRequest(e.request));
  }
});
```

Register the worker on the page:
```js
navigator.serviceWorker.register('./sw.js');
```

Voilà — use custom imports:
```js
import html from './index.html';
import doc from './doc.md';
import css from './styles.css';
import svg from './image.svg';
import data from './data.json';

console.log(html, doc, css, svg, data);
```

Read the worker docs carefully, there are a number of important nuances that you should familiarize yourself with before using such things in production. But for now, we've gotten everything we wanted from the browser.

## Exercise three. Node + browser. Query parameters.

Now there will be more, ahem, craziness. I'll just show you the path, and you decide whether to walk it or not. So, perhaps you already knew this, but for those who didn't: ESM supports things like `top level await`. This means that before a module provides its exports, you can do something asynchronous in it. For example, make a request and get a response. What does this give us? That's right.

Create a loader module (load.js):
```js
let result = null;

const path = import.meta.url.split('#')[1];

if (path) {
  let content;
  if (typeof window === 'object') {
    content = await (await fetch(path)).text();
  } else {
    const fs = (await import('fs')).default;
    content = fs.readFileSync(path).toString();
  }
  result = path.includes('.json') ? JSON.parse(content) : content;
}

export default result;
```

Load your assets through the proxy module:
```js
import html from './load.js?#./index.html';
import doc from './load.js?#./doc.md';
import css from './load.js?#./styles.css';
import svg from './load.js?#./image.svg';
import data from './load.js?#./data.json';

console.log(html, doc, css, svg, data);
```

This is a very simplified example, but it's already isomorphic. I don't think anyone would seriously use this for loading modules, but the principle itself, in my opinion, is at least interesting and stimulates the engineering imagination.

An important detail: each module's exports are cached. And this cache is tied to the module's address. So if your imported files change dynamically, the paths to modules must change too. This means you can only use dynamic imports. Remembering the support for `top level await`, we won't consider this a big problem.

## Summary.

You might ask me: is there any practical value in all this? After all, you can just use `fs.readFileSync` or `fetch`... I'll probably dodge a direct answer and remind you: if the stars are lit, it means someone needs them.

Hope it was fun. I hope even more that you learned something useful. Use more ESM and less CJS. Peace and good vibes to everyone.