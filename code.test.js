
const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

const a = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3],
];

const b = [
  [4],
  [4 , 2], 
  [1 , 3],
  [2 , 4],
  [0 , 1 , 3],
];

const c = [
  [1],
  [0, 2],
  [1, 3, 4],
  [2],
  [2, 5, 6],
  [4],
  [4],
];

const d = [
  [3],
  [3],
  [4, 6],
  [0, 1, 4],
  [2, 3, 5],
  [4],
  [2],
];

const e = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3, 0],
];

jsc.assert(
  jsc.forall(jsc.constant(a), jsc.constant(b), function (graphA, graphB) {
    return JSON.stringify(are_isomorphic(graphA, graphB)) === JSON.stringify(true);
  })
);

jsc.assert(
  jsc.forall(jsc.constant(c), jsc.constant(d), function (graphC, graphD) {
    return JSON.stringify(are_isomorphic(graphC, graphD)) === JSON.stringify(true);
  })
);

jsc.assert(
  jsc.forall(jsc.constant(a), jsc.constant(c), function (graphA, graphC) {
    return JSON.stringify(are_isomorphic(graphA, graphC)) === JSON.stringify(false);
  })
);

jsc.assert(
  jsc.forall(jsc.constant(a), jsc.constant(e), function (graphA, graphE) {
    return JSON.stringify(are_isomorphic(graphA, graphE)) === JSON.stringify(false);
  })
);
console.log('all tests passed');