function solution(a, b) {
  let result =""
  return Number(result+a+b) >= Number(result +b+a) ?
    Number(result+a+b) : Number(result +b+a)
}