import { v4 } from 'uuid';

function selectAll(element) {
  const selection = window.getSelection();
  if (selection.toString() == '') {
    setTimeout(function(){
      const range = document.createRange();
      range.selectNodeContents(element);
      selection.removeAllRanges();
      selection.addRange(range);
    });
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#uuid');
  element.innerHTML = v4();
  selectAll(element);
  setTimeout(() => {
    element.innerHTML = v4();
    selectAll(element);
  }, 50 * 1000);
});
