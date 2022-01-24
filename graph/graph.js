class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(key = '') {
    if (!this.adjacencyList[key]) {
      this.adjacencyList[key] = []
    }
  }

  checkVertexIsHasEdge = (node1 = '', node2 = '') => {
    const find = this.adjacencyList[node1].find((item) => item === node2);
    return find ? true : false;
  }

  msgNotFound(name = '') {
    console.log(`Vertex ${name} not found, please add vertex first`)
  }

  msgVertexIsHasEdge(node1 = '', node2 = '') {
    console.log(`Vertex ${node1} is already has vertex ${node2}`)
  }

  msgVertexIsNotHaveEdge(node1 = '', node2 = '') {
    console.log(`Vertex ${node1} do not have vertex ${node2}`)
  }

  addEdge(vertex1 = '', vertex2 = '') {
    if (!this.adjacencyList[vertex1]) {
      this.msgNotFound(vertex1);
      return;
    }
    if (!this.adjacencyList[vertex2]) {
      this.msgNotFound(vertex2);
      return;
    }

    if (this.checkVertexIsHasEdge(vertex1, vertex2)) {
      this.msgVertexIsHasEdge(vertex1, vertex2)
      return;
    } 
    if (this.checkVertexIsHasEdge(vertex2, vertex1)) {
      this.msgVertexIsHasEdge(vertex2, vertex1)
      return;
    }

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.msgNotFound(vertex1);
      return;
    }
    if (!this.adjacencyList[vertex2]) {
      this.msgNotFound(vertex2);
      return;
    }

    if (!this.checkVertexIsHasEdge(vertex1, vertex2)) {
      this.msgVertexIsNotHaveEdge(vertex1, vertex2)
      return;
    } 
    if (!this.checkVertexIsHasEdge(vertex2, vertex1)) {
      this.msgVertexIsNotHaveEdge(vertex2, vertex1)
      return;
    }

    let index = this.adjacencyList[vertex1].findIndex((item) => item === vertex2 );
    this.adjacencyList[vertex1].splice(index, 1);
    index = this.adjacencyList[vertex2].findIndex((item) => item === vertex1);
    this.adjacencyList[vertex2].splice(index, 1);
  }

  removeVertex(vertex = '') {
    if (!this.adjacencyList[vertex]) {
      this.msgNotFound(vertex);
      return;
    }

    for(let index in this.adjacencyList) {
      if (this.adjacencyList[index]) {
        if (index === vertex) continue;
        for(let i = 0; i < this.adjacencyList[index].length; i ++) {
          const targetVertex = this.adjacencyList[index][i]
          if (targetVertex === vertex) {
            this.adjacencyList[index].splice(i, 1);
            break;
          }
        }
      }
    }

    delete this.adjacencyList[vertex];
  }
} 

const graph = new Graph();

// graph.addVertex('semarang')
// graph.addVertex('salatiga')
// graph.addVertex('jakarta')

// graph.addEdge('semarang', 'salatiga');
// graph.addEdge('semarang', 'jakarta');

// console.log('graph after add edge', JSON.stringify(graph.adjacencyList, null, 2))

// graph.removeEdge('semarang', 'salatiga');

// console.log('graph after remove edge', JSON.stringify(graph.adjacencyList, null, 2))

// graph.addEdge('semarang', 'salatiga');

// console.log('graph after add edge', JSON.stringify(graph.adjacencyList, null, 2))

// graph.removeVertex('salatiga');

// console.log('graph after remove vertex', JSON.stringify(graph.adjacencyList, null, 2))

graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')

graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('B', 'D')
graph.addEdge('C', 'E')
graph.addEdge('D', 'E')
graph.addEdge('D', 'F')
graph.addEdge('E', 'F')

