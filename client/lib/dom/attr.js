//# get 함수
function getAttr(node, prop) {
  //넘어온 대상이 문자인지 체크하고 element node로 변경

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

//# set함수
function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!

  if (typeof prop !== 'string') {
    throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.');
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

//@  작은 함수를 만들고 보다 큰 함수로

function attr(node, prop, value) {
  if (!value) {
    return getAttr(node, prop);
  } else {
    setAttr(node, prop, value);
  }

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}

const arrowAttr = (node, prop, value) => (!value ? getAttr(node, prop) : setAttr(node, prop, value));
