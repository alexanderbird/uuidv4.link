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

function setUUID(element) {
  element.innerHTML = v4();
  selectAll(element);
}

window.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('#uuid');
  setUUID(element);
  setInterval(() => setUUID(element), 5 * 1000);
  Array.from(document.querySelectorAll('.footer code')).forEach(code => {
    code.addEventListener('click', () => selectAll(code));
  });
});
