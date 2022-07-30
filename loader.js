import { URL } from 'url';
import { readFile } from 'fs/promises';

/**
 * 
 * @param {String} url 
 * @param {*} context 
 * @param {*} defaultLoad 
 * @returns 
 */
export async function load(url, context, defaultLoad) {
  let checkUrl = url.split('?')[0];
  if (checkUrl.endsWith('.css') || checkUrl.endsWith('.html') || checkUrl.endsWith('.htm') || checkUrl.endsWith('.svg')) {
    const content = await readFile(new URL(url));
    return {
      format: 'module',
      source: `export default ${JSON.stringify(content.toString())};`,
      shortCircuit: true,
      caches: false,
    };
  }
  return defaultLoad(url, context, defaultLoad);
}