function solution(n) {
  let countOfOnes = n.toString(2).split('').filter(x => x === '1').length;
  
  while (true) {
    n++;
    if (n.toString(2).split('').filter(x => x === '1').length === countOfOnes) {
      return n;
    }
  }
}
// n을 2진수로 변환한후 포함된 1의 갯수를 카운팅
// 그다음으로 10진수에서 큰 수를  2진수로 변환
// n과 해당 방식으로 가진 1의 갯수가 같은 10진수가 나올때까지 반복
// 값을 리턴