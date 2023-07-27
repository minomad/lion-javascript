import { deleteStorage, getNode, getStorage, setStorage } from './lib/index.js';

const textField = getNode('#textField');
const clearBtn = getNode('button');

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

function init() {
  getStorage('text').then((res) => {
    textField.value = res;
  });
}

function del() {
  
}

textField.addEventListener('input', handleTextField);
window.addEventListener('DOMContentLoaded', init);
clearBtn.addEventListener('click', del)