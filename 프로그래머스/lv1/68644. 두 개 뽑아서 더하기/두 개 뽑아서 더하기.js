function solution(numbers) {
    //중복 값을 받지 않는 Set 인스턴스 선언
    //인덱스가 겹치지 않을때만 두수의 합을 add한다
    //구조분해할당으로 Set값들을 꺼낸 배열을 만들고
    //정렬하여 반환
  let ans = new Set();
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if(i!==j)
      ans.add(numbers[i]+numbers[j])
    }
  }
  return [...ans].sort((a,b)=>a-b);
}