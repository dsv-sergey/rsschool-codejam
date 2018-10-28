/**
 * @param
 * @returns
 */
module.exports = function recursion(tree) {
  const arrTree = [];
  function bst(node, height = 0) {
    (!arrTree[height]) ? arrTree.push([]) : null;
    arrTree[height].push(node.value);
    (node.left) ? bst(node.left, height + 1) : null;
    (node.right) ? bst(node.right, height + 1) : null;
    return arrTree;
  }
  return bst(tree);
};
