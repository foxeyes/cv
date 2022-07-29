/**
 * 
 * @param {String} path 
 * @returns 
 */
 export async function importFresh(path) {
  let cacheDrop = '?' + Date.now();
  return (await import(path + cacheDrop)).default;
}