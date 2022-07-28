import fs from 'fs';
import { build } from './build.js';

fs.watch('./src', {
  recursive: true,
}, () => {
  build();
});