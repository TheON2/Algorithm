function solution(num_str) {
  let result = 0;
  num_str.split("").forEach((n)=>result+=Number(n))
  return result;
}