//@ 시작 태그 앞
function insertBefore(node,text){
  if(typeof node === 'string') node = getNode(node);
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertBefore 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('beforebegin',text);
}

//@ 태그 안에 첫 번째 자식 요소 앞
function insertFirst(node,text){
  if(typeof node === 'string') node = getNode(node);
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertFirst 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('afterbegin',text);
}

//@ 마지막 자식 요소 뒤
function insertLast(node,text){
  if(typeof node === 'string') node = getNode(node);
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertLast 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('beforeend',text);
}

//@ 종료 태그 뒤
function insertAfter(node,text){
  if(typeof node === 'string') node = getNode(node);
  
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new ReferenceError('insertAfter 함수의 첫 번째 인수는 ELEMENT NODE 이어야 합니다.');
  }
  node.insertAdjacentHTML('afterend',text);
}