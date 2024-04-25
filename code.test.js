
const fs = require('fs');
const jsc = require('jsverify');
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

const test1 = 
  jsc.forall(jsc.constant(a), jsc.constant(b), function (a, b) {
    return JSON.stringify(are_isomorphic(a, b)) === JSON.stringify(true);
  });
  jsc.assert(test1);

const test2 =
  jsc.forall(jsc.constant(c), jsc.constant(d), function (c, d) {
    return JSON.stringify(are_isomorphic(c, d)) === JSON.stringify(true);
  });
  jsc.assert(test2);

const test3 =
  jsc.forall(jsc.constant(a), jsc.constant(c), function (a, c) {
    return JSON.stringify(are_isomorphic(a, c)) === JSON.stringify(false);
  });
  jsc.assert(test3);

const test4 =
  jsc.forall(jsc.constant(a), jsc.constant(e), function (a, e) {
    return JSON.stringify(are_isomorphic(a, e)) === JSON.stringify(false);
  });
  jsc.assert(test4);