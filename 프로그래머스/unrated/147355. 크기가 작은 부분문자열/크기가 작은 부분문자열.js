function solution(t, p) {
  let compare = []
  let len = p.length
  for (let i = 0; i <= t.length-len; i++) {
    compare.push(t.slice(i,i+len))
  }
  return compare.filter((a)=>Number(a)<=Number(p)).length
}