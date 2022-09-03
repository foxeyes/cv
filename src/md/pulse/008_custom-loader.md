```json
{
  "date": "30-07-2022",
  "title": "Custom node ESM loader",
  "summary": "Simple approach to load your text assets into your code as JS-modules.",
  "image": "https://ucarecdn.com/9e21204c-9061-41e2-a6f4-bc7c5101d767/-/resize/200x200/-/format/auto/",
  "link": ""
}
```
# Custom node ESM loader (hook)

Sometimes you need to create some text-based assets (CSS, HTML, or SVG files) for your node.js project and then to use them in your JavaScript runtime as a strings. Of course, you can use something like `fs.readFileSync()` for that... But it's little bit bulky and you cannot bundle the source this way. Or you can wrap your assests into the JavaScript template literal and export them as a standard JavaScript modules... But it becomes painful to edit that kind of files without valuable support in your IDE. So, what are we gonna do?
\
\
First of all, let's create our custom ESM loader (loader.js):
```js
import { URL } from 'url';
import { readFile } from 'fs/promises';

export async function load(url, context, defaultLoad) {
  const checkUrl = url.split('?')[0]; // Cutting the possible search parameters
  if (checkUrl.endsWith('.css') 
      || checkUrl.endsWith('.html') 
      || checkUrl.endsWith('.htm') 
      || checkUrl.endsWith('.svg')) {
    const content = await readFile(new URL(url));
    return {
      format: 'module',
      source: `export default ${JSON.stringify(content.toString())};`,
      shortCircuit: true,
    };
  }
  return defaultLoad(url, context, defaultLoad);
}
```

Use the `--loader` parameter to start:
```bash
node --loader ./loader.js ./my-app.js
```

Then you can use the direct imports for your CSS, HTML, and SVG files, just like you, possibly, did that earlier with the Webpack loaders:
```js
import html from './index.html';
import css from './styles.css';
import svg from './image.svg';
```

> This node.js feature is still experimental, use it with a caution. Provided example is tested in node 18.x