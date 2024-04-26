function are_isomorphic(graph1, graph2) {

  if (graph1.length !== graph2.length) {
    return false;
  }
  //console.log(graph1.length);
  //console.log(graph2.length);

  const degree1 = calculateDegrees(graph1);
  //console.log(degree1);
  const degree2 = calculateDegrees(graph2);
  //console.log(degree2);
  if (!compareArrays(degree1, degree2)) {
    return false;
  }

  const mapping = {};
  return isomorphicHelper(graph1, graph2, mapping);
}

function isomorphicHelper(graph1, graph2, mapping) {
  if (Object.keys(mapping).length === graph1.length) {
    for (const vertex in mapping) {
      const neighbors1 = graph1[vertex];
      //console.log('neighbor1: ' +neighbors1);
      const mappedNeighbor = mapping[vertex];
      //console.log('neighbor2: ' +graph2[mappedNeighbor]);
      if (!compareNeighbors(neighbors1, graph2[mappedNeighbor], mapping)) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < graph1.length; i++) {
    if (!mapping.hasOwnProperty(i)) {
      const vertex1 = i;
      const degree1 = graph1[vertex1].length;

      for (let j = 0; j < graph2.length; j++) {
        if (graph2[j].length === degree1 && !Object.values(mapping).includes(j)) {
          const vertex2 = j;
          mapping[vertex1] = vertex2;
          //console.log(mapping);

          if (isomorphicHelper(graph1, graph2, mapping)) {
            return true;
          }
          delete mapping[vertex1];
          break;
        }
      }
    }
  }

  return false;
}


function calculateDegrees(graph) {
  const degrees = [];
  for (let i = 0; i < graph.length; i++) {
    degrees.push(graph[i].length);
  }
  return degrees;
}

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1.sort();
  //console.log(arr1);
  arr2.sort();
  //console.log(arr2);
  const equals = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);
    if (!equals(arr1, arr2)) {
      return false;
    }
  return true;
}

function compareNeighbors(neighbors1, neighbors2, mapping) {
  if (neighbors1.length !== neighbors2.length) {
    return false;
  }
  for (const neighbor of neighbors1) {
    const mappedNeighbor = mapping[neighbor];
    if (!neighbors2.includes(mappedNeighbor)) {
      return false;
    }
  }
  return true;
}

/*graph1 = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3],
]

graph2 = [
  [4],
  [4 , 2], 
  [1 , 3],
  [2 , 4],
  [0 , 1 , 3],
]

result = are_isomorphic(graph1, graph2);
console.log(result);

graph3 = [
  [1],
  [0, 2],
  [1, 3, 4],
  [2],
  [2, 5, 6],
  [4],
  [4],
]

graph4 = [
  [3],
  [3],
  [4, 6],
  [0, 1, 4],
  [2, 3, 5],
  [4],
  [2],
]

result2 = are_isomorphic(graph3, graph4);
console.log(result2);

graph5 = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3],
]

graph6 = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3],
  [],
]

result3 = are_isomorphic(graph5, graph6);
console.log(result3);

graph7 = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3],
];

graph8 = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3, 0],
]

result4 = are_isomorphic(graph7, graph8);
console.log(result4);*/