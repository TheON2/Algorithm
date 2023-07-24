function solution(s) {
  let transformCount = 0;
  //변환 시도 횟수
  let removedZeroCount = 0;
  //제거한 0의 갯수
  while (s !== "1") {
    let zeroCount = (s.match(/0/g) || []).length;
    s = s.replace(/0/g, '');
    //정규식으로 0의 갯수를 찾아낸후 0의 요소를 배열에서 제거한다
    removedZeroCount += zeroCount;
    //제거한 숫자만큼 카운팅
    s = s.length.toString(2);
    //2진법으로 문자열을 변환
    transformCount++;
    //변환 횟수 카운팅
  }

  return [transformCount, removedZeroCount];
}
