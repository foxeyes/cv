import { getPage } from '../getPage.js';

export default await getPage({
  BASE_PATH: '../',
  TITLE: 'Alex Matiyasevich - Social',
  HEADER_CONTENT: 'Social',
  MD_URL: './src/static-pages/social/index.md',
});