const isMatchNode = (node, value, ignoreCase) => {
  const [targetValue, requiredValue] = [
    node.title,
    value,
  ].map((v) => (ignoreCase && v.toLowerCase()) || v);

  return targetValue.includes(requiredValue);
};

export default function treeNodesFilter(data, value, ignoreCase = true) {
  if (!data || !value) {
    return data;
  }

  const findMatchTreeNode = (nodes) => {
    if (!nodes) {
      return nodes;
    }

    const matchNodes = [];
    nodes.forEach(({
      data: childData, ...node
    }) => {
      const match = isMatchNode(node, value, ignoreCase);
      const matchChildNodes = findMatchTreeNode(childData);
      if (!match && !matchChildNodes) return;

      const newNode = {
        ...node,
        highlight: match,
      };
      if (matchChildNodes) {
        newNode.data = matchChildNodes;
      }

      matchNodes.push(newNode);
    });

    return matchNodes.length ? matchNodes : null;
  };

  return findMatchTreeNode(data) || [];
}
