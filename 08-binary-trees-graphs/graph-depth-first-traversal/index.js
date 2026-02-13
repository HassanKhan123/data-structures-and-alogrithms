import { Graph } from "../graph/index.js";

const depthFirstTraversal = (graph, startingVertex) => {
  if (!graph.adjacencyList[startingVertex]) {
    return [];
  }
  const visited = {};
  const stack = [];
  const result = [];

  stack.push(startingVertex);
  visited[startingVertex] = true;

  while (stack.length) {
    const currentVertex = stack.pop();
    result.push(currentVertex);

    graph.adjacencyList[currentVertex].forEach((neighbor) => {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        stack.push(neighbor);
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

const res = depthFirstTraversal(graph, "A");
console.log(res);
