function solution(n) {
  // n을 3진수로 바꾼다
  // n을 한자리씩 떼네서 배열에 넣는다
  // 역순으로 뒤집는다
  // 다시 합쳐서 반환한다.
  let r3str = '';
  let ans=0;
  while (n > 0) {
    r3str = (n % 3) + r3str;
    n = Math.floor(n / 3);
  }
  r3str = r3str.split('').reverse();
  //어차피 쪼개서 연산해야하니 굳이 합치지 않는다
  //잘라내어 렝스를 구하고 길이가 4일경우 0 1 2 3 3의3제곱x0인덱스 값 3의2제곱x1인덱스값
  //3의 렝스-1x[0]값 3의 렝스-2x[1]값...
  for (let i = 0; i < r3str.length; i++) {
    ans+=Math.pow(3,r3str.length-i-1)*Number(r3str[i])
  }
  return ans;
}