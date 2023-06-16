function solution(a, b) {
  const day = ['THU','FRI','SAT','SUN','MON','TUE','WED']
  const month =[0,31,29,31,30,31,30,31,31,30,31,30,31]
  let sumDay=0;
  for (let i = 0; i < a; i++) {
    sumDay+=month[i];
  }
  sumDay+=b;
  return day[sumDay%7]
}