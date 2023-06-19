function solution(left, right) {
  let ans=0;
  for (let i = left; i <= right; i++) {
    let cnt1=0;
    for (let j = 1; j <=i ; j++) {
      if(i%j===0)cnt1++
    }
    ans = cnt1%2!==0 ? ans-i : ans+i
  }
  return ans;
}