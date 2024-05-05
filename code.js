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

  //const mapping = {};
  let mapping = mapPerms(graph1);
  for (let i = 0; i < mapping.length; i++) {
    if (isomorphicHelper(graph1, graph2, mapping[i])) {
      return true;
  }
}
  return false;
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
}

function mapPerms(graph1) {
  const permutations = [];
  const used = new Array(graph1.length).fill(false);

  function backtrack(i, mapping) {
    if (i === graph1.length) {
      permutations.push(Object.assign({}, mapping));
      return;
    }

    for (let j = 0; j < graph1.length; j++) {
      if (!used[j]) {
        used[j] = true;
        mapping[i] = j;
        backtrack(i + 1, mapping);
        //console.log(mapping);
        used[j] = false;
      }
    }
  }

  backtrack(0, {});
  return permutations;
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
    //console.log('neighbor' +neighbor);
    const mappedNeighbor = mapping[neighbor];
    //console.log('mappedneighbor' +mappedNeighbor);
    if (!neighbors2.includes(mappedNeighbor)) {
      return false;
    }
  }
  return true;
}
