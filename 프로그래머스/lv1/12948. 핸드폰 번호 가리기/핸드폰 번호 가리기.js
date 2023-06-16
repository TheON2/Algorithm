function solution(phone_number) {
  let split_number = phone_number.split('')
  let ans =''
  for (let i = 0; i < phone_number.length-4; i++) {split_number[i]='*'}
  for (let i = 0; i < phone_number.length; i++) {ans+=split_number[i]}
  return ans;
}