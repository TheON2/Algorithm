function solution(x) {
  let result =0;
  String(x).split('').map(Number).forEach((a)=>{result+=a})
  return x%result === 0 ? true : false
}