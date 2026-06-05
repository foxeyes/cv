import { getPage } from '../getPage.js';

export default await getPage({
  BASE_PATH: '../',
  TITLE: 'Alex Matiasevich - Downloads',
  HEADER_CONTENT: 'Downloads',
  MD_URL: './src/static-pages/downloads/index.md',
});