function solution(a, b) {
  let ans = 0 ;
  for (let i = 0; i < a.length; i++) {
    ans+=a[i]*b[i]
  }
  return ans;
}