function solution(num_list) {
  let a = 1;
  let b = 0;
  num_list.forEach((n)=>a*=n)
  num_list.forEach((n)=>b+=n)
  return a < b*b ? 1 : 0
}