function solution(s) {
  const num = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  for(let i=0; i<10; i++) s = s.replaceAll(num[i], i.toString());
  return Number(s);
}