//정수 배열 numbers가 주어집니다.
// numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를
// 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

function solution(lottos, win_nums) {
  //받은 로또와 당첨 로또를 비교하여 일치하는 녀석들을 먼저 빼버리고
  //반환된 녀석들의 숫자를 카운팅하며 수중의 당첨번호 배열에 저장
  //랜덤번호의 당첨숫자에 따른 최고등수,최소등수를 배열로 반환
  let randNum=0;
  const arr1=lottos.filter(a => win_nums.includes(a));//알고있는 수중 당첨숫자
  lottos.forEach((a)=>{if(a===0)randNum++})
  //랜덤숫자가 없으면서 당첨이 하나도 안됬을때  
  if(arr1.length===0 && randNum===0) return [6,6]
  if(7-arr1.length>=6) return [7-(arr1.length+randNum),6]
  else return [7-(arr1.length+randNum),7-arr1.length]
}


console.log(solution([1, 2, 3, 4, 5, 6],[7, 8, 9, 10, 11, 12]))
