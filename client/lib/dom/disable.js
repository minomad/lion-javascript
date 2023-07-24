export const disableElement = (node) => {
  node.disabled = true;
};
export const enableElement = (node) => {
  node.disabled = false;
};

export const isVisibleState = (node, prop) => (node[prop] === 'hidden' ? true : false);
