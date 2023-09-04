const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

function solution(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if(5*j+3*i === n) return j+i;
    }
  }
  return -1;
}

console.log(solution(input));
