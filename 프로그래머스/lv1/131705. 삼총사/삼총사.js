function solution(number) {
  let ans=0;
  for (let i = 0; i < number.length; i++) {
    for (let j = i+1; j < number.length; j++) {
      for (let k = j+1; k < number.length; k++) {
        if(i!==j && j!==k && i!==k){
          if(number[i]+number[j]+number[k]===0)ans++
        }
      }
    }
  }
  return ans;
}