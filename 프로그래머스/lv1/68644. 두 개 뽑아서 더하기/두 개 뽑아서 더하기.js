function solution(numbers) {
  let ans = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if(i!==j)
      ans.add(numbers[i]+numbers[j])
    }
  }
  return [...ans].sort((a,b)=>a-b);
}