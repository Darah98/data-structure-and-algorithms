'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    this._adjacencyList.set(vertex, []);
    return vertex;
  }

  addDirectedEdge(startVertex, endVertex, weight) {
    if (!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)) {
      console.log('Connot create edge with missing vertex');
    } else {
      const edgeStartVertex = this._adjacencyList.get(startVertex);
      edgeStartVertex.push(new Edge(endVertex, weight));
    }
  }

  getNodes() {
    return this._adjacencyList;
  }

  getNeighbors(vertex) {
    if (this._adjacencyList.has(vertex)) {
      return this._adjacencyList.get(vertex);
    }else{
      console.log('Vertex not found');
    }
  }

  size() {
    return this._adjacencyList.size;
  }

  breadthFirst(vertex){
    const queue = []; 
    const vistedNodes = new Set(); 
    queue.push(vertex);
    vistedNodes.add(vertex);
    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if(vistedNodes.has(neighborNode)) {
          continue;
        } else {
          vistedNodes.add(neighborNode);
        }
        queue.push(neighborNode);
      }
    }
    console.log({vistedNodes});
    return vistedNodes;
  }

}

const graph = new Graph();

const A = new Vertex('A');
const B = new Vertex('B');
const C = new Vertex('C');
const G = new Vertex('G');
const E = new Vertex('E');
const D = new Vertex('D');
const F = new Vertex('F');
const H = new Vertex('H');

graph.addVertex(A);
graph.addVertex(B);
graph.addVertex(C);
graph.addVertex(D);
graph.addVertex(E);
graph.addVertex(F);
graph.addVertex(G);
graph.addVertex(H);

graph.addDirectedEdge(A, B);
graph.addDirectedEdge(A, D);
graph.addDirectedEdge(B, A);
graph.addDirectedEdge(B, C);
graph.addDirectedEdge(B, D);
graph.addDirectedEdge(C, B);
graph.addDirectedEdge(C, G);
graph.addDirectedEdge(G, C);
graph.addDirectedEdge(D, A);
graph.addDirectedEdge(D, B);
graph.addDirectedEdge(D, E);
graph.addDirectedEdge(D, H);
graph.addDirectedEdge(D, F);
graph.addDirectedEdge(E, D);
graph.addDirectedEdge(H, D);
graph.addDirectedEdge(H, F);
graph.addDirectedEdge(F, D);
graph.addDirectedEdge(F, H);

function depthFirst(list){
  let vertexArr= [];
  let resultArr= [];
  for(let vertex of list){
    vertexArr.push(vertex);
  }
  resultArr.push(vertexArr[0][0].value);
  function traversal(vertex){
    const firstNeighbors = list.get(vertex);
    for(let i=0; i<firstNeighbors.length; i++){
      if(!resultArr.includes(firstNeighbors[i].vertex.value)){resultArr.push(firstNeighbors[i].vertex.value)
        traversal(firstNeighbors[i].vertex)
      }
    }
  }
  traversal(vertexArr[0][0]);
  console.log(resultArr);
}
depthFirst(graph._adjacencyList);
