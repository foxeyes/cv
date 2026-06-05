import { getPage } from '../getPage.js';

export default await getPage({
  BASE_PATH: '../',
  TITLE: 'Alex Matiasevich - Social',
  HEADER_CONTENT: 'Social',
  MD_URL: './src/static-pages/social/index.md',
});