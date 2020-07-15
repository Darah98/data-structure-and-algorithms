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

class Graph{
  constructor(){
    this._adjacencyList= new Map();
  }
  addNode(vertex){
    this._adjacencyList.set(vertex, []);
    console.log(vertex.value);
  }
  addEdge(startVertex, endVertex, weight){
    if(!this._adjacencyList.has(startVertex) || !this._adjacencyList.has(endVertex)){
      return 'Cannot add edge!';
    } else {
      let adjacencies = this._adjacencyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }
  getNodes(){
    for( let [vertex, edge] of this._adjacencyList.entries()){
      console.log('vertex', vertex.value, '-> edge(s)', edge);
    }
  }
  getNeighbours(vertex){
    if(this._adjacencyList.has(vertex)){
      let edgeArr= this._adjacencyList.get(vertex);
      console.log('vertex:', vertex)
      for(let i in edgeArr){
        console.log('edge(s)', edgeArr[i].vertex.value, '-> weight', edgeArr[i].weight);
      }
    }
  }
  size(){
    const size= this._adjacencyList.size;
    console.log('graph size:', size);
  }
}
const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
graph.addNode(two);
graph.addNode(six);
graph.addNode(ten);
graph.addEdge(two, six);
graph.addEdge(six, two);
graph.addEdge(ten, two);
graph.addEdge(ten, six);
// graph.size();
// graph.getNodes();
// graph.getNeighbours(ten);
