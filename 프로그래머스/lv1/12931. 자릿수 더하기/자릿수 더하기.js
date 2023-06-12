function solution(n) {
  let ans = 0;
  while(n > 0) {
    ans += n%10;
    n = Math.floor(n/10);
  }
  return ans;
}