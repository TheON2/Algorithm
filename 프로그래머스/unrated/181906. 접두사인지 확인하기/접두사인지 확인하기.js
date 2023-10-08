function solution(my_string, is_prefix) {
  let str=""
  for (let i = 0; i < my_string.length; i++) {
    str+=my_string[i];
    if(str===is_prefix) return 1;
  }
  return 0;
}