function solution(n) {
  let ans = [];
  while(n > 0) {
    ans.push(n%10);
    n = Math.floor(n/10);
  }
  return ans;
}