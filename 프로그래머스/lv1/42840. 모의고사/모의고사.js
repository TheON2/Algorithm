function solution(answers) {
  const a = [1,2,3,4,5];
  const b = [2,1,2,3,2,4,2,5];
  const c = [3,3,1,1,2,2,4,4,5,5];
  let scoreA=0;
  let scoreB=0;
  let scoreC=0;

  for (let i = 0; i < answers.length; i++) {
    //ans의 길이에 관계없이 패턴 복제를 위해 인덱스를 각자 배열의 length로 나눈것의 나머지로 넣어준다.
    if(a[i%a.length]===answers[i])scoreA++;
    if(b[i%b.length]===answers[i])scoreB++;
    if(c[i%c.length]===answers[i])scoreC++;
  }
  let score = [scoreA,scoreB,scoreC];
  console.log(score)
  let ans = []
  for (let i = 0; i < score.length; i++) {
    if(score[i]===Math.max(...score)) ans.push(i+1)
  }
  return ans
}