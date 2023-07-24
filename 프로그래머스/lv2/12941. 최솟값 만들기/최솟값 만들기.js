function solution(A,B){
  //그리디 알고리즘을 활용한다.
  //각 항목에서 최대한 큰값과 작은값을 매칭하여 곱해주는 경로를 찾는다.
  
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  //한쪽은 오름차순 한쪽은 내림차순

  let answer = 0;
  for(let i=0; i<A.length; i++) {
    answer += A[i] * B[i];
  }

  return answer;
}
