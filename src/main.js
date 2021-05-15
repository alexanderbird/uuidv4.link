import { v4 } from 'uuid';

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#uuid').innerHTML = v4();
});
