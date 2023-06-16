function solution(s) {
  s.splice(s.indexOf(Math.min(...s)), 1);
  return s.length>=1 ? s : [-1]
}