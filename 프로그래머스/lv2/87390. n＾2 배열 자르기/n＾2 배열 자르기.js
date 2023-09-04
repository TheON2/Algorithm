function solution(n, left, right) {
  const answer = [];  // 결과를 저장할 배열 초기화

  // left에서 right까지 순회
  for (let i = left; i <= right; i++) {
    // 현재 인덱스 i를 n으로 나누어 행(row) 값을 구함
    const row = Math.floor(i / n);
    // 현재 인덱스 i를 n으로 나눈 나머지를 통해 열(col) 값을 구함
    const col = i % n;

    // 행과 열 값 중 큰 값을 answer에 추가
    // 문제의 규칙에 따라 +1을 해주어야 함
    answer.push(Math.max(row, col) + 1);
  }

  return answer;  // 결과 배열 반환
}