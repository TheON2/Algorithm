function solution(num) {
  if(num===1)return 0;
  let cnt = 0;
  while(1){
    cnt++;
    if(num%2 === 0) num/=2
    else { num=(num * 3)+1 }
    if(num===1) return cnt;
    if(cnt===500) return -1;
  }
}