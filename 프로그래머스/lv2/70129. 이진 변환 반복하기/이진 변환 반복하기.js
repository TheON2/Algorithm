function solution(s) {
  let transformCount = 0;
  let removedZeroCount = 0;

  while (s !== "1") {
    let zeroCount = (s.match(/0/g) || []).length;
    s = s.replace(/0/g, '');
    removedZeroCount += zeroCount;
    s = s.length.toString(2);
    transformCount++;
  }

  return [transformCount, removedZeroCount];
}