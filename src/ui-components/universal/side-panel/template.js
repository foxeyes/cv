import { icon } from '../../../icons/icon.js';

const menuData = [
  {
    name: 'CV',
    path: './',
  },
  {
    name: 'Publications',
    path: './publications/',
  },
  {
    name: 'Social',
    path: './social/',
  },
  {
    name: 'Gallery',
    path: './gallery/',
  },
  {
    name: 'Downloads',
    path: './downloads/',
  },
];

let links = menuData.map(
  item => /*html*/ `<a href="${item.path}">${icon('arrow_forward')} ${item.name}</a>`
).join('');

export default /*html*/ `
${links}<div collapsed-btn>${icon('chevron_right')}</div>
`;