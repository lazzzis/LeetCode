
// Definition for undirected graph.
function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}


/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  if (graph == null) return null;
  function helper (graph) {
    if (nodes[graph.label] == null) nodes[graph.label] = new UndirectedGraphNode(graph.label)
    const cur = nodes[graph.label]
    for (const next of graph.neighbors) {
      if (nodes[next.label] == null) {
        cur.push(helper(next))
      } else {
        cur.push(nodes[next.label])
      }
    }
    return cur
  }
  const nodes = {}
  return helper(graph)
};
