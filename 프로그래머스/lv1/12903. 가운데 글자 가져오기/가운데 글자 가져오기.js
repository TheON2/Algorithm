function solution(s) {
  return s.length%2 === 0 ? s[s.length/2-1]+s[s.length/2] : s[Math.ceil(s.length/2)-1]
}