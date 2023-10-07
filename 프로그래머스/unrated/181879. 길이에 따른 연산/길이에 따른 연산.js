function solution(num_list) {
  let result = 1;
  let boolean = num_list.length >= 11
  boolean ?
    num_list.forEach((n)=>result+=n)
    : num_list.forEach((n)=>result*=n)
  return boolean ? result-1 : result
}
