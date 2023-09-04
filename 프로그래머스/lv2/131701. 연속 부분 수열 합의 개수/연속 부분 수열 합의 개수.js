function solution(elements) {
  const set = new Set(); 
  const n = elements.length; 
  
  // elements 배열에 시작위치를 알려주는 for문
  for(let i=0; i<n; i++){
    // 합계 저장
    let sum = 0;
    // 연속 부분 수열 시작위치부터 i+n까지 순회
    // ex) 0에서 시작하면 4까지, 4에서 시작하면 8까지
    for(let j=i; j<i+n; j++){
      // % 인덱스를 순환하면서 sum에 더함
      sum += elements[j%n];
      set.add(sum)
    }

  }
  return set.size
}