import { Graph } from "../graph/index.js";

const breadthFirstTraversal = (graph, startingVertex) => {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }
  const visited = new Set();
  const queue = [];
  const result = [];

  queue.push(startingVertex);
  visited.add(startingVertex);

  while (queue.length) {
    const currentVertex = queue.shift();
    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    });
  }

  return result;
};

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

graph.printAdjacencyList();

const res = breadthFirstTraversal(graph, "A");
console.log(res);
