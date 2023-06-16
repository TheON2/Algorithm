function solution(n) {
  let ans = ``
  for (let i = 0; i < n; i++) {
    if(i%2===1)ans+='박'
    else ans+='수'
  }
  return ans;
}
