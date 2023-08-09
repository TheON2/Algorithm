function solution(n) {
  let count = 0;
  
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    for (let j = i; j <= n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      }
      if (sum > n) {
        break;
      }
    }
  }
    // 이중포문을 선언하여 n이하의 정수까지 반복하게 하고
    // 조건에 맞는 경우에만 count
    // sum이 n을 초과하면 break;
  
  return count;
}
