function solution(storey) {
  let answer = 0;
  const str = storey.toString();
  let help = 0;
    
  for (let i = str.length - 1; i >= 0; i--) {
    const num = Number(str[i]) + help;
    help = 0;
    if (num > 5) {
      answer += 10 - num;
      help = 1;
    } else if (num === 5 && i > 0) {
      if (Number(str[i - 1]) >= 5) {
        answer += num;
        help = 1;
      } else {
        answer += num;
      }
    } else {
      answer += num;
    }
  }

  if (help > 0) answer += help;
  return answer;
}