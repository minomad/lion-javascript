function getNode(node){
  
  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.')
  }
  
  return document.querySelector(node);
}

// 전체 노드 요소 선택

function getNodes(node){

  if(typeof node !== 'string'){
    throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.')
  }

  return document.querySelectorAll(node);
}