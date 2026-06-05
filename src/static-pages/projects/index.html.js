import { getPage } from '../getPage.js';

export default await getPage({
  BASE_PATH: '../',
  TITLE: 'Alex Matiasevich - Projects',
  HEADER_CONTENT: 'Projects',
  MD_URL: './src/static-pages/projects/index.md',
});