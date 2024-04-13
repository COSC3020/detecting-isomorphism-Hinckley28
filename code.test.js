const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');

a = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3],
]

b = [
  [4],
  [4 , 2], 
  [1 , 3],
  [2 , 4],
  [0 , 1 , 3],
]

c = [
  [1],
  [0, 2],
  [1, 3, 4],
  [2],
  [2, 5, 6],
  [4],
  [4],
]

d = [
  [3],
  [3],
  [4, 6],
  [0, 1, 4],
  [2, 3, 5],
  [4],
  [2],
]

e = [
  [1 , 2],
  [0 , 3], 
  [0 , 3],
  [1 , 2 , 4],
  [3, 0],
]


JSON.stringify(are_isomorphic(a, b)) == true;

JSON.stringify(are_isomorphic(c, d)) == true;

JSON.stringify(are_isomorphic(a, c)) == false;

JSON.stringify(are_isomorphic(a, e)) == false;


