function solution(n, m) {
  let min = 1;
  let max = m;

  while(true) {
    if (max % m === 0 && max % n === 0)
      break;
    max++;
  }
  for (let i = 2; i <= n; i++)
    if (n % i === 0 && m % i === 0)
      min = i;

  return [min, max];
}