export const invisibleElement = (node) => {
  node.hidden = true;
};
export const visibleElement = (node) => {
  node.hidden = false;
};

export const isVisibleState = (node, prop) => node[prop] === 'hidden' ? true : false;
