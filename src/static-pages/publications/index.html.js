import { getPage } from '../getPage.js';

export default await getPage({
  BASE_PATH: '../',
  TITLE: 'Alex Matiasevich - Publications',
  HEADER_CONTENT: 'Publications',
  MD_URL: './src/static-pages/publications/index.md',
});